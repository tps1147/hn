import Image from 'next/image'
import styles from './styles/page.module.css'
import { Raleway, Poppins } from 'next/font/google'
import Carousel  from './components/carousel'
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined, GoogleOutlined } from '@ant-design/icons'

const raleway = Raleway({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['200', '300', '400', '500'] })




export default function Home() {
  return (
    <main style={{ backgroundColor: 'black'}}>
      <div className={styles.main}>
        {/* for mobile only */}
        <div className={styles.mobileHeader}>
          <h1 className={styles.mobileHeaderText}>Mangia Mobile</h1>
          <p className={styles.mobileDescription}>Where love is the ingredient</p>
          <div className={styles.buttonContainerMobile}>
            <button className={`${styles.mainButton} ${raleway.className}`}>Menu</button>
            <button className={`${styles.mainButton} ${raleway.className}`}>About us</button>
            <button className={`${styles.mainButton} ${raleway.className}`}>Contact</button>
          </div>
        </div>
        
        {/* <div className={styles.buttonContainer}>
          <button className={`${styles.mainButton} ${raleway.className}`}>Menu</button>
          <button className={`${styles.mainButton} ${raleway.className}`}>About us</button>
          <button className={`${styles.mainButton} ${raleway.className}`}>Contact</button>
        </div> */}
      </div>
      <div className={styles.container2}>
        <h2 className={`${styles.midHeader} ${raleway.className}`}>Mangia mobile</h2>
        <p className={`${styles.mainDescription} ${poppins.className}`}>
          At Mangia, we believe in more than just food; we believe in creating an experience. Our food truck isn't just a place to grab a quick bite—it's a lively hub where friends and family gather to savor the perfect marriage of tradition and innovation. 
        </p>
        <div className={styles.listing}>
            <span className={styles.listItem}>Pizzas</span> <span className={styles.divider}/> <span className={styles.listItem}>Steaks</span> <span className={styles.divider}/> <span className={styles.listItem}>Hoagies</span> 
        </div>
        <div className={styles.socialPosts}>
          <div className={styles.socialRow}></div>
          <div className={styles.postBox}>
            <Carousel />
          </div>
          <p className={styles.postComment}>
            "The best food truck in the city! I love the pizza and the staff is always so friendly. I highly recommend Mangia Mobile to anyone looking for a quick bite to eat."
          </p>
        </div>
        
      </div>
      <div className={styles.container3}>
          
      </div>
    </main>
  )
}
