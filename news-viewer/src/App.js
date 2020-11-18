import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import Category from './Category';
import NewsList from './NewsList';

// new form
// {
//   "source": {  // 출처
//     "id": null,
//     "name": "Munhwa.com"
//   },
//   "author": null,
//   "title": "팀, 나달 잡고 '왕중왕전' ATP 파이널스 준결승 선착 - 문화일보",
//   "description": "도미니크 팀(3위·오스트리아)이 라파엘 나달(2위·스페인)을 꺾고 시즌 왕중왕전 격인 2020 남자프로테니스(A..",
//   "url": "http://www.munhwa.com/news/view.html?no=20201118MW093140309848",
//   "urlToImage": "http://image.munhwa.com/gen_news/202011/20201118MW093140309848_b.jpg",
//   "publishedAt": "2020-11-18T00:32:24Z",
//   "content": "(3·) (2·) 2020 (ATP) .17() 2020 2 2-0(7-6&lt;9-7&gt; 7-6&lt;7-4&gt;) 2 . \r\n1, 2 20 . \r\n1 2-5 .\r\n. 1 .\r\n2 8 2 . \r\n(6·) (8·) 2-1(6-1 4-6 7-6&lt;8-6&gt;) .\r\n1 1 .\r\n.\r\n300 . \r\n&lt;&gt;\r\n&lt;(c)&gt;"
// },
function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((cate) => setCategory(cate), []);
  console.log('app');
  return (
    <div className="App">
      <Category category={category} onSelect={onSelect}></Category>
      <NewsList category={category}></NewsList>
    </div>
  );
}

export default App;
