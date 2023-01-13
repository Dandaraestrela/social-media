import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/31369111?v=4"
            alt="user profile image"
          />
          <div className={styles.authorInfo}>
            <h4 className={styles.userName}>Dandara Estrela</h4>
            <span className={styles.userJob}>Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        Fala galeraa 👋 <br />
        Acabei de subir mais um projeto no meu portifa. <br />É um projeto que
        fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
        🚀
        <br /> 👉 jane.design/doctorcare <br />
        #novoprojeto #nlw #rocketseat
      </div>
    </article>
  );
};
