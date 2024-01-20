import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.BaseUrl}`,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
    getSingleProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productApi;
