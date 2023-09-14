import { apikey, baseURL, ts, hash } from "@/libs/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMarvelApiCharactersResponse } from "@/types/characters.interface";

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  tagTypes: ["Characters"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL}`,
    paramsSerializer: (params) => {
      const paramStrings = [];
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          paramStrings.push(`${key}=${encodeURIComponent(params[key])}`);
        }
      }
      // passing the credencials here
      paramStrings.push(`ts=${ts}&apikey=${apikey}&hash=${hash}`);
      // Join the parameter strings with '&' to form the final query string
      return paramStrings.join("&");
    },
  }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<IMarvelApiCharactersResponse, string>({
      query: (name) => {
        const params = {};
        if (name) {
          (params as any).nameStartsWith = name;
        }
        return {
          url: `/characters`,
          params,
        };
      },
      providesTags: ["Characters"],
    }),
  }),
});

export const { useGetAllCharactersQuery } = charactersApi;
