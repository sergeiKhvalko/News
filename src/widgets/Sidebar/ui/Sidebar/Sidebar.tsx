import cn from "classnames";
import * as styles from "./Sidebar.module.scss";
import { memo, useMemo, useState } from "react";
import { VStack } from "@/shared/ui/Stack";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { useSidebarItems } from "../../model/selectors/getSidebarItems";
import { Button } from "@/shared/ui/Button";

interface SidebarProps {
  className?: string;
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar = memo(
  ({ isOpen, toggleSidebar, className }: SidebarProps) => {
    const sidebarItemsList = useSidebarItems();

    const itemsList = useMemo(
      () =>
        sidebarItemsList.map((item) => (
          <SidebarItem
            key={item.path}
            item={item}
            closeMenu={toggleSidebar}
          />
        )),
      [sidebarItemsList],
    );

    return (
      <aside
        className={cn(styles.Sidebar, [className], {
          [styles.closed]: !isOpen,
        })}
      >
        <VStack
          role="navigation"
          gap="32"
          className={styles.list}
        >
          {itemsList}
        </VStack>
        <Button onClick={toggleSidebar}>X</Button>
      </aside>
    );
  },
);
