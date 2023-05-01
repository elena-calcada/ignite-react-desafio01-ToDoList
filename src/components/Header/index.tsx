import styles from "./Header.module.css"
import logotipo from "../../assets/logo.svg"
import { Input } from "../Ui/Input"
import { Button } from "../Ui/Button"
import { PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent, useState } from "react"

interface HeaderProps {
  onAddTask: (title: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {
  const [title, setTitle] = useState("")

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    if (!title) {
      alert("Esse campo é obrigatório")
      return
    }

    onAddTask(title)
    setTitle("")
  }

  return (
    <header className={styles.header}>
      <img src={logotipo} alt="Logotipo do To Do List" />

      <form
        className={styles.form}
        onSubmit={handleCreateNewTask}
      >
        <Input
          onChange={handleTitleChange}
          type="text"
          value={title}
          placeholder="Adicione uma nova tarefa"
        />
        <Button>
          Criar
          <PlusCircle size={16} weight="bold" />
        </Button>
      </form>
    </header>
  )
}