import Layout from '@components/layouts/Layout';

import styles from '@styles/modules/pages/Test.module.scss'

export default function Test1() {
  return (
    <section className={styles.page}>
      <h1>Test1</h1>
      <h1>Test1</h1>
      <h1>Test1</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
    </section>
  )
}

Test1.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}