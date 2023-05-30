import { IconType } from "react-icons";

interface IconsProps {
  Ico: IconType;
  click?: () => void;
  title?: string;
  size?: number
}
const Icon: React.FC<IconsProps> = ({ Ico, click, title, size =25 }) => {
  return (
    <div className="bg-white w-max rounded" title={title} onClick={click}>
      <Ico size={size} />
    </div>
  );
};

export default Icon;
