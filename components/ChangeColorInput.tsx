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
        <div className="flex" style={{color:color}}>
            <input className="w-24 h-24" type="color" value={color} onChange={onChangeColor}/>
            {color}
        </div>
    )
}

export default ChangeColorInput;