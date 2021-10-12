import HomeLayout from '@components/layouts/HomeLayout'

import styles from '@styles/modules/pages/Home.module.scss';

export default function Home() {
  return (
    <>
      <section className={styles.page}>
        <h1>Home</h1>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      <HomeLayout></HomeLayout>
      {page}
    </>
  );
};