import Image from 'next/image'
import styles from '../styles/about.module.css'
import { Raleway, Poppins } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['200', '300', '400', '500'] })

export default function About() {
  return (
        <div className={styles.main}>
          <div className={styles.header}>
              <h1 className={`${styles.headerText} ${raleway.className}`}>About us</h1>
              <p className={`${styles.description} ${poppins.className}`}>
                The Family
              </p>
          </div>
          <div className={styles.ownersContainer}>
            <div className={styles.owner}>
              <Image src="/billHeader.png" alt="Owner 1" width={300} height={300} className={styles.image} />
              <h4 className={styles.ownerTitle}>Anthony Billeta</h4>
              <p className={styles.description}>Meet Anthony Billeta, the passionate and innovative co-owner of the vibrant food truck, Mangia, alongside his close friend and partner, Nick Moccia. Anthony's journey in the culinary world began with a love for both Italian and American cuisine, and he has expertly blended these influences into a delightful culinary experience on wheels.</p>
              <span className={styles.divider}></span>
              <p className={styles.description}>Anthony's dedication to creating an unforgettable dining experience is evident in Mangia's menu, which features a fusion of traditional Italian flavors with a modern American twist. From mouthwatering pasta dishes to inventive pizza creations, each item on the menu is crafted with precision and a touch of Anthony's culinary flair.</p>
            </div>
            <div className={styles.owner2}>
              <Image src="/nickHeader.png" alt="Owner 2" width={300} height={300} className={styles.image} />
              <h4 className={styles.ownerTitle}>Nick Moccia</h4>
              <p className={styles.description}>Introducing Nick Moccia, the dynamic co-owner of the beloved food truck, Mangia, alongside his culinary partner and friend, Anthony Billeta. Nick is the creative force behind the scenes, contributing his expertise and passion to the unique blend of Italian and American flavors that define Mangia's menu.</p>
              <span className={styles.divider}></span>
              <p className={styles.description}>With a background deeply rooted in the culinary arts, Nick brings a wealth of experience to the mobile kitchen. His culinary journey has taken him through the rich traditions of Italian cuisine and the diverse palette of American flavors. This fusion is reflected in Mangia's offerings, where Nick's inventive spirit shines through in every dish.</p>
            </div>
          </div>
        </div>
  )
}
