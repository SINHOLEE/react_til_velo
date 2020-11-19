import React from 'react';
import { NavLink } from 'react-router-dom';
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

const Category = () => {
  return (
    <div className="categories-box">
      {categories.map((cate) => {
        return (
          <NavLink
            key={cate.name}
            className="category"
            activeClassName="active"
            // exact={cate.name === 'all'}
            exact={true}
            // className={cate.name === category ? 'category active' : 'category'}
            to={cate.name === 'all' ? '/' : `/${cate.name}`}
          >
            {cate.text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Category;
