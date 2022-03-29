import styles from './top.module.css'
import Image from "next/image";

export default function Top() {
    return (
      <div className={styles.container}>
      <div className="row">
        <div className='col-logo'>
      <Image
        src="/shiba.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      </div>
      <div className='col-title'>
      <h1 className={styles.title}>
        Find your movies here!</h1>
        <span className={styles.desc}> Explore our gallery full of exciting films from all around the globe only for your entertainments. No hidden charges or disturbing ads.</span>
      </div>
    </div>
    </div>
      )
  }
  