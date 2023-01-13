import styles from "./Header.module.css";

import igniteLogo from "../../assets/Ignite-simbol.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="ignite logo" />
      <h1>Ignite Feed</h1>
    </header>
  );
};
