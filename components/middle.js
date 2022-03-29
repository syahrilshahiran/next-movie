import styles from "./middle.module.css";
import Image from "next/image";

function Middle({movie}) {
  return (
    
    <div className={styles.container}>
      <div className={"row " + styles.margin}>
        <div className="col">
          <h1>New Releases</h1>
        </div>
        <div className="col">
          <div className={styles.view}>
            <h2>View More</h2>
          </div>
        </div>
      </div>
      <div className={"row " + styles.margin}>
        {movie.data.map((movie,i) => {
          return (
            <div key={movie.Movie_ID}>
              {card(i,movie)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
function upperCase(string){
  return string.charAt(0).toUpperCase() + string.slice(1)
}
function card(i,movie){
  if(i==0){
    return (
    <div className={styles.card_big}>
      
      {card_inner(movie)}
      <div className={styles.card_overlay}></div>
    </div>)
  }else{
    return (
      <div className={styles.card}>
        {card_inner(movie)}
        <div className={styles.card_overlay}></div>
      </div>)
  }
function card_inner(movie){
  return(
    <>
    <Image
          src={movie.Poster} // Route of the image file
          height={500} // Desired size with correct aspect ratio
          width={200} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        <div className={styles.card_bottom}>
          <label className={styles.card_title}>{movie.Title}</label>
          <label className={styles.card_genre}>{upperCase(movie.Genre)}</label>
          <span className={styles.card_hour}>
            <Image
              className={styles.icon_svg}
              src="/../public/time.svg"
              width={15}
              height={15}
              alt="time"
            />
            <label className={styles.time}>{movie.Duration}</label>
          </span>
          <span className={styles.card_view}>
          <Image
              className={styles.icon_svg}
              src="/../public/eye.svg"
              width={15}
              height={15}
              alt="eye
              "
            />
            <label className={styles.view}>{movie.Views}</label>
          </span>
        </div>
    </>
  )
}
}
export default Middle;
