import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from './app.module.css';

import './global.css';

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
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