export interface TruncateProps extends React.HTMLProps<HTMLSpanElement> {
    lines?: number;
    ellipsis?: React.ReactNode;
    trimWhitespace?: boolean;
    onTruncate?(isTruncated: boolean): void;
    width?: number;
}
