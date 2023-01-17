import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50"
        alt="user cover"
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/31369111?v=4" />
        <h4 className={styles.userName}>
          <strong>Dandara Estrela</strong>
        </h4>
        <span className={styles.userJob}>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
