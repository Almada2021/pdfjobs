import useColor from "@/hooks/useColor";
import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { LuPaintBucket } from 'react-icons/lu';
import Icon from "./Icon";
interface Props {
    disable?: boolean;
    index?: number;
}

const Draggable: React.FC<Props> = ({ disable, index = 0 }) => {
    const { color } = useColor();
    const [currentColor, setCurrentColor] = useState(color)
    const [textColor, setTextColor] = useState("#000")
    const [itemIndex, setItemIndex] = useState<number>(index)
    const changeIndex = () => {
        setItemIndex((it) => it + 1);
    }
    const changeIndexDown = () => {
        if (itemIndex > 0) {
            setItemIndex((it) => it - 1);
        }
    }
    const changeColor = () => {
        setCurrentColor(color)
    }
    const changeText = () => {

    }

    return (

        <Rnd
            style={{
                zIndex: `${itemIndex}`
            }}
            className="border-dotted border-transparent hover:border-gray-500 border-2 overflow-hidden flex flex-col"
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
                className="h-5/6 w-full overflow-hidden"
                style={{
                    backgroundColor: `${currentColor}`,
                    color: `${textColor}`
                }}
            >
                <textarea
                    className="bg-transparent w-full h-full active:outline-none active:border-none focus:outline-none focus:border-none resize-none overflow-hidden"

                ></textarea>
            </div>
            <div
                className="
                    buttons
                    hover:cursor-default
                    h-1/6
                    w-full
                    p-1
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
                    <Icon Ico={AiOutlineArrowUp} click={changeIndex} />
                    <div className="bg-white w-max rounded" title="Bajar Elemento">

                        <AiOutlineArrowDown
                            onClick={changeIndexDown}
                            size={25}

                        />
                    </div>
                    <div className="bg-white w-max rounded" title="Rellenar">

                        <LuPaintBucket
                            onClick={changeColor}
                            size={25}

                        />
                    </div>
                </div>
            </div>


        </Rnd>

    )
}
export default Draggable