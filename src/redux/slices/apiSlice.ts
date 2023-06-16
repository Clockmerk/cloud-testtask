import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.sbercloud.ru/content/v1/bootcamp/frontend",
  }),
  endpoints: (builder) => ({
    submitForm: builder.mutation({
      query: (payload) => ({
        url: "/",
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: payload,
      }),
    }),
  }),
});

export const { useSubmitFormMutation } = apiSlice;
export const apiReducer = apiSlice.reducer;
