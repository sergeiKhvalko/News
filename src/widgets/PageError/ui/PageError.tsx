import { Button } from "@/shared/ui/Button/Button";
import * as styles from "./PageError.module.scss";

export const PageError = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={styles.pageError}>
      <h1>{"Something went wrong"}</h1>
      <Button onClick={reloadPage}>{"Reload page"}</Button>
    </div>
  );
};
