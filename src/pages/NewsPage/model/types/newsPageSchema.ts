import { EntityState } from "@reduxjs/toolkit";
import { News } from "@/entities/News";

export interface NewsPageSchema extends EntityState<News, number> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  _inited: boolean;
}
