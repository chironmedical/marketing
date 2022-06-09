import React from 'react';
import createSubgroup from '../../libs/createSubgroup';
import Pagination from '../elements/Pagination';
import PassageCard from '../cards/PassageCard';
import moment from 'moment';
import queryString from 'query-string';

const ArticleCardBlockByTag = ({
  locale = "zh-HK",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: ArticleCardBlockByTagProps): React.ReactElement => {
  const [search, setSearch] = React.useState('');
  const [searchArticles, setSearchArticles] = React.useState([]);
  const [tagName, setTagName] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const httpParameter = queryString.parse(window.location.search);
      const tag = httpParameter.value;
      if (Array.isArray(tag)) {
        setTagName(tag[0]);
      } else {
        setTagName(tag || "");
      }
    } else {
      console.error('window is not defined')
    }
  }, []);

  React.useEffect(() => {
    const query = `
      query {
        articles(tag: "${tagName}") {
          id
          name
          thumbnail
          postedAt
          excerpt
          content
          tags
          releaseAt

          author {
            id
            titledName
            role
            portrait
          }

          page {
            id
            pathname
          }
        }
      }
    `;

    if (tagName !== "") {
      fetch('https://api.marketing.chiron.care/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query }),
      })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res.data.articles;
      })
      .then((data) => {
        const _searchArticles = data
          .sort((a, b) => moment(b.postedAt).unix() - moment(a.postedAt).unix())
          .filter((article) => article.name.includes(search));

        setSearchArticles(_searchArticles);
      })
      .catch((error) => {
        console.error(error);
      })
    }
  }, [search, tagName])

  const className = `${classValue}`;

  const perPage = 18;
  const numOfPagesForArticles = Math.ceil(searchArticles.length / perPage);
  const [currentPage, setCurrentPage] = React.useState(1);

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
      className={`flex flex-col items-center w-inline lg:w-lg-inline xl:w-xl-inline mx-auto ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:px-sm-card">
        <h3 className="text-sm-h3-card lg:text-lg-h3-card text-deep-blue-600">
          { locale === "zh-HK" && `找到 ${searchArticles.length} 項有關「${tagName}」的文章` }
          { locale === "zh-CN" && `找到 ${searchArticles.length} 项有关「${tagName}」的文章` }
          { locale === "en-US" && `Found ${searchArticles.length} articles about "${tagName}"` }
        </h3>
        <div
          style={{ borderBottom: '1px solid' }}
          className="flex flex-row mt-sm-subtopic lg:mt-0 h-8 w-full lg:w-80 border-black justify-between"
        >
          <input
            type="text"
            placeholder="搜尋"
            className="text-lg-h6 leading-7 outline-none w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
          <img
            alt="search"
            src="https://cdn.chiron.care/cms/general/icons/search.svg"
            className="ml-1 lg:ml-0 w-4 h-full" />
        </div>
      </div>
      <div className="flex flex-col w-full my-sm-content lg:my-lg-content">
        {
          createSubgroup(searchArticles.slice((currentPage-1) * perPage, currentPage * perPage), 3).map((row, rowIndex) => (
            <div
              className={`flex flex-col lg:flex-row w-full ${rowIndex !== 0 ? "mt-sm-content lg:mt-sm-subject" : ""}`}
              key={`row-${rowIndex}`}>
              {
                row.map((article, articleIndex) => (
                  <div
                    className={`flex flex-row w-full lg:w-1/3 justify-center ${articleIndex !== 0 ? "mt-sm-content lg:mt-0" : ""}`}
                    key={`article-${articleIndex}`}>
                    <a href={article.page ? article.page.pathname : '#'}>
                      <PassageCard
                        locale={locale}
                        imageSrc={article.thumbnail}
                        postedAt={article.postedAt}
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
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
      <Pagination
        totalPages={numOfPagesForArticles}
        currentPage={currentPage}
        range={5}
        classValue="mb-sm-content lg:mb-lg-content"
        onNextPage={() => setCurrentPage(currentPage+1)}
        onPreviousPage={() => setCurrentPage(currentPage-1)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export interface ArticleCardBlockByTagProps {
  articles: any
  locale: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(ArticleCardBlockByTag);
