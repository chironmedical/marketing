import React from 'react';

const PostInfo = ({
  date = "",
  keywords = [],
  builderMode = true,
  isSelected,
  selectBlockFun,
}: PostInfoProps): React.ReactElement => {
  return (
    <div
      className={`flex flex-col lg:flex-row mt-sm-card mb-sm-subtopic lg:mt-sm-subtopic lg:mb-lg-subtopic ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div className={`flex flex-row items-center`}>
        <img alt="clock" src="https://cdn.chiron.care/cms/general/icons/clock.svg" className="h-4 lg:w-4 leading-6" />
        <p className="text-sm-p lg:text-lg-h5 text-light-blue-500 leading-6 ml-sm-card">
          { date.replace('T', ' ') }
        </p>
      </div>
      <div className={`flex flex-row items-center ml-0 mt-sm-subtopic lg:mt-0 lg:ml-sm-subtopic`}>
        <p className="text-sm-p lg:text-lg-h5 text-light-blue-500 leading-6 mx-sm-card hidden lg:block"></p>
        <img alt="clock" src="https://cdn.chiron.care/cms/general/icons/tag.svg" className="h-4 lg:w-4 leading-6" />
        <div className="flex flex-col lg:flex-row ml-sm-card lg:ml-0">
          <p className="text-sm-p lg:text-lg-h5 text-light-blue-500 leading-6 mx-sm-card hidden lg:block"></p>
          {
            Array.isArray(keywords) ? (
              keywords.map((tag, tagIndex) => (
                <div key={`tag-${tagIndex}`}>
                  <p className="text-sm-p lg:text-lg-h5 text-light-blue-500 leading-6">
                    <a href={`/文章新聞/tag?value=${tag}`} target="_blank" rel="noreferrer">{tag}</a>
                    {
                      tagIndex !== (keywords.length - 1) && (
                        <span className="mx-4">|</span>
                      )
                    }
                  </p>
                </div>
              ))
            ) : keywords
          }
        </div>
      </div>
    </div>
  );
};

export interface PostInfoProps {
  date: string
  keywords: string[]
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default PostInfo;
