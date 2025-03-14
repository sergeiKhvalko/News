import { memo, ReactElement } from "react";
import cn from "classnames";
import * as styles from "./MainLayout.module.scss";

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
  sidebar: ReactElement;
  footer: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { className, sidebar, content, header, footer } = props;

  return (
    <div className={cn(styles.MainLayout, [className])}>
      <div className={styles.header}>{header}</div>
      {sidebar}
      <div className={styles.content}>{content}</div>
      <div className={styles.footer}>{footer}</div>
    </div>
  );
});
