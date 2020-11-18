import React, { useEffect, useState } from 'react';
import './NewsList.scss';
import NewsItem from './NewsItem';

import axios from 'axios';
import Category from './Category';

const getNewsByCategory = async (category) => {
  try {
    const q = category === 'all' ? '' : `&category=${category}`;
    const url = 'http://newsapi.org/v2/top-headlines?country=kr' + q + '&apiKey=7eb98c47bb494f1bb463ec106036bf33';
    const res = await axios.get(url);
    return res.data.articles;
  } catch (e) {
    alert(e);
  }
};
const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log('list', category);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        setArticles(await getNewsByCategory(category));
      } catch (e) {
        alert(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);
  if (loading) {
    return <div>로딩중...</div>;
  }
  // 맨 처음 랜더링 할 때, 아티클이 아무것도 없는데 map을 돌면 문제가 생기므로 아무것도 랜더링 하지 않고 시작.
  if (!articles) {
    return null;
  }
  return (
    <div className="newslist-block">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article}></NewsItem>
      ))}
    </div>
  );
};

export default NewsList;
