import React from 'react';
import ModalVideo from 'react-modal-video';

const VideoBlock = ({
  videoUrl = "",
  videoCover = "",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: VideoBlockPrpos): React.ReactElement => {
  const className = `${classValue}`;
  const [videoOpen, setVideoOpen] = React.useState(false);

  return (
    <div
      className={`flex justify-center w-full mx-auto ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      {
        typeof window !== "undefined" ? (
          <div>
            <ModalVideo
              channel='youtube'
              isOpen={videoOpen}
              videoId={videoUrl.replace("https://www.youtube.com/watch?v=", "")}
              onClose={() => setVideoOpen(false)}
            />
            <button
              className="focus:outline-none"
              onClick={() => setVideoOpen(true)}
            >
              <img
                alt="video-thumbnail"
                src={`https://cdn.chiron.care/${videoCover}`}
                className="rounded-custom mx-auto z-40 sm:-mt-24 overflow-hidden
                w-inline h-youtube sm:w-sm-youtube sm:h-sm-youtube lg:w-lg-vision lg:h-lg-youtube xl:w-xl-vision xl:h-xl-youtube"
              />
            </button>
          </div>
        ) : "Vedio Lading Fail"
      }
    </div>
  );
};

export interface VideoBlockPrpos {
  videoUrl: string
  videoCover: string
  classValue: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(VideoBlock);
