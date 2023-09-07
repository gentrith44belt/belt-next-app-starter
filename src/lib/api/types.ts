import { SerializedError } from "@reduxjs/toolkit";
import { BaseQueryFn } from "@reduxjs/toolkit/dist/query/react";
import { AxiosError, AxiosRequestConfig } from "axios";

export type ApiError =
  | SerializedError
  | AxiosError<{
      message?: string;
      detail?: string;
    }>
  | {
      data?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    };

export type AxiosBaseQueryType = BaseQueryFn<
  {
    url?: string;
    method?: AxiosRequestConfig["method"];
    body?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
  },
  unknown,
  ApiError,
  {}, // eslint-disable-line @typescript-eslint/ban-types
  Record<string, unknown>
>;

export type AxiosConfigWithOptionalRetry = AxiosRequestConfig & {
  _retry?: boolean;
};
