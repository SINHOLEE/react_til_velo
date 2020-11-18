import React, { useRef } from 'react';
import './NewsItem.scss';

const NewsItem = ({ article }) => {
  const { url, urlToImage, title, description } = article;
  console.log('news');
  return (
    <section className="newsitem-box">
      {urlToImage && (
        <div className="newsitem-thumbnail">
          <a href={url}>
            <img src={urlToImage}></img>
          </a>
        </div>
      )}
      <article className="newsitem-content">
        <a href={url}>
          <h2>{title}</h2>
        </a>
        <p>{description}</p>
      </article>
    </section>
  );
};

// export default React.memo(NewsItem);
export default NewsItem;
