import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
return (
    <header className={styles.footer}>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    </header>
)
}