import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/robson-gds.png",
      name: "Robson Gomes",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galera", },

      { type: "paragraph", content: "consectetur adipiscing elit. Maecenas non ex nisl. Ut vel finibus diam, nec sodales justo.", },

      { type: "link", content: "neque.iaculis/dictum" }
    ],
    publishedAt: new Date("2022-08-18 20:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/robson-gds.png",
      name: "Robson Gomes",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galera", },

      { type: "paragraph", content: "consectetur adipiscing elit. Maecenas non ex nisl. Ut vel finibus diam, nec sodales justo.", },

      { type: "link", content: "neque.iaculis/dictum" }
    ],
    publishedAt: new Date("2022-08-19 20:00:00")
  },
]

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}