import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@src/lib/api/client";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
});
