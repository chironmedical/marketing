import React from 'react';

const ArticleCard = ({
  title,
  abstract,
  author,
  classValue = ""
}: ArticleCardProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div className={`${className} flex flex-col my-sm-subtopic px-sm-card zoom w-full relative`}>
      <img
        alt="author-avatar"
        className="absolute left-0 translate-vertical-half top-half rounded-half w-sm-article-author-avatar h-sm-article-author-avatar md:w-article-author-avatar md:h-article-author-avatar bg-white object-cover shadow-custom z-40"
        src={ author.avatar }
        loading="lazy"
      />
      <div className="w-sm-article-card-main-container md:w-article-card-main-container bg-white shadow-custom ml-auto
        md:pb-40px md:pt-lg-subtopic px-sm-subtopic py-sm-subtopic md:px-lg-subtopic rounded-custom
      ">
        <h1 className="text-sm-h4-article md:text-sm-h1 leading-28px md:leading-48px text-deep-blue-600 h-sm-article-card-title md:h-article-card-title restricted-line-number-double">
          { title }
        </h1>
        <h2 className={`text-sm-h6 md:text-lg-h4-card leading-28px text-light-blue-500 h-article-card-excerpt restricted-line-number mt-lg-card tracking-widest`}>
          { abstract }
        </h2>
        <div className="flex flex-col mt-40px">
          <h2 className="text-sm-h5 md:text-lg-h4-card leading-24px text-deep-blue-600">
            { author.name }
          </h2>
          <p className="text-sm-h6 md:text-lg-h5 leading-24px text-light-blue-500 md:h-article-card-author-role">
            { author.title.indexOf(',') !== -1 ? author.title.substr(0, author.title.indexOf(',')) : author.title }
          </p>
        </div>
      </div>
    </div>
  );
};

export interface ArticleCardProps {
  title: string
  abstract: string
  author: any
  classValue?: string
}

export default React.memo(ArticleCard);
