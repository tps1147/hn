'use client';
import Image from 'next/image'
import styles from '../styles/header.module.css'
import Link from 'next/link'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';


export default function Header() {

    const items = [
        {
            key: '1',
            label: 'Home',
            link: '/',
        },
        {
            key: '2',
            label: 'About',
            link: '/about',
        },
        {
            key: '3',
            label: 'Menu',
            link: '/menu',
        },
        {
            key: '4',
            label: 'Contact',
            link: '/contact',
        },
    ];

    const handleMenuFoldClick = (e) => {
        e.preventDefault();
    };

return (
    <div>
    <header className={styles.fixedHeader}>
            <Link className={styles.navItem} href="/">Home</Link>
            <Link className={styles.navItem} href="/about">About</Link>      
            <Image src="/Mlogo.png" alt="Mangia Mobile Logo" width={200} height={100} />
            <Link className={styles.navItem} href="/menu">Menu</Link>
            <Link className={styles.navItem} href="/contact">Contact</Link>
    </header>
    {/* version for smaller screens */}
    <div className={styles.dropdownNav}>
            <Image src="/Mlogo.png" alt="Mangia Mobile Logo" width={200} height={100} />
            <Dropdown
                menu={{
                items,
                }}
                trigger={['click']}
            >
                <MenuFoldOutlined onClick={handleMenuFoldClick} style={{ color: 'white', fontSize: 35, marginRight: 30}} />
            </Dropdown>
            </div>
    </div>
)
}
