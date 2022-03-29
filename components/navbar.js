import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Nav({ children }) {
  return (
    <>
      <nav className={styles.navhead}>
        <ul>
          <li>
            <h1>PcariMovie</h1>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <Link href="/movie"><a> Movies </a></Link>
          </li>
          <li>
            <a href="">TV Show</a>
          </li>
          <li>
            <a href="">Video</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li className={styles.navleft}>
            <span className={styles.itemleft}>
            <Image
              src="/search.svg" // Route of the image file
              height={25} // Desired size with correct aspect ratio
              width={25} // Desired size with correct aspect ratio
              alt="Your Name"
              
            />
            </span>
            <span className={styles.circle}></span>
            <span className={styles.itemleft}>John Glich</span>
          </li>
        </ul>
      </nav>
    </>
  );
}
