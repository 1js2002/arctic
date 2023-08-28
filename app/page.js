import React from "react";
import axios from "axios";
import ListProducts from "@/components/products/ListProducts";

import queryString from "query-string";

const getProducts = async (searchParams) => {
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    "price[gte]": searchParams.min,
    "price[lte]": searchParams.max,
    "ratings[gte]": searchParams.ratings,
  };

  const searchQuery = queryString.stringify(urlParams);

  const { data } = await axios.get(
    `http://localhost:3000/api/products?${searchQuery}`
  );
  return data;
};

const Home = async ({ searchParams }) => {
  const productsData = await getProducts(searchParams);

  return <ListProducts data={productsData} />;
};

export default Home;