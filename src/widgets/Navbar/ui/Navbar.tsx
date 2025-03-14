import cn from "classnames";
import { NavbarProps } from "./Navbar.props";
import * as styles from "./Navbar.module.scss";
import { Button } from "@/shared/ui/Button";
import { useCallback, useState } from "react";
import { HStack } from "@/shared/ui/Stack";

export const Navbar = ({ toggleSidebar, className }: NavbarProps) => {
  return (
    <header className={cn(styles.Navbar, [className])}>
      <div
        className={styles.burger}
        onClick={toggleSidebar}
      >
        ☰
      </div>
      <h1>BESIDER</h1>
    </header>
  );
};
