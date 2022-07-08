function getInnerText(element: HTMLElement | ChildNode | null) {
    if (!element) {
        return [];
    }
    const texts: string[] = [];
    Array.from(element.childNodes).forEach((node) => {
        if (node.nodeType === 3) {
            texts.push(node.textContent?.trim() || "");
        } else {
            texts.push(...getInnerText(node));
        }
    });
    return texts;
}

export const getElementInnerText = (node: HTMLElement | null, fallback: string = "") => {
    if (!node) {
        return fallback;
    }

    return getInnerText(node).join("\n");
};

export const trimRight = (text: string) => {
    return text.replace(/\s+$/, "");
};
