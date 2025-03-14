import { memo, useCallback, useEffect } from "react";
import cn from "classnames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Page } from "@/widgets/Page";
import { NewsInfiniteList } from "../NewsInfiniteList/NewsInfiniteList";
import { fetchNextNewsPage } from "../../model/services/fetchNextNewsPage/fetchNextNewsPage";
import { newsPageReducer } from "../../model/slices/newsPageSlice";
import * as styles from "./NewsPage.module.scss";
import { initNewsPage } from "../../model/services/initNewsPage/initNewsPage";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchNewsList } from "../../model/services/fetchNewsList/fetchNewsList";

interface NewsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  newsPage: newsPageReducer,
};

const NewsPage = (props: NewsPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initNewsPage());

    const intervalId = setInterval(() => {
      dispatch(fetchNewsList({}));
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextNewsPage());
  }, [dispatch]);

  const content = (
    <Page
      onScrollEnd={onLoadNextPart}
      className={cn(styles.NewsPage, {}, [className])}
    >
      <NewsInfiniteList className={styles.list} />
    </Page>
  );

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount={false}
    >
      {content}
    </DynamicModuleLoader>
  );
};

export default memo(NewsPage);
