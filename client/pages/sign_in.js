import HomeLayout from '@components/layouts/HomeLayout'

import styles from '@styles/modules/pages/Home.module.scss';

export default function Sign_In() {
  return (
    <>
      <section className={styles.page}>
        <h1>Sign In</h1>
      </section>
    </>
  );
}

Sign_In.getLayout = function getLayout(page) {
  return (
    <>
      <HomeLayout></HomeLayout>
      {page}
    </>
  );
};