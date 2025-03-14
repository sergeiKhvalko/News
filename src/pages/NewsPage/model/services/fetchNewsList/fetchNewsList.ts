import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { News } from "@/entities/News";
import { getNewsPageNum } from "../../selectors/newsPageSelectors";

interface FetchNewsListProps {
  replace?: boolean;
}

export const fetchNewsList = createAsyncThunk<
  News[],
  FetchNewsListProps,
  ThunkConfig<string>
>("newsPage/fetchNewsList", async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const page = getNewsPageNum(getState());

  function transformNewsArray(newsArray: any) {
    return newsArray.map((item: any, index: number) => {
      return {
        id: index + 1,
        abstract: item.abstract,
        web_url: item.web_url,
        multimedia: item.multimedia,
        pub_date: item.pub_date,
        source: item.source,
      };
    });
  }

  try {
    const response = await extra.api.get(
      `https://api.nytimes.com/svc/archive/v1/2025/3.json?api-key=vEJwp3nmtqMIO6FDqQwyQdjbTzJcbdAh`,
    );

    if (!response.data.response.docs) {
      throw new Error();
    }

    return transformNewsArray(
      response.data.response.docs.slice(page * -10).reverse(),
    );
  } catch (e) {
    return rejectWithValue("error");
  }
});
