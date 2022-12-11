import * as React from "react";

interface FeatureCardProps {
  id: string;
  logo: string;
  title: string;
  subTitle: string;
  isActive: boolean;
  selectFeatureItem: Function;
  unselectFeatureItem: Function;
}

function FeatureItemCard({
  id,
  logo,
  title,
  subTitle,
  isActive,
  selectFeatureItem,
  unselectFeatureItem,
}: FeatureCardProps) {
  // Select or unselect item based on isActive state
  const handleToggleCheckbox = () => {
    if (isActive) unselectFeatureItem(id);
    else selectFeatureItem(id);
  };

  return (
    <div
      className={`w-[324px] h-[80px] relative flex justify-between items-center border border-darkMuted rounded-xl mb-5 pl-4 pr-[25px] lg:w-[100%] lg:pl-[16px] lg:pr-[21px] lg:mb-0 lg:min-w-[240px] xl:w-[280px]
      ${isActive ? "shadow-activeFeatureCard" : ""}`}
    >
      <div className="flex items-center font-sfPro">
        <div className="w-12 h-12 mr-1.5">
          <img className="max-w-full rounded-xl" alt="logo" src={logo} />
        </div>
        <div>
          <h3 className="text-base font-medium text-violentDark">{title}</h3>
          <h4 className="text-xs text-lightGray">{subTitle}</h4>
        </div>
      </div>
      <label
        className="w-[21px] h-[14px] border-[50%] cursor-pointer inline-block"
        htmlFor={id.toString()}
      >
        <input
          className="hidden toggle-input"
          type="checkbox"
          checked={isActive}
          id={id.toString()}
          onChange={handleToggleCheckbox}
        />
        <div className="w-[21px] h-[14px] relative rounded-[99999px] border-2 border-darkGray toggle-fill" />
      </label>
    </div>
  );
}

export default FeatureItemCard;
