/// <reference types="react" />
import React$1 from 'react';

interface TruncateProps extends React.HTMLProps<HTMLSpanElement> {
    lines?: number;
    ellipsis?: React.ReactNode;
    trimWhitespace?: boolean;
    onTruncate?(isTruncated: boolean): void;
    width?: number;
}

declare const Truncate: React$1.FC<TruncateProps>;

export { Truncate as default };
