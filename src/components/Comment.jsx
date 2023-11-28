import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"
import * as Dialog from "@radix-ui/react-dialog"

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/mateus-de-oliveira.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mateus Fiuza</strong>
              <time
                title="27 de dezembro às 12h"
                dateTime="2022-05-11 08:13:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <Dialog.Root className={styles.root}>
              <Dialog.Trigger>
                <button
                  //onClick={handleDeleteComment}
                  title="Deletar comentário"
                >
                  <Trash size={24} />
                </button>
              </Dialog.Trigger>
              <Dialog.Overlay className={styles.overlay} />
              <Dialog.Content className={styles.content}>
                <Dialog.Title>Excluir Comentário</Dialog.Title>
                <p>Você tem certeza que gostaria de excluir este comentário?</p>
                <div>
                  <Dialog.Close>
                    <button>Cancelar</button>
                  </Dialog.Close>
                  <button onClick={handleDeleteComment}>Sim, Excluir</button>
                </div>
              </Dialog.Content>
            </Dialog.Root>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size="20px" />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
