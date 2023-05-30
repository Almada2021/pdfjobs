interface Props {}

export default function Text({}: Props) {
  return (
    <textarea className="hover:cursor-default bg-transparent w-full h-full active:outline-none active:border-none focus:outline-none focus:border-none resize-none overflow-hidden"></textarea>
  );
}
