import { IconType } from "react-icons";

interface IconsProps {
    Ico: IconType;
    click?: () => void;
}
const Icon: React.FC<IconsProps> = ({ Ico, click }) => {
    return (
        <div className="bg-white w-max rounded" title="Rellenar" onClick={click}>
            <Ico size={25}/>
        </div>
    )
}

export default Icon