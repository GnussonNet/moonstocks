import React from 'react';
import styles from '@styles/components/Layout.module.scss';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <h1>Layout</h1>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
