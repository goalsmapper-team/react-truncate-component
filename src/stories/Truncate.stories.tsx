import React, { useState, useCallback } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Truncate from "../Truncate";

export default {
    title: "Example/Truncate",
    component: Truncate,
    argTypes: {},
} as ComponentMeta<typeof Truncate>;

const Template: ComponentStory<typeof Truncate> = (args) => (
    <div style={{ width: 400, padding: 16, border: "1px solid #ccc" }}>
        <Truncate {...args} />
    </div>
);

const SampleContent = () => {
    return (
        <div>
            <h4>Where does it come from?</h4>
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                piece of classical Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                going through the cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                BC. This book is a treatise on the theory of ethics, very popular during the
                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
                from a line in section 1.10.32.
            </p>
            <p>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
            </p>
        </div>
    );
};

export const Basic = Template.bind({});

Basic.args = {
    lines: 4,
    children: <SampleContent />,
};

const ShowMoreTemplate: ComponentStory<typeof Truncate> = (args) => {
    const [truncated, setTruncated] = useState(true);
    const [shouldShowLess, setShouldShowLess] = useState(false);

    const toggleTruncate = useCallback(() => setTruncated(!truncated), [truncated]);
    const onTruncate = useCallback((newTruncated) => {
        if (newTruncated) {
            setShouldShowLess(true);
        } else {
            setTruncated(false)
        }
    }, []);

    return (
        <div style={{ width: 400, padding: 16, border: "1px solid #ccc" }}>
            <Truncate
                {...args}
                lines={truncated ? args.lines : 0}
                onTruncate={onTruncate}
                ellipsis={
                    <span>
                        ... <button onClick={toggleTruncate}>Show more</button>
                    </span>
                }
            />
            {shouldShowLess && !truncated && <button onClick={toggleTruncate}>Show less</button>}
        </div>
    );
};

export const NoTruncate = ShowMoreTemplate.bind({});
NoTruncate.args = {
    lines: 4,
    children: <div>Where does it come from?</div>,
};

export const DoTruncateShowMore = ShowMoreTemplate.bind({});
DoTruncateShowMore.args = {
    lines: 4,
    children: <SampleContent />,
};


export const TruncateSomething = ShowMoreTemplate.bind({});
TruncateSomething.args = {
    lines: 7,
    children: <div>
        Something here
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
        <div>Another thing</div>
    </div>
};
