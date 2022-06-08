import React from 'react';

const SpecialistAvatar = ({
  clipPathId,
  pathId,
  imageSrc,
  classValue = ""
}: SpecialistAvatarProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div className={className}>
      <svg x="0px" y="0px" viewBox="0 0 1137.5 979.2" className="absolute z-0 top-0">
        <path fill="#F7F8FC" d="M 1137.5 0 H 450.4 l -278 279.7 C 22.4 430.6 45 687 176.8 823.5 l 0 0 C 368 1011 549 984 689 887 l 449.3 -300 V 0 z" />
      </svg>
      <svg x="0px" y="0px" viewBox="0 0 1137.5 979.2" className="relative z-10">
        <defs>
          <path id={pathId} d="M 1137.5 0 H 450.4 l -278 279.7 C 22.4 430.6 45 687 176.8 823.5 l 0 0 C 368 1011 549 984 689 887 l 449.3 -300 V 0 z" />
        </defs>
        <clipPath id={clipPathId}>
          <use xlinkHref={`#${pathId}`} />
        </clipPath>
        <g transform="matrix(1 0 0 1 0 0)" clipPath={`url(#${clipPathId})`}>
          <image
            width="750"
            height="750"
            xlinkHref={imageSrc}
            transform="matrix(1.4462 0 0 1.4448 -30 -50)"
          />
        </g>
      </svg>
    </div>
  );
};

interface SpecialistAvatarProps {
  pathId: string
  clipPathId: string
  imageSrc: string
  classValue?: string
}

export default SpecialistAvatar;
