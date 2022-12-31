/*JSX (javascrip + xml (html))

Componente é uma função que retorna um arquivo html;

Todo arquivo .jsx é um componente;

E lembre-se, não se pode ter um componente abaixo do outro, sem ter
algo englobando todos eles, como por exemplo, uma div;

Facilita a manuntenção do código;
*/
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import './global.css';
import styles from './App.module.css';


const posts=[
  {
    id:1,
    author:{
      avartarUrl:'https://github.com/CleriaF.png', 
      name:"Cleria Freitas",
      role:"Analista de Sistemas"
    },
    content: [
      { type: 'paragraph', content: 'Oii pessoal👋'},

      { type: 'paragraph', content: 'Acabei de fazer mais um projeto envolvendo NodeJs para cadastro e visualização de pontos de coletas em Fortaleza🚀'},
      { type: 'link', content:'jane.design/doctorcare'},  
    ],
    publishedAt:new Date('2022-12-28 15:00:00'),
  },
  {
    id:2,
    author:{
      avartarUrl:'https://github.com/victorskg.png', 
      name:"João Victor",
      role:"Developer Web"
    },
    content: [
      { type: 'paragraph', content: 'Olá 👋'},

      { type: 'paragraph', content: 'Atualmente estou me aprofundando em alguns temas como Design Patterns, Clean Arch, Domain Driven Development e Test Driven Development.🚀'},
      { type: 'link', content:'jane.design/doctorcare'},  
    ],
    publishedAt:new Date('2022-12-28 17:00:00'),
  },
];

 export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post =>{
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
 
  </div>
  )
}