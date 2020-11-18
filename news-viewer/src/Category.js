import React from 'react';
import './Category.scss';

const categories = [
  { text: '전체보기', name: 'all' },
  { text: '사업', name: 'business' },
  { text: '연예', name: 'entertainment' },
  { text: '일반', name: 'general' },
  { text: '건강', name: 'health' },
  { text: '과학', name: 'science' },
  { text: '스포츠', name: 'sports' },
  { text: '기술', name: 'technology' },
];

const Category = ({ category, onSelect }) => {
  console.log('ca', category);
  return (
    <div className="categories-box">
      {categories.map((cate) => {
        return (
          <div
            key={cate.name}
            className={cate.name === category ? 'category active' : 'category'}
            onClick={() => {
              onSelect(cate.name);
            }}
          >
            {cate.text}
          </div>
        );
      })}
    </div>
  );
};

export default Category;
