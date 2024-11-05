import { PropsWithChildren } from "react";
import { type BoxProps, type XStackProps, type YStackProps } from "../box";
export type DialogProps = PropsWithChildren & {
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    render?: (getProps: () => BoxProps, setOpen: (isOpen: boolean) => void) => void;
};
declare function DialogFrame({ isOpen: controlledIsOpen, onOpenChange, render, children }: DialogProps): import("react/jsx-runtime").JSX.Element;
declare function DialogContent(props: YStackProps): import("react/jsx-runtime").JSX.Element;
export type DialogHeaderProps = XStackProps & {
    icon?: string;
    color?: string;
    label: string;
};
declare function DialogHeader({ icon, color, label, ...props }: DialogHeaderProps): import("react/jsx-runtime").JSX.Element;
declare function DialogBody({ ...props }: YStackProps): import("react/jsx-runtime").JSX.Element;
declare function DialogFooter({ ...props }: YStackProps): import("react/jsx-runtime").JSX.Element;
export declare const Dialog: typeof DialogFrame & {
    Frame: typeof DialogFrame;
    Content: typeof DialogContent;
    Header: typeof DialogHeader;
    Body: typeof DialogBody;
    Footer: typeof DialogFooter;
};
export {};
