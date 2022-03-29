import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={"row " + styles.margin}>
      <div className={"col " + styles.col_grey}>
        <h1>Pcari Movie</h1>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <label>Join our newsletter</label>
      </div>
      <div className={"col " + styles.col_darker}>
        <div className="row">
        <div className={"col "+styles.col_small}>
          <label className={styles.label}>
            <ul>
              <li>Product</li>
              <li>Product</li>
              <li>Product</li>
              <li>Product</li>
            </ul>
          </label>
          </div>
          <div className={"col "+styles.col_small}>
          <label className={styles.label}>
          <ul className={styles.list}>
              <li>Product</li>
              <li>Product</li>
              <li>Product</li>
              <li>Product</li>
            </ul>
          </label>
          </div>
          <div className={"col "+styles.col_small}>
          <label className={styles.label}>
          <ul>
              <li>Product</li>
              <li>Product</li>
              <li>Product</li>
              <li>Product</li>
            </ul>
          </label>
          </div>
        </div>
        
      </div>
    </div>
  );
}
