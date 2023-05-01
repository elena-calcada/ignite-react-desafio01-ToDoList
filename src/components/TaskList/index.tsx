import { ITask } from "../../App"
import { Task } from "../Task"
import styles from "./TaskList.module.css"
import clipboard from "../../assets/clipboard.svg"

interface TaskListProps {
  tasks: ITask[]
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function TaskList({ tasks, onDelete, onComplete }: TaskListProps) {
  const tasksQuantity = tasks.length
  const completedTasksQuantity = tasks.filter((task) => task.isComplited).length

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.created}>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div className={styles.completed}>
          <p>Concluídas</p>
          <span>{completedTasksQuantity} de {tasksQuantity}</span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          )
        })}

        {tasks.length <= 0 && (
          <section className={styles.withoutTasks}>
            <img src={clipboard} alt="Imagem que reporesenta zero tarefas" />

            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </section>
        )}
      </div>
    </main>
  )
}