import Image from 'next/image'
import styles from '../styles/about.module.css'
import { Raleway, Poppins } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['200', '300', '400', '500'] })

export default function About() {
  return (
        <div className={styles.main}>
            <h2 className={styles.headerText}>About us</h2>
        </div>
  )
}
