import React from "react";

import data from "./data";

import FeatureItemCard from "./components/FeatureItemCard";
import FeatureMainCard from "./components/FeatureMainCard";
import MenuButton from "./components/MenuButton";
import Lines from "./components/Lines";

interface SelectedItem {
  [key: string]: string[];
}

function App() {
  const [activeButtonId, setActiveButtonId] = React.useState<string>(data.defaultActiveButtonId);

  const [selectedFeatureItems, setSelectedFeatureItems] = React.useState<SelectedItem>({});

  const changeActiveButtonId = (id: string) => setActiveButtonId(id);

  const selectFeatureItem = (itemId: string) => {
    setSelectedFeatureItems((prevSelectedItems) => {
      return {
        ...prevSelectedItems,
        [activeButtonId]: prevSelectedItems[activeButtonId]
          ? [...prevSelectedItems[activeButtonId], itemId]
          : [itemId],
      };
    });
  };

  const unselectFeatureItem = (itemId: string) => {
    const index: number = selectedFeatureItems[activeButtonId]?.indexOf(itemId);

    if (index < 0) return;

    setSelectedFeatureItems((prevSelectedItems) => {
      const updateSelectedItems = [...prevSelectedItems[activeButtonId]];
      updateSelectedItems.splice(index, 1);

      return {
        ...prevSelectedItems,
        [activeButtonId]: updateSelectedItems,
      };
    });
  };

  return (
    <section>
      <div className="flex flex-col items-center mx-6 ">
        {/* Main Header */}
        <div className="mb-5 max-w-[779px] lg:mb-12">
          <h2 className="mb-6 text-4xl font-bold text-center text-violentDark font-circular leading-[43.2px] lg:mb-12 lg:text-[64px] lg:leading-[83.2px] lg:whitespace-nowrap">
            {data.mainTitle}
          </h2>
          <h3 className="text-base text-center text-lightGray font-sfPro leading-[25.6px] lg:text-lg lg:leading-[28.8px] ">
            {data.subTitle}
          </h3>
        </div>
        {/* Menu Buttons */}
        <div className="flex justify-center mb-[75px]">
          {data.menuButtonsList.map((menuBtn) => (
            <MenuButton
              id={menuBtn.id}
              title={menuBtn.title}
              activeButtonId={activeButtonId}
              changeActiveButtonId={changeActiveButtonId}
              key={menuBtn.id}
            />
          ))}
        </div>
        {/* Feature section */}
        <div className="relative flex-col-reverse lg:flex-row items-center lg:items-stretch lg:justify-between lg:w-full xl:w-[1180px] flex">
          {/* Left Feature Items */}
          <div className="flex flex-col justify-between ">
            {data.features[activeButtonId].leftItems.map((featureItem) => (
              <FeatureItemCard
                id={featureItem.id}
                logo={featureItem.logo}
                title={featureItem.title}
                subTitle={featureItem.subTitle}
                isActive={!!selectedFeatureItems[activeButtonId]?.includes(featureItem.id)}
                selectFeatureItem={selectFeatureItem}
                unselectFeatureItem={unselectFeatureItem}
                key={featureItem.id}
              />
            ))}
          </div>
          <Lines
            itemIds={data.features[activeButtonId].leftItems.map((i) => i.id)}
            selectedItems={selectedFeatureItems[activeButtonId] || []}
          />
          {/* Main Feature Card */}
          <FeatureMainCard
            image={data.features[activeButtonId].mainCard.image}
            title={data.features[activeButtonId].mainCard.title}
            subTitle={data.features[activeButtonId].mainCard.subTitle}
            text={data.features[activeButtonId].mainCard.text}
          />
          {/*  */}
          <Lines
            itemIds={data.features[activeButtonId].rightItems.map((i) => i.id)}
            selectedItems={selectedFeatureItems[activeButtonId] || []}
            reverse
          />
          {/* Right Feature Items */}
          <div className="justify-between hidden lg:flex lg:flex-col">
            {data.features[activeButtonId].rightItems.map((featureItem) => (
              <FeatureItemCard
                id={featureItem.id}
                logo={featureItem.logo}
                title={featureItem.title}
                subTitle={featureItem.subTitle}
                isActive={!!selectedFeatureItems[activeButtonId]?.includes(featureItem.id)}
                selectFeatureItem={selectFeatureItem}
                unselectFeatureItem={unselectFeatureItem}
                key={featureItem.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
