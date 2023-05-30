import useColor from "@/hooks/useColor";
import { useState } from "react";
import { Rnd } from "react-rnd";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { LuPaintBucket } from "react-icons/lu";
import { TbLetterA } from 'react-icons/tb';
import Icon from "./Icon";
import Text from "./dragItems/Text";
import Photo from "./dragItems/Photo";
interface Props {
  disable?: boolean;
  index?: number;
  type?: "photo" | "text" | "title";
}

const Draggable: React.FC<Props> = ({ disable, index = 0, type = "text" }) => {
  const { color } = useColor();
  const [currentColor, setCurrentColor] = useState(color);
  const [textColor, setTextColor] = useState<String>("#000");
  const [itemIndex, setItemIndex] = useState<number>(index);
  const changeIndex = () => {
    setItemIndex((it) => it + 1);
  };
  const changeIndexDown = () => {
    if (itemIndex > 0) {
      setItemIndex((it) => it - 1);
    }
  };
  const changeColor = () => {
    setCurrentColor(color);
  };
  const changeText = () => {
    setTextColor(color);
  };
  let content;
  switch (type){
    case "text":
      content = <Text/>;
    case "photo":
      content = <Photo/>
  }
  return (
    <Rnd
      style={{
        zIndex: `${itemIndex}`,
      }}
      className="border-dotted border-transparent hover:border-gray-500 border-2  flex flex-col"
      bounds="parent"
      scale={1}
      disableDragging={disable ? disable : false}
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
      cancel=".btn-up .buttons"
    >
      <div
        className="
                    buttons
                    hover:cursor-default
                    h-max
                    w-full
                    p-1
                    absolute
                    -top-8
                "

      >
        <div
          className="
                        opacity-0
                        hover:opacity-100
                        flex 
                        flew-row
                        gap-1
                        
                    "
        >
          <Icon Ico={AiOutlineArrowUp} click={changeIndex} title="Subir Elemento"/>
          <Icon Ico={AiOutlineArrowDown} click={changeIndexDown} title="Bajar Elemento"/>
          <Icon Ico={LuPaintBucket} click={changeColor} title="Rellenar"/>
          <Icon Ico={TbLetterA} click={changeText} title="Cambiar color de fuente"/>          
        </div>
      </div>
      <div
        className="h-full w-full overflow-hidden"
        style={{
          backgroundColor: `${currentColor}`,
          color: `${textColor}`,
        }}
      >
        {content}
      </div>
    </Rnd>
  );
};
export default Draggable;
