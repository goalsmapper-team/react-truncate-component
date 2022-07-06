import React, { useCallback, useEffect, useMemo, useRef } from 'react';

import { TruncateProps } from './Truncate.types';

import useStateWithCallbackLazy from './hooks/useStateWithCallbackLazy';

const getElementInnerText = (
    node: HTMLElement | null,
    fallback: string = ''
) => {
    if (!node) {
        return fallback;
    }
    const div = document.createElement('div');
    const contentKey = 'innerText' in node ? 'innerText' : 'textContent';
    div.innerHTML = node.innerHTML.replace(/\r\n|\r|\n/g, ' ');

    let text = div[contentKey];
    const test = document.createElement('div');
    test.innerHTML = 'foo<br/>bar';

    if (test[contentKey]?.replace(/\r\n|\r/g, '\n') !== 'foo\nbar') {
        div.innerHTML = div.innerHTML.replace(/<br.*?[\/]?>/gi, '\n');
        text = div[contentKey];
    }

    return text || fallback;
};

const trimRight = (text: string) => {
    return text.replace(/\s+$/, '');
};

const Truncate: React.FC<TruncateProps> = ({
    children,
    ellipsis = '...',
    lines: numLines = 1,
    trimWhitespace = false,
    onTruncate,
    width,
    ...spanProps
}) => {
    const targetRef = useRef<HTMLSpanElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const ellipsisRef = useRef<HTMLSpanElement>(null);
    const timoutIdRef = useRef<number | null>(null);

    const canvasContext = useRef<CanvasRenderingContext2D | null>(null);

    const [targetWidth, setTargetWidth] = useStateWithCallbackLazy<number>(0);

    useEffect(() => {
        const canvas = document.createElement('canvas');
        canvasContext.current = canvas.getContext('2d');
        const ellipsis = ellipsisRef.current;
        return () => {
            timoutIdRef.current && cancelAnimationFrame(timoutIdRef.current);
            if (ellipsis) {
                ellipsis.parentNode?.removeChild(ellipsis);
            }
        };
    }, []);

    const calcualteLayout = useCallback(
        (callback?: (val: number) => void): any => {
            if (!targetRef.current) {
                return;
            }
            let result = width;
            if (!result) {
                if (targetRef.current.parentNode instanceof HTMLElement) {
                    result = Math.floor(
                        targetRef.current.parentNode?.getBoundingClientRect()
                            .width
                    );
                } else {
                    result = 0;
                }
            }

            // Delay calculation until parent node is inserted to the document
            // Mounting order in React is ChildComponent, ParentComponent
            if (!result) {
                return window.requestAnimationFrame(() =>
                    calcualteLayout(callback)
                );
            }

            const style = window.getComputedStyle(targetRef.current);
            const font = [
                style.fontWeight,
                style.fontStyle,
                style.fontSize,
                style.fontFamily
            ].join(' ');

            if (canvasContext.current) {
                canvasContext.current.font = font;
            }

            setTargetWidth(result, callback);
        },
        [setTargetWidth, width]
    );

    useEffect(() => {
        const onResize = () => {
            calcualteLayout();
        };

        calcualteLayout(() => {
            // Node not needed in document tree to read its content
            if (textRef.current) {
                textRef.current.parentNode?.removeChild(textRef.current);
            }
        });

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [width, calcualteLayout]);

    const handleTruncate = useCallback(
        (didTruncate: boolean) => {
            if (typeof onTruncate === 'function') {
                timoutIdRef.current = window.requestAnimationFrame(() => {
                    onTruncate(didTruncate);
                });
            }
        },
        [onTruncate]
    );

    const renderLine = useCallback(
        (line: string, i: number, arr: string[]) => {
            if (i === arr.length - 1) {
                return (
                    <span key={i}>
                        {line}
                        {ellipsis}
                    </span>
                );
            } else {
                const br = <br key={i + 'br'} />;

                if (line) {
                    return [<span key={i}>{line}</span>, br];
                } else {
                    return br;
                }
            }
        },
        [ellipsis]
    );

    const measureWidth = (text: string) => {
        return canvasContext.current?.measureText(text).width || 0;
    };

    const renderContent = useMemo(() => {
        const mounted = !!(targetRef.current && targetWidth);
        if (!mounted) {
            return null;
        }
        const getLines = () => {
            const lines: string[] = [];
            const text = getElementInnerText(textRef.current);
            const textLines = text.split('\n').map(line => line.split(' '));
            let didTruncate = true;
            const ellipsisWidth = ellipsisRef.current?.offsetWidth || 0;

            for (let line: number = 1; line <= numLines; line++) {
                const textWords = textLines[0];

                // Handle newline
                if (textWords.length === 0) {
                    lines.push();
                    textLines.shift();
                    line--;
                    continue;
                }

                let resultLine: string = textWords.join(' ');

                if (measureWidth(resultLine) <= targetWidth) {
                    if (textLines.length === 1) {
                        // Line is end of text and fits without truncating
                        didTruncate = false;

                        lines.push(resultLine);
                        break;
                    }
                }

                if (line === numLines) {
                    // Binary search determining the longest possible line inluding truncate string
                    const textRest = textWords.join(' ');

                    let lower = 0;
                    let upper = textRest.length - 1;

                    while (lower <= upper) {
                        const middle = Math.floor((lower + upper) / 2);

                        const testLine = textRest.slice(0, middle + 1);

                        if (
                            measureWidth(testLine) + ellipsisWidth <=
                            targetWidth
                        ) {
                            lower = middle + 1;
                        } else {
                            upper = middle - 1;
                        }
                    }

                    let lastLineText = textRest.slice(0, lower);

                    if (trimWhitespace) {
                        lastLineText = trimRight(lastLineText);

                        // Remove blank lines from the end of text
                        while (!lastLineText.length && lines.length) {
                            const prevLine = lines.pop();
                            lastLineText = trimRight(prevLine || '');
                        }
                    }
                    lines.push(lastLineText);
                } else {
                    // Binary search determining when the line breaks
                    let lower = 0;
                    let upper = textWords.length - 1;

                    while (lower <= upper) {
                        const middle = Math.floor((lower + upper) / 2);

                        const testLine = textWords
                            .slice(0, middle + 1)
                            .join(' ');

                        if (measureWidth(testLine) <= targetWidth) {
                            lower = middle + 1;
                        } else {
                            upper = middle - 1;
                        }
                    }

                    // The first word of this line is too long to fit it
                    if (lower === 0) {
                        // Jump to processing of last line
                        line = numLines - 1;
                        continue;
                    }

                    resultLine = textWords.slice(0, lower).join(' ');
                    textLines[0].splice(0, lower);
                    lines.push(resultLine);
                }
            }
            handleTruncate(didTruncate);
            return lines;
        };
        if (numLines > 0) {
            return getLines().map(renderLine);
        }
        return children;
    }, [
        children,
        handleTruncate,
        numLines,
        renderLine,
        targetWidth,
        trimWhitespace
    ]);

    return (
        <span {...spanProps} ref={targetRef}>
            <span>{renderContent}</span>
            <span ref={textRef}>{children}</span>
            <span
                ref={ellipsisRef}
                style={{
                    position: 'fixed',
                    visibility: 'hidden',
                    top: 0,
                    left: 0
                }}
            >
                {ellipsis}
            </span>
        </span>
    );
};

export default Truncate;
