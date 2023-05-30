import { IconType } from "react-icons";

interface IconsProps {
  Ico: IconType;
  click?: () => void;
  title?: string;
}
const Icon: React.FC<IconsProps> = ({ Ico, click, title }) => {
  return (
    <div className="bg-white w-max rounded" title={title} onClick={click}>
      <Ico size={25} />
    </div>
  );
};

export default Icon;
