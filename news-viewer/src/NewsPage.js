import React from 'react';
import Category from './Category';
import NewsList from './NewsList';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';
  return (
    <>
      <Category></Category>
      <NewsList category={category}></NewsList>
    </>
  );
};

export default NewsPage;
