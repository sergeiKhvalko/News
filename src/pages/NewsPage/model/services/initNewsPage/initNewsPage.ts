import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getNewsPageInited } from "../../selectors/newsPageSelectors";
import { newsPageActions } from "../../slices/newsPageSlice";
import { fetchNewsList } from "../fetchNewsList/fetchNewsList";

export const initNewsPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  "newsPage/initNewsPage",
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getNewsPageInited(getState());

    if (!inited) {
      dispatch(newsPageActions.initState());
      dispatch(fetchNewsList({}));
    }
  },
);
