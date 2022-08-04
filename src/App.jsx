import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Robson Gomes" 
            content="Nulla ornare tempus enim, eu vestibulum ligula faucibus vel. Vivamus et velit ut nunc bibendum sagittis sed eu dolor."
          />
          <Post 
            author="Cheetos Kid" 
            content="Nulla ornare tempus enim, eu vestibulum ligula faucibus vel. Vivamus et velit ut nunc bibendum sagittis sed eu dolor."
          />
        </main>
      </div>
    </>
  )
}