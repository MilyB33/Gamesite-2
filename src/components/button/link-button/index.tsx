'use client';

import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import styles from './style.module.scss';
import { ButtonSize, ButtonVariant } from './link-button.types';
import { usePathname } from 'next/navigation';

type LinkButtonProps = {
    children: React.ReactNode;
    variant: ButtonVariant;
    size?: ButtonSize;
    className?: string;
} & LinkProps;

export const LinkButton = ({ children, className, variant, size = 'medium', href, ...props }: LinkButtonProps) => {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={classNames(styles['link-button'], className, {
                [styles[`link-button-variant--${variant}`]]: true,
                [styles[`link-button--${size}`]]: true,
                [styles['is-active']]: pathname === href,
            })}
            {...props}>
            {children}
        </Link>
    );
};
