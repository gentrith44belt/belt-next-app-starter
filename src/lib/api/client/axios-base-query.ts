import { AxiosError } from "axios";

import { AxiosBaseQueryType } from "@src/lib/api/types";
import { axiosClient } from "@src/lib/api/client/axios-client";

export const axiosBaseQuery =
  (): AxiosBaseQueryType =>
  async ({ url, method, body, params }) => {
    try {
      const result = await axiosClient({
        url: url,
        method,
        data: body,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
