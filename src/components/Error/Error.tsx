import { ReactNode } from "react";
import errorImg from "../../assets/img/error.png";
import styles from "./Error.module.css";

type errorProps = {
  children: ReactNode;
};

export const Error = ({ children }: errorProps) => {
  return (
    <div className={styles.error}>
      <img src={errorImg} alt='' height='50px' />
      <p>{children}</p>
    </div>
  );
};
