import styles from "./search-theater.module.css";
import Image from "next/image";
import { useRouter } from 'next/router'
function searchTheater() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
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
          {search(router.asPath)}
          
          <button className={styles.button}>Search</button>
        </div>
      </div>
    </div>
  );
}
function search(url){
    if(url=="/search-theatre"){
        return(
            <>
            <input className={styles.form_text} type="text" placeholder="Search by theatre"></input>
            <input className={styles.form_date} type="date" placeholder="Search"></input>
            </>
        )
    }else if(url=="/search-time"){
        return(
            <>
            <input className={styles.form_text+" "+styles.form_text_100} type="text" placeholder="Search by theatre"></input>
            <input className={styles.form_date+" "+styles.form_date_100} type="datetime-local" placeholder="Search"></input>
            <input className={styles.form_date+" "+styles.form_date_100} type="datetime-local" placeholder="Search"></input>
            </>
        )
    }
}
export default searchTheater