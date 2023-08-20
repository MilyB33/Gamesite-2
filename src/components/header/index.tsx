import { LinkButton } from '..';
import styles from './style.module.scss';
import { FaArrowDown } from 'react-icons/fa';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.text}>Game on!</h1>

            <LinkButton href="#Platforms" variant="icon" className={styles.button}>
                <FaArrowDown />
            </LinkButton>
        </header>
    );
};
