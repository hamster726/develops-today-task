import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";

const  Index = () => {
  const router = useRouter();


  return (
    <div className={styles.container}>
      <Head>
        <title>DevelopsToday blog Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Index;
