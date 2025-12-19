import { Text, styled, withStaticProperties, createStyledContext, Stack } from "@tamagui/core";
import { Spacer } from "../spacer";
import { Icon } from "../icon";
const ButtonContext = createStyledContext({
    size: "$md",
    color: "currentColor",
    variant: "default",
    isReadOnly: false
});
const shadowDefaultStyles = {
    shadowColor: "$shadow2",
    shadowRadius: 2, shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
};
const shadowHoverStyles = {
    shadowColor: "$shadow3",
    shadowRadius: 2, shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
};
const shadowPressStyles = {
    shadowColor: "$shadow1",
    shadowRadius: 1, shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
};
export const ButtonFrame = styled(Stack, {
    context: ButtonContext,
    group: "btn",
    name: "Button",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "transparent",
    cursor: "pointer",
    variants: {
        variant: {
            default: (_, { props }) => (Object.assign(Object.assign(Object.assign({ elevation: 1, borderColor: "$neutral6", backgroundColor: "$neutral1" }, shadowDefaultStyles), { hoverStyle: props.isReadOnly ? {} : Object.assign({ borderWidth: 1, borderColor: "$neutral7", backgroundColor: "$neutral1" }, shadowHoverStyles), pressStyle: props.isReadOnly ? {} : Object.assign({ borderWidth: 1, borderColor: "$neutral7", backgroundColor: "$neutral2" }, shadowPressStyles) }), props.isActive ? Object.assign({ borderWidth: 1, borderColor: "$neutral7", backgroundColor: "$neutral2" }, shadowPressStyles) : {})),
            inverse: (_, { props }) => (Object.assign(Object.assign(Object.assign({ elevation: 1, borderColor: "$neutral11", backgroundColor: "$neutral12" }, shadowDefaultStyles), { hoverStyle: props.isReadOnly ? {} : Object.assign({ borderColor: "$neutral11", backgroundColor: "$neutral12" }, shadowHoverStyles), pressStyle: props.isReadOnly ? {} : Object.assign({ borderColor: "$neutral11", backgroundColor: "$neutral11" }, shadowPressStyles) }), props.isActive ? Object.assign({ borderColor: "$neutral11", backgroundColor: "$neutral11" }, shadowPressStyles) : {})),
            // action: ( _, { props } ) => ( {
            //     borderColor: "$primary12",
            //     backgroundColor: "$primary12",
            //     hoverStyle: ( props as any ).isReadOnly ? {} : { borderColor: "$primary11", backgroundColor: "$primary11" },
            //     pressStyle: ( props as any ).isReadOnly ? {} : { borderColor: "$primary10", backgroundColor: "$primary10" },
            //     ... ( props as any ).isActive ? { borderColor: "$primary10", backgroundColor: "$primary10" } : {},
            // } ),
            create: (_, { props }) => (Object.assign({ borderStyle: "dashed", borderColor: "$new7", 
                // backgroundColor: "$new2",
                hoverStyle: props.isReadOnly ? {} : { backgroundColor: "$new3" }, pressStyle: props.isReadOnly ? {} : { backgroundColor: "$new4" } }, props.isActive ? { backgroundColor: "$new4" } : {})),
            filter: (_, { props }) => (Object.assign({ borderStyle: "dashed", borderColor: "$neutral7", backgroundColor: "$neutral1", hoverStyle: props.isReadOnly ? {} : { backgroundColor: "$neutral3" }, pressStyle: props.isReadOnly ? {} : { backgroundColor: "$neutral4" } }, props.isActive ? { backgroundColor: "$neutral4" } : {})),
            danger: (_, { props }) => (Object.assign({ backgroundColor: "$danger1", hoverStyle: props.isReadOnly ? {} : { backgroundColor: "$danger3" }, pressStyle: props.isReadOnly ? {} : { backgroundColor: "$danger4" } }, props.isActive ? { backgroundColor: "$danger4" } : {})),
            ghost: (_, { props }) => (Object.assign({ backgroundColor: "transparent", hoverStyle: props.isReadOnly ? {} : { backgroundColor: "$primary3" }, pressStyle: props.isReadOnly ? {} : { backgroundColor: "$primary4" } }, props.isActive ? { backgroundColor: "$primary4" } : {})),
            subtle: (_, { props }) => (Object.assign({ backgroundColor: "transparent", hoverStyle: props.isReadOnly ? {} : { backgroundColor: "$neutral3" }, pressStyle: props.isReadOnly ? {} : { backgroundColor: "$neutral4" } }, props.isActive ? { backgroundColor: "$neutral4" } : {})),
            option: (_, { props }) => (Object.assign({ justifyContent: "flex-start", backgroundColor: "transparent", hoverStyle: props.isReadOnly ? {} : { backgroundColor: "$neutral3", }, pressStyle: props.isReadOnly ? {} : { backgroundColor: "$neutral3", } }, props.isActive ? { backgroundColor: "$neutral3", } : {})),
        },
        isDisabled: {
            "true": { opacity: 0.5, cursor: "not-allowed" },
            "false": {},
        },
        isActive: {
            "true": {},
            "false": {},
        },
        isReadOnly: {
            "true": { cursor: "unset" },
            "false": {},
        },
        size: {
            "...size": (size, { tokens }) => ({
                borderRadius: tokens.radius[size],
                minWidth: tokens.size[size],
                minHeight: tokens.size[size],
                gap: tokens.space[size],
                py: tokens.space[size],
                px: tokens.space[size],
            })
        }
    },
    "$platform-web": {
        containerType: 'normal'
    },
});
export const ButtonLabel = styled(Text, {
    context: ButtonContext,
    name: "ButtonLabel",
    userSelect: "none",
    pointerEvents: "none",
    display: "flex",
    flexShrink: 0,
    textDecorationColor: "transparent",
    textDecorationLine: "none",
    color: "black",
    variants: {
        variant: {
            default: (_, { props }) => ({
                color: "$neutral12",
            }),
            inverse: (_, { props }) => ({
                color: "$neutral1",
            }),
            create: (_, { props }) => ({
                color: "$new9",
                "$group-btn-press": props.isReadOnly ? {} : { color: "$new10" },
            }),
            filter: (_, { props }) => ({
                color: "$neutral10",
                "$group-btn-press": props.isReadOnly ? {} : { color: "$neutral9" },
            }),
            danger: (_, { props }) => ({
                color: "$danger10",
                "$group-btn-press": props.isReadOnly ? {} : { color: "$danger9" },
            }),
            ghost: (_, { props }) => ({
                color: "$primary10",
                "$group-btn-press": props.isReadOnly ? {} : { color: "$primary9" },
            }),
            subtle: (_, { props }) => ({
                color: "$neutral11",
                "$group-btn-press": props.isReadOnly ? {} : { color: "$neutral12" },
            }),
            option: (_, { props }) => ({
                color: "$neutral12",
            }),
        },
        size: {
            "$sm": { fontSize: 14 },
            "$md": { fontSize: 16 },
            "$lg": { fontSize: 20 },
        },
        // size: {
        //     "...size": ( size, { font } ) => ( {
        //         fontSize: font?.size[ size ],
        //     } )
        // }
    }
});
const ButtonIcon = styled(Icon, {
    context: ButtonContext,
    name: "ButtonIcon",
    userSelect: "none",
    pointerEvents: "none",
    display: "flex",
    flexShrink: 0,
    color: "black",
    variants: {
        variant: {
            default: (_, { props }) => ({
                color: "$neutral12",
            }),
            inverse: (_, { props }) => ({
                color: "$neutral1",
            }),
            action: (_, { props }) => ({
                color: "$primary1",
                "$group-btn-press": props.isReadOnly ? {} : { color: "$primary2", }
            }),
            create: (_, { props }) => ({
                color: "$new9",
                "$group-btn-press": props.isReadOnly ? {} : { color: "$new10", }
            }),
            filter: (_, { props }) => ({
                color: "$neutral10",
                "$group-btn-press": props.isReadOnly ? {} : { color: "$neutral9", }
            }),
            danger: (_, { props }) => ({
                color: "$danger10",
                "$group-btn-press": props.isReadOnly ? {} : { color: "$danger9", }
            }),
            ghost: (_, { props }) => ({
                color: "$primary10",
                "$group-btn-press": props.isReadOnly ? {} : { color: "$primary9", }
            }),
            subtle: (_, { props }) => ({
                color: "$neutral11",
                "$group-btn-press": props.isReadOnly ? {} : { color: "$neutral12" },
            }),
            option: (_, { props }) => ({
                color: "$neutral12",
            }),
        },
        size: {
            "$sm": { size: "$sm" },
            "$md": { size: "$md" },
            "$lg": { size: "$lg" },
        },
    }
});
export const Button = withStaticProperties(ButtonFrame, {
    Frame: ButtonFrame,
    Label: ButtonLabel,
    Icon: ButtonIcon,
    Spacer: Spacer,
});
//# sourceMappingURL=index.js.map