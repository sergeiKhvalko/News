import { HTMLAttributeAnchorTarget, memo } from "react";
import cn from "classnames";
import * as styles from "./NewsListItem.module.scss";
import { Text } from "@/shared/ui/Text";
import { Card } from "@/shared/ui/Card";
import { AppImage } from "@/shared/ui/AppImage";
import { Skeleton } from "@/shared/ui/Skeleton";
import { AppLink } from "@/shared/ui/AppLink";
import { VStack } from "@/shared/ui/Stack";
import { News } from "../../model/types/news";
import moment from "moment";

export interface NewsListItemProps {
  className?: string;
  news: News;
  target?: HTMLAttributeAnchorTarget;
}

export const NewsListItem = memo((props: NewsListItemProps) => {
  const { className, news, target } = props;

  return (
    <AppLink
      target={target}
      to={news.web_url}
      className={cn(styles.NewsListItem, {}, [className])}
    >
      <Card className={styles.card}>
        <div className={styles.imgWrapper}>
          <AppImage
            fallback={
              <Skeleton
                width={98}
                height={74}
              />
            }
            alt={"news"}
            src={`https://www.nytimes.com/${news.multimedia[0]?.url}`}
            className={styles.img}
          />
        </div>

        <VStack
          className={styles.info}
          gap="4"
        >
          <Text
            title={news.source}
            variant="accent"
            className={styles.cardTitle}
          />
          <Text
            text={news.abstract}
            className={""}
          />
          <Text
            text={moment(news.pub_date).utc().format("MMM DD, YYYY, HH.mm")}
            className={""}
          />
        </VStack>
      </Card>
    </AppLink>
  );
});
