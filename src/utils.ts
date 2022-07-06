export const getElementInnerText = (node: HTMLElement | null, fallback: string = "") => {
    if (!node) {
        return fallback;
    }
    const div = document.createElement("div");
    const contentKey = "innerText" in node ? "innerText" : "textContent";
    div.innerHTML = node.innerHTML.replace(/\r\n|\r|\n/g, " ");

    let text = div[contentKey];
    const test = document.createElement("div");
    test.innerHTML = "foo<br/>bar";

    if (test[contentKey]?.replace(/\r\n|\r/g, "\n") !== "foo\nbar") {
        div.innerHTML = div.innerHTML.replace(/<br.*?[\/]?>/gi, "\n");
        text = div[contentKey];
    }

    return text || fallback;
};

export const trimRight = (text: string) => {
    return text.replace(/\s+$/, "");
};
