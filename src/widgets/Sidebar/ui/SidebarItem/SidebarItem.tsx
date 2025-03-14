import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { memo } from "react";
import { SidebarItemType } from "../../model/types/sidebar";
import * as styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  closeMenu: () => void;
}

export const SidebarItem = memo(({ item, closeMenu }: SidebarItemProps) => {
  return (
    <AppLink
      to={item.path}
      className={styles.item}
      onClick={closeMenu}
    >
      <span className={""}>{item.text}</span>
    </AppLink>
  );
});
