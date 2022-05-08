import { useTaskContext } from "../../context/task-context";
import { Button } from "../Button/Button";
import { TasksList } from "../TasksList/TasksList";

import styles from "./TasksContainer.module.css";

export const TasksContainer = () => {
  const userTasksList = useTaskContext().getAllTasks();

  return (
    <>
      {userTasksList.length === 0 && (
        <h2 className={styles.noTasks}>No tasks 🤷‍♂️, add here anything</h2>
      )}

      {userTasksList.length > 0 && (
        <>
          <TasksList />
          <Button>Clear All</Button>
        </>
      )}
    </>
  );
};
