import * as React from "react";

interface LinesProps {
  itemIds: string[];
  selectedItems: string[];
  reverse?: Boolean;
}

function Lines({ itemIds, selectedItems, reverse = false }: LinesProps) {
  const [rightSelectedItems, setRightSelectedItems] = React.useState<string[]>([]);

  React.useEffect(() => {
    const rightItems: any[] = selectedItems.filter((i) => itemIds.includes(i));
    setRightSelectedItems(rightItems);
  }, [itemIds, selectedItems]);

  return (
    <div className="items-center hidden w-full lg:flex">
      <svg
        width="120"
        height="189"
        viewBox="0 0 120 189"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        preserveAspectRatio="none"
      >
        <g id="Group 4">
          {itemIds.map((id, index) => {
            switch (index) {
              case 0:
                return reverse ? (
                  <path
                    id={`right-line${id}`}
                    d="M119 1H67C61.4182 1.45939 60.0463 2.97656 60 7.40201V85.1407C59.9058 88.3166 57.5 91.5427 52 92H0"
                    stroke={selectedItems.includes(id) ? "#9d71fd" : "#D7CFFD"}
                    strokeWidth="2"
                  />
                ) : (
                  <path
                    id={`left-line${id}`}
                    d="M0.5 1H52.5C58.0818 1.45939 59.4537 2.97656 59.5 7.40201V85.1407C59.5942 88.3166 62 91.5427 67.5 92H119.5"
                    stroke={selectedItems.includes(id) ? "#9d71fd" : "#D7CFFD"}
                    strokeWidth="2"
                  />
                );
              case 1:
                return reverse ? (
                  <path
                    id={`right-line${id}`}
                    d="M119.5 92H0"
                    stroke={selectedItems.includes(id) ? "#9d71fd" : "#D7CFFD"}
                    strokeWidth="2"
                  />
                ) : (
                  <path
                    id={`left-line${id}`}
                    d="M0 92H119.5"
                    stroke={selectedItems.includes(id) ? "#9d71fd" : "#D7CFFD"}
                    strokeWidth="2"
                  />
                );
              case 2:
                return reverse ? (
                  <path
                    id={`right-line${id}`}
                    d="M0 92H52C57.5818 92.4821 58.9537 94.0743 59 98.7186V180.302C59.0942 183.634 61.5 187.02 67 187.5H119"
                    stroke={selectedItems.includes(id) ? "#9d71fd" : "#D7CFFD"}
                    strokeWidth="2"
                  />
                ) : (
                  <path
                    id={`left-line${id}`}
                    d="M119.5 92H67.5C61.9182 92.4821 60.5463 94.0743 60.5 98.7186V180.302C60.4058 183.634 58 187.02 52.5 187.5H0.5"
                    stroke={selectedItems.includes(id) ? "#9d71fd" : "#D7CFFD"}
                    strokeWidth="2"
                  />
                );
              default:
                return "";
            }
          })}
        </g>

        <use
          id="use"
          xlinkHref={`#${reverse ? "right" : "left"}-line${
            rightSelectedItems[rightSelectedItems.length - 1]
          }`}
        />
      </svg>
    </div>
  );
}

export default Lines;
