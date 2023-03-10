import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";
import { ChangeEvent, FormEvent, useState } from "react";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import styles from "./Post.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostProps {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export const Post = ({ author, publishedAt, content }: PostProps) => {
  const [comments, setComments] = useState([{ id: 0, content: "Amei!" }]);
  const [newCommentText, setNewCommentText] = useState("");

  const isNewCommentEmpty = !newCommentText.length;

  const publishedDateFormated = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleSubmitComment = (e: FormEvent) => {
    e.preventDefault();
    setComments((prev) => [
      ...prev,
      { id: prev.length, content: newCommentText },
    ]);
    setNewCommentText("");
  };

  const handleNewCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(e.target.value);
  };

  const handleDeleteComment = (id: number) => {
    const updatedList = comments.filter((comment) => comment.id !== id);
    setComments(updatedList);
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <h4 className={styles.userName}>{author.name}</h4>
            <span className={styles.userJob}>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph")
            return <p key={line.content}>{line.content}</p>;
          if (line.type === "link")
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleSubmitComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            content={comment.content}
            onDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </article>
  );
};
