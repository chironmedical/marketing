import React from 'react';
import ArticleCard from '../cards/ArticleCard';

const ArticleTwoColCardBlock = ({
  articles = [],
  classValue = '',
  locale = 'zh-HK',
  builderMode = true,
  isSelected,
  selectBlockFun,
}: ArticleTwoColCardBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  const getUnknowAuthorName = (locale) => {
    const name = {
      "zh-HK": "楷和醫療",
      "zh-CN": "楷和医疗",
      "en-US": "Chiron Medical"
    };
    return name[locale];
  }

  return (
    <div
      className={`bg-avatar-purple w-full ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}>
      <div className={`flex flex-col items-center my-sm-subject xl:my-lg-content mx-auto w-full px-sm-subtopic lg:px-lg-subtopic max-w-carousel`}>
        <h1 className="text-sm-h1 lg:text-lg-h3-article leading-9 lg:leading-15 w-full text-center mb-sm-subtopic lg:mb-lg-subtopic tracking-wideset text-deep-blue-600">
          { locale === "zh-HK" || locale === "" ? "文章新聞" : locale === "en-US" ? "Articles" : "文章新闻" }
        </h1>
        <div className="flex flex-col md:flex-row w-full items-center justify-evenly">
          {
            articles.sort((a, b) => b.releaseAt - a.releaseAt).slice(0, 2).map((article) => (
              <a
                key={article.id}
                href={article.page ? article.page.pathname : '#'}
                className="w-sm-article-card md:max-w-md-article-card lg:max-w-lg-article-card xl:max-w-xl-article-card md:w-1/2"
              >
                <ArticleCard
                  title={article.name}
                  abstract={article.excerpt.replace(/<(.*?)>/g, '')}
                  author={article.author ? {
                    name: article.author.titledName,
                    title: article.author.role,
                    avatar: article.author.portrait,
                  } : {
                    name: getUnknowAuthorName(locale),
                    title: " ",
                    avatar: "https://cdn.chiron.care/cms/general/icons/chiron-logo.svg"
                  }}
                />
              </a>
            ))
          }
        </div>
        <a
          href={locale === "zh-HK" ? "/hk/文章新聞" : locale === "en-US" ? "/en/articles" : locale === "zh-HK" ? "/cn/文章新闻" : "/文章新聞"}>
          <button
            className={`font-bold leading-loose rounded-custom outline-none w-inline-image h-12 lg:h-16 text-white bg-deep-blue-600 mt-sm-content`}
          >
            <h3 className="text-sm-h3-card lg:text-lg-h3-card">
              { locale === "zh-HK" && "更多資訊" }
              { locale === "zh-CN" && "更多资讯" }
              { locale === "en-US" && "More" }
            </h3>
          </button>
        </a>
      </div>
    </div>
  )
};

export interface ArticleTwoColCardBlockProps {
  articles: any
  classValue?: string
  locale: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(ArticleTwoColCardBlock);
