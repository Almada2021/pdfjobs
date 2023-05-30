import ChangeColorInput from "@/components/ChangeColorInput";
import Draggable from "@/components/Draggable";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [key, setKey] = useState(0)
  const [list, setList] = useState([key])
  const append = () =>{
    setList((list) => {
      setKey((key) => key+1);
      const n = [...list, key]
      return n
    })
  }
  return (
    <main
      className={`flex flex-row  min-h-screen bg-green-300  items-center justify-between p-2 ${inter.className}`}
    >
      <div
        className="
          w-2/3 h-screen
          bg-red-500
          overflow-x-hidden
        "
      >
        {list.map((element) => (
          <Draggable disable={false} key={element} index={0} type="photo"/>
        ))}

      </div>
      <div
        className="
        bg-blue-500
        w-1/3
        h-screen
        "
      >
        <button className="m-4 bg-white" onClick={append}>Append</button>
        <ChangeColorInput />
      </div>
    </main>
  );
}
