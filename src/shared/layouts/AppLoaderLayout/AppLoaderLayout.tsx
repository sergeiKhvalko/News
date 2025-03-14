import { memo } from "react";
import * as styles from "./AppLoaderLayout.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton";
import { HStack, VStack } from "@/shared/ui/Stack";
import { MainLayout } from "../MainLayout/MainLayout";

export const AppLoaderLayout = memo(() => {
  return (
    <MainLayout
      header={
        <HStack className={styles.header}>
          <Skeleton
            width={"100%"}
            height={40}
            border="50%"
          />
        </HStack>
      }
      content={
        <VStack
          gap="16"
          style={{ height: "100%" }}
        >
          <Skeleton
            width="70%"
            height={32}
            border="16px"
          />
          <Skeleton
            width="40%"
            height={20}
            border="16px"
          />
          <Skeleton
            width="50%"
            height={20}
            border="16px"
          />
          <Skeleton
            width="30%"
            height={32}
            border="16px"
          />
          <Skeleton
            width="80%"
            height="40%"
            border="16px"
          />
          <Skeleton
            width="80%"
            height="40%"
            border="16px"
          />
        </VStack>
      }
      sidebar={
        <Skeleton
          border="32px"
          width={0}
          height="100%"
        />
      }
      footer={
        <Skeleton
          border="32px"
          width={"100%"}
          height={40}
        />
      }
    />
  );
});
