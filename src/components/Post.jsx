import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post({ author, publishedAt }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' MMMM 'às' 	HH:mm'h'", {
    locale: ptBr,
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="" dateTime="2022/08/05 08:13:30">
          {publishedDateFormatted}
        </time>
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

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}