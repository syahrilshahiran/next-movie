import styles from "./search-theater.module.css";
import Image from "next/image";

export default function searchTheater() {
  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col-logo">
          <Image
            src="/../public/play.svg" // Route of the image file
            height={100} // Desired size with correct aspect ratio
            width={100} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>
        <div className={styles.loader}></div>
        <div className="col-title">
          <h1 className={styles.title}>Search your movies here!</h1>
          <input className={styles.form_text} type="text" placeholder="Search by theatre"></input>
          <input className={styles.form_date} type="datetime" placeholder="Search"></input>
          <button className={styles.button}>Search</button>
        </div>
      </div>
    </div>
  );
}
