// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const prodactApi = createApi({
  reducerPath: 'prodactApi',
  // @ts-ignore
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_URLREAL_KEY}/api/` }),
  endpoints: (builder) => ({
    getprodactByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetprodactByNameQuery } = prodactApi