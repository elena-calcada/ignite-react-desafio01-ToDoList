import { Check, Trash } from "phosphor-react"
import styles from "./Task.module.css"
import { ITask } from "../../App"

interface TaskProps {
  task: ITask;
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Task({ task, onDelete, onComplete }: TaskProps) {
  function handleDeleteTask() {
    onDelete(task.id);
  }

  function handleClickCheckTask() {
    onComplete(task.id)
  }

  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={handleClickCheckTask}
      >
        {task.isComplited ?
          <div className={styles.done}>
            <Check color="#F2F2F2" weight="bold" size={12} />
          </div>
          :
          <div className={styles.todo} />}
      </button>
      <p
        className={task.isComplited ? styles.textCompleted : ""}
      >
        {task.title}
      </p>
      <button
        className={styles.trash}
        onClick={handleDeleteTask}
      >
        <Trash size={18} />
      </button>
    </div>
  )
}