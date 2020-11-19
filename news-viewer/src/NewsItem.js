import React from 'react';
import './NewsItem.scss';

const NewsItem = ({ article }) => {
  const { url, urlToImage, title, description } = article;
  return (
    <section className="newsitem-box">
      {urlToImage && (
        <div className="newsitem-thumbnail">
          <a href={url}>
            <img src={urlToImage} alt="thumbnail img"></img>
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

export default React.memo(NewsItem);
// export default NewsItem;
