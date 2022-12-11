import * as React from "react";

interface FeatureMainCardProps {
  image: string;
  title: string;
  subTitle: string;
  text: string;
}

function FeatureMainCard({ image, title, subTitle, text }: FeatureMainCardProps) {
  return (
    <div className="w-[323px] h-[240px] shrink-0 mb-5 bg-bgLight border-2 border-lightPurple rounded-3xl font-sfPro lg:w-[360px] xl:w-[380px] lg:h-[268px] lg:mb-0 z-20">
      <div className="w-[86px] h-[86px] rounded-[10px] absolute top-[-43px] lg:top-[-30px] right-[calc(50%-86px/2)]">
        <img className="max-w-full rounded-[10px]" alt="profile" src={image} />
      </div>
      <h2 className="text-center text-violentDark text-lg mt-16 mb-1.5">{title}</h2>
      <h3 className="mb-5 text-sm text-center text-lightGray">{subTitle}</h3>
      <p className="text-center text-violentDark text-base w-[300px] mx-auto">{text}</p>
    </div>
  );
}

export default FeatureMainCard;
