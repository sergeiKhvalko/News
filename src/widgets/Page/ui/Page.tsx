import {
  memo,
  ReactNode,
  UIEvent,
  useRef,
  RefObject,
  MutableRefObject,
} from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import cn from "classnames";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUIScrollByPath, uiActions } from "@/features/UI";
import { StateSchema } from "@/app/providers/StoreProvider";
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle";
import * as styles from "./Page.module.scss";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = "PAGE_ID";

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef(null) as RefObject<HTMLDivElement | null>;
  const triggerRef = useRef(null) as RefObject<HTMLDivElement | null>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) =>
    getUIScrollByPath(state, pathname),
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef: undefined,
    callback: onScrollEnd,
  });
  useInitialEffect(() => {
    wrapperRef.current!.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    console.log("scroll");

    dispatch(
      uiActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      }),
    );
  }, 500);

  return (
    <main
      ref={wrapperRef}
      className={cn(styles.Page, {}, [className])}
      onScroll={onScroll}
      id={PAGE_ID}
    >
      {children}
      {onScrollEnd ? (
        <div
          className={styles.trigger}
          ref={triggerRef}
        />
      ) : null}
    </main>
  );
});
