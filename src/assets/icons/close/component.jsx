import styles from "./style.module.scss";

export default function CloseIcon({ container }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" className={styles[container]}>
      <path d="M25.161,76.274c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l49.37-49.37 c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-49.37,49.37C25.672,76.176,25.417,76.274,25.161,76.274z" />
      <path d="M74.531,76.274c-0.256,0-0.512-0.098-0.707-0.293l-49.37-49.37c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0l49.37,49.37c0.391,0.391,0.391,1.023,0,1.414C75.042,76.176,74.787,76.274,74.531,76.274z" />
    </svg>
  );
}
