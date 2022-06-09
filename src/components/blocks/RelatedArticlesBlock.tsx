import React from 'react';
import Carousel from '../elements/Carousel';
import PassageCard from '../cards/PassageCard';

const RelatedArticlesBlock = ({
  articles,
  branchName,
  locale = "zh-HK",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: RelatedArticlesBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  const authorInfo = (author) => {
    if (author) {
      return {
        name: `${author.titledName}`,
        title: author.role,
        avatar: `https://cdn.chiron.care/${author.portrait}`,
      }
    } else {
      return {
        name: "",
        title: "",
        avatar: "",
      }
    }
  };

  return (
    <div
      className={`w-full bg-light-blue-300 ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      {
        articles.length > 0 && (
          <Carousel
            title={locale === "" || locale === "zh-HK" ? "相關文章" : locale === "en-US" ? "Related Articles" : "相关文章"}
            classValue="my-sm-subject xl:my-lg-content mx-auto w-full px-sm-subtopic lg:px-lg-subtopic max-w-carousel"
            slidesToShow={articles.length < 3 ? articles.length : 3}
            elements={
              articles.slice(0, 5).map((article, index) => (
                <a
                  href={article.page ? article.page.pathname : '#'}
                  key={`article-${index}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <PassageCard
                    locale={locale}
                    imageSrc={article.thumbnail}
                    postedAt={article.postedAt}
                    title={article.name}
                    abstract={article.excerpt}
                    author={{
                      name: authorInfo(article.author).name,
                      title: authorInfo(article.author).title,
                      avatar: authorInfo(article.author).avatar,
                    }}
                  />
                </a>
              ))
            }
            hasMore={{
              title: locale === "" || locale === "zh-HK" ? "更多文章" : locale === "en-US" ? "More" : "更多文章",
              link: locale === "zh-HK" ? `/hk/文章新聞/tag?value=${branchName}` : locale === "" ? `/文章新聞/tag?value=${branchName}` : locale === "en-US" ? `/en/articles/tag?value=${branchName}` : `/cn/文章新闻/tag?value=${branchName}`,
            }}
          />
        )
      }
    </div>
  );
};

export interface RelatedArticlesBlockProps {
  articles: Record<string, any>
  branchName: string
  person: Record<string, any>
  locale: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default RelatedArticlesBlock;
