import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { TaskInput } from "./components/TaskInput/TaskInput";
import { Footer } from "./components/Footer/Footer";
import { TaskContextProvider } from "./context/task-context";
import { TasksContainer } from "./components/TasksContainer/TasksContainer";

export const App = () => {
  return (
    <TaskContextProvider>
      <>
        <Header />
        <main className={styles.content}>
          <TaskInput />
          <TasksContainer />
        </main>
        <p>Test</p>
        <Footer />
      </>
    </TaskContextProvider>
  );
};
