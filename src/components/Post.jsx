import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/robson-gds.png"/>
          <div className={styles.authorInfo}>
            <strong>Robson Gomes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="05 de agosto às 08:13h" dateTime="2022/08/05 08:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>consectetur adipiscing elit. Maecenas non ex nisl. Ut vel finibus diam, nec sodales justo.</p>
        <p><a href="">neque.iaculis/dictum</a></p>
        <p>
          <a href="">#neque</a>{' '}
          <a href="">#iaculis</a>{' '}
          <a href="">#dictum</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentario"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}