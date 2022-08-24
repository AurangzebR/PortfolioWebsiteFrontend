import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar/NavBar'
import Body from '../components/body/Body'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Aurangzeb</title>
      </Head>
    <NavBar style={styles} />
    
       <Body />
     

      <footer className={styles.footer}>
        <div>
          Created By Aurangzeb
        </div>
      </footer>
    </div>
  )
}
