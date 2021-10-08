import Image from 'next/image';
import styles from '@styles/modules/layouts/Navbar.module.scss';

function Navbar({ children }) {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.image_container}>
          <Image src="/icon.svg" alt="moonstocks" layout="fill" />
        </div>
        <ul className={styles.nav_items}>{children}</ul>
      </nav>
    </header>
  );
}

export default Navbar;
