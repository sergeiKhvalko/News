import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { News } from "@/entities/News";
import { NewsPageSchema } from "../types/newsPageSchema";
import { fetchNewsList } from "../services/fetchNewsList/fetchNewsList";

const newsAdapter = createEntityAdapter<News, number>({
  selectId: (news) => news.id,
});

export const getNews = newsAdapter.getSelectors<StateSchema>(
  (state) => state.newsPage || newsAdapter.getInitialState(),
);

const newsPageSlice = createSlice({
  name: "newsPageSlice",
  initialState: newsAdapter.getInitialState<NewsPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 10,
  }),
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      state.limit = 10;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          newsAdapter.removeAll(state);
        }
      })
      .addCase(fetchNewsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          newsAdapter.setAll(state, action.payload);
        } else {
          newsAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchNewsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: newsPageReducer, actions: newsPageActions } =
  newsPageSlice;
