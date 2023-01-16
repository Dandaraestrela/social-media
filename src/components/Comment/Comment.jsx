import { Trash, ThumbsUp } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

export const Comment = ({ id, content, onDeleteComment }) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => {
    setLikeCount((prev) => prev + 1);
  };

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

            <button
              title="Deletar comentário"
              onMouseDown={() => onDeleteComment(id)}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
