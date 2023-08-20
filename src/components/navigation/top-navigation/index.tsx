import { LinkButton } from '@/components';
import styles from './style.module.scss';
import Image from 'next/image';

export const TopNavigation = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.logo}>
                {/* TODO: make it a link */}
                <Image src="/logo.png" alt="logo" width={64} height={64} />
            </div>

            <div className={styles.items}>
                <LinkButton href="/" variant="nav-link" size="large">
                    Home
                </LinkButton>
                <LinkButton href="/games" variant="nav-link" size="large">
                    Games
                </LinkButton>
                <LinkButton href="/articles" variant="nav-link" size="large">
                    Articles
                </LinkButton>
                <LinkButton href="/contact" variant="nav-link" size="large">
                    Contact
                </LinkButton>
            </div>
        </nav>
    );
};
