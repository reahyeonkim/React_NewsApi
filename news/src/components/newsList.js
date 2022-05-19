import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ea2b4df1017c4c8c8fe34368d1d391c6`
    );
  }, [category]);

  //대기중 일때
  if (loading) {
    return <NewsListBlock>Loading중...</NewsListBlock>;
  }
  //아직 뉴스 에  값이 설정되지 않았을때
  if (!response) {
    return null;
  }
  if (error) {
    return <NewsListBlock>에러발생</NewsListBlock>;
  }
  //값이 유효할때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default NewsList;
