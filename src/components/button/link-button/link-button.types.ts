// TODO: Move to main button
const Variants = {
    'nav-link': 'nav-link',
    icon: 'icon',
} as const;

const Sizes = {
    small: 'small',
    medium: 'medium',
    large: 'large',
} as const;

export type ButtonVariant = EnumType<typeof Variants>;
export type ButtonSize = EnumType<typeof Sizes>;
