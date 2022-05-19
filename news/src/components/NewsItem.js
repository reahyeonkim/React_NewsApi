import React from "react";
import styled from "styled-components";

const NewsItem = ({ ariticle }) => {
  const { title, description, url, urlToImage } = ariticle;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className='thumbnail'>
          <a href='{url}' target='_blank' rel='noopener noreferrer' />
          <img src={urlToImage} alt='thumbnail' />
        </div>
      )}
      <div className='contents'>
        <h2>
          <a href='{url}' target={"_blank"} rel='noopener noreferrer' />
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1 rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin: 3rem;
  } 
`;

export default NewsItem;
