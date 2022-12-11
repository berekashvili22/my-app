import * as React from "react";

interface MenuButtonProps {
  activeButtonId: string;
  changeActiveButtonId: Function;
  title: string;
  id: string;
}

function MenuButton({ activeButtonId, changeActiveButtonId, title, id }: MenuButtonProps) {
  return (
    <button
      className={`h-[38px] px-[15px] text-xs font-bold cursor-pointer border rounded-xl mr-2 font-sfPro shrink-0 
      ${
        activeButtonId === id
          ? "text-white border-lightPurple bg-lightPurple"
          : "text-darkPurple border-muted"
      }`}
      type="button"
      onClick={() => changeActiveButtonId(id)}
      key={id}
    >
      {title}
    </button>
  );
}

export default MenuButton;
