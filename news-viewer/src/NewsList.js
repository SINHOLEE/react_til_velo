import React from 'react';
import './NewsList.scss';
import NewsItem from './NewsItem';

import axios from 'axios';
import usePromise from './lib/usePromise';

const getNewsByCategory = async (category) => {
  try {
    const q = category === 'all' ? '' : `&category=${category}`;
    const url = 'http://newsapi.org/v2/top-headlines?country=kr' + q + '&apiKey=7eb98c47bb494f1bb463ec106036bf33';
    const res = await axios.get(url);
    return res.data.articles;
  } catch (e) {
    alert(e);
    throw new Error('뉴스데이터 가저오는데 실패했습니다.');
  }
};
const NewsList = ({ category }) => {
  // const [loading, setLoading] = useState(false);
  const [loading, articles, error] = usePromise(getNewsByCategory, [category], category);

  if (loading) {
    return <div>로딩중...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  // 맨 처음 랜더링 할 때, 아티클이 아무것도 없는데 map을 돌면 문제가 생기므로 아무것도 랜더링 하지 않고 시작.
  if (!articles) {
    return null;
  } else {
    return (
      <div className="newslist-block">
        {articles.map((article) => (
          <NewsItem key={article.url} article={article}></NewsItem>
        ))}
      </div>
    );
  }
};

export default NewsList;
