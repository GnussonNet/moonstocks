import HomeLayout from '@components/layouts/HomeLayout'

import styles from '@styles/modules/pages/Home.module.scss';

export default function Create_Account() {
  return (
    <>
      <section className={styles.page}>
        <h1>Create Account</h1>
      </section>
    </>
  );
}

Create_Account.getLayout = function getLayout(page) {
  return (
    <>
      <HomeLayout></HomeLayout>
      {page}
    </>
  );
};