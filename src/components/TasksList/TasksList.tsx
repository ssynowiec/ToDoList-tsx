import { useTaskContext } from "../../context/task-context";
import { Task } from "../Task/Task";
import styles from "./TasksList.module.css";

export const TasksList = () => {
  const ctx = useTaskContext();
  const tasks = ctx.getAllTasks();

  return (
    <section className={styles.tasksList}>
      <ul className={styles.taskListContainer}>
        {tasks.map(task => {
          return <Task task={task} key={task.id} />;
        })}
      </ul>
    </section>
  );
};
