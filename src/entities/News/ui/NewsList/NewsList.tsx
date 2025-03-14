import { HTMLAttributeAnchorTarget, memo } from "react";
import cn from "classnames";
import { NewsListItem } from "../NewsListItem/NewsListItem";
import * as styles from "./NewsList.module.scss";
import { News } from "../../model/types/news";
import { HStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { Loader } from "@/shared/ui/Loader";
import moment from "moment";

interface NewsListProps {
  className?: string;
  news: News[];
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const NewsList = memo((props: NewsListProps) => {
  const { className, news, isLoading, target } = props;

  if (!isLoading && !news.length) {
    return (
      <div className={cn(styles.NewsList, {}, [className])}>
        <Text title={"News not found"} />
      </div>
    );
  }

  function groupNewsByDate(news: News[]) {
    const groupedNews: { [key: string]: Array<News> } = {};

    news.forEach((item) => {
      const date = moment(item.pub_date).utc().format("DD.MM.YYYY");

      if (!groupedNews[date]) {
        groupedNews[date] = [];
      }
      groupedNews[date].push(item);
    });

    return groupedNews;
  }

  const groupedNews = groupNewsByDate(news);

  return (
    <>
      <HStack
        justify="center"
        wrap="wrap"
        gap="32"
        className={cn(styles.NewsList, {}, [])}
      >
        {Object.keys(groupedNews).map((newsDate) => (
          <div key={newsDate}>
            <h2>News for {newsDate}</h2>
            {groupedNews[newsDate].map((item) => (
              <NewsListItem
                news={item}
                target={target}
                key={item.id}
                className={styles.card}
              />
            ))}
            {isLoading && (
              <div className={cn(styles.loader)}>
                <Loader />
              </div>
            )}
          </div>
        ))}
      </HStack>
    </>
  );
});
