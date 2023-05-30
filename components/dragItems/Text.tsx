interface Props {
  data?: any;
}

export default function Text({data}: Props) {
  return (
    <textarea
      defaultValue={data? data : ""}
      className="hover:cursor-default bg-transparent w-full h-full active:outline-none active:border-none focus:outline-none focus:border-none resize-none overflow-hidden"
    ></textarea>
  );
}
