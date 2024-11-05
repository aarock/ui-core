import { createAnimations } from '@tamagui/animations-react-native';
export const baseAnimations = createAnimations({
    fast: {
        damping: 20,
        mass: 1.2,
        stiffness: 250,
    },
    medium: {
        damping: 10,
        mass: 0.9,
        stiffness: 100,
    },
    slow: {
        damping: 20,
        stiffness: 60,
    },
});
// import { createAnimations } from '@tamagui/animations-moti'
// export const defaultAnimations = createAnimations( {
//     fast: {
//         type: 'spring',
//         damping: 20,
//         mass: 1.2,
//         stiffness: 250,
//     },
//     medium: {
//         type: 'spring',
//         damping: 10,
//         mass: 0.9,
//         stiffness: 100,
//     },
//     slow: {
//         type: 'spring',
//         damping: 20,
//         stiffness: 60,
//     },
// } )
//# sourceMappingURL=animations.native.js.map