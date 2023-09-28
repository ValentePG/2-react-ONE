import styles from "./inicio.module.css"

import posts from 'json/posts.json';
import Postcard from "../../componentes/postcard";


export default function Inicio() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
          <li key={post.id}>
            <Postcard post={post} />
          </li>
      ))}
    </ul>
  )
}