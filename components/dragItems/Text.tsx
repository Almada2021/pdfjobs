interface Props {
  data?: any;
}

export default function Text({data}: Props) {
  return (
    <textarea
      className="hover:cursor-default bg-transparent w-full h-full active:outline-none active:border-none focus:outline-none focus:border-none resize-none overflow-hidden"
      value={data ? data : ""}
    ></textarea>
  );
}
