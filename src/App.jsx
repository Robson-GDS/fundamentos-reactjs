import { Header } from "./components/Header"

import './global.css';
import { Post } from "./Post";

export function App() {
  return (
    <>
      <Header />
      <Post 
        author="Robson Gomes" 
        content="Nulla ornare tempus enim, eu vestibulum ligula faucibus vel. Vivamus et velit ut nunc bibendum sagittis sed eu dolor."
      />
      <Post 
        author="Cheetos Kid" 
        content="Nulla ornare tempus enim, eu vestibulum ligula faucibus vel. Vivamus et velit ut nunc bibendum sagittis sed eu dolor."
      />
    </>
  )
}