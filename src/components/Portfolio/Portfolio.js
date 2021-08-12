import styles from './Portfolio.module.css';

export default function Portfolio() {
  return (
    <div className={styles.Port}>
      <h3>Creations</h3>
      <div className={styles.Container}>
        <a href='https://adams-place.org'>
          <div className={styles.Image}></div>
        </a>
      </div>
      <div className={styles.Container}>
        <a href='https://blog-five-amber.vercel.app'>
          <div className={styles.Image2}></div>
        </a>
      </div>
      <div className={styles.Container}>
        <a href='https://evron.dev'>
          <div className={styles.Image3}></div>
        </a>
      </div>
    </div>
  );
}
