interface Props {
  data?: any;
}

export default function Title({ data }: Props) {
  return (
    <textarea className="hover:cursor-default text-4xl bg-transparent w-full h-full active:outline-none active:border-none focus:outline-none focus:border-none resize-none overflow-hidden">
      {data}
    </textarea>
  );
}
