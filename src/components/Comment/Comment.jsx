import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/31369111?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <h4>Dandara Estrela</h4>
              <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};