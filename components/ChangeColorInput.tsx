import useColor from "@/hooks/useColor";
import { ChangeEvent } from "react";

interface Props {
}

const ChangeColorInput: React.FC<Props> = () => {
    const {color, changeColor} = useColor();
    const onChangeColor = (e : ChangeEvent<HTMLInputElement>) => {
        changeColor(e.target.value);
    }
    return (
        <div>
            <input type="color" value={color} onChange={onChangeColor}/>
        </div>
    )
}

export default ChangeColorInput;