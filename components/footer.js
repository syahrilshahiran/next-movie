import styles from "./footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <div className={"row " + styles.margin}>
      <div className={"col " + styles.col_grey}>
        <h1 className={styles.title}>PcariMovie</h1>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <label>Join our newsletter</label>
        <div>
          <input className={styles.email} type="text" placeholder="Insert your mail here"></input>
          <div className={styles.box}></div>
          </div>
      </div>
      <div className={"col " + styles.col_darker}>
        <div className="row">
        <div className={"col "+styles.col_small}>
          <label className={styles.label}>
            <ul className={styles.list}>
              <li>Product</li>
              <li>Movies</li>
              <li>TV Show</li>
              <li>Videos</li>
            </ul>
          </label>
          </div>
          <div className={"col "+styles.col_small}>
          <label className={styles.label}>
          <ul className={styles.list}>
              <li>Media Group</li>
              <li>Nice Studio</li>
              <li>Nice News</li>
              <li>Nice TV</li>
            </ul>
          </label>
          </div>
          <div className={"col "+styles.col_small}>
          <label className={styles.label}>
          <ul className={styles.list}>
              <li>Sitemap</li>
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </label>
          </div>
          <br/>  
        </div>
        <div className={"row "+styles.col_info}>
          <div className={"col "+styles.col_wide}>
          <Image
              className={styles.icon_svg}
              src="/../public/pin.svg"
              width={20}
              height={20}
              alt="time"
            />
           <span className={styles.info}> 8819 Ohio St. South Gate, California 90280</span>
          </div>
          <div className={"col "+styles.col_wide}>
          <Image
              className={styles.icon_svg}
              src="/../public/email.svg"
              width={20}
              height={20}
              alt="time"
            />
           <span className={styles.info}>ourstudio@hello.com</span> 
          </div>
          <div className={"col "+styles.col_wide}>
          <Image
              className={styles.icon_svg}
              src="/../public/phone.svg"
              width={20}
              height={20}
              alt="time"
            />
           <span className={styles.info}>+271 386-647-3637</span> 
          </div>
        </div>
      </div>
    </div>
  );
}
