import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { TaskInput } from "./components/TaskInput/TaskInput";
import { TasksList } from "./components/TasksList/TasksList";
import { Footer } from "./components/Footer/Footer";
import { Button } from "./components/Button/Button";
import { TaskContextProvider } from "./context/task-context";
import { Task } from "./types";

export const App = () => {
  const userTasksList: Task[] = [{ id: 0, name: "gym", completed: false }];
  return (
    <TaskContextProvider>
      <Header />
      <main className={styles.content}>
        <TaskInput />
        {userTasksList.length === 0 && (
          <h2 className={styles.noTasks}>No tasks 🤷‍♂️, add here anything</h2>
        )}
        {userTasksList.length > 0 && (
          <>
            <TasksList />
            <Button>Clear All</Button>
          </>
        )}
      </main>
      <p>Test</p>
      <Footer />
    </TaskContextProvider>
  );
};
