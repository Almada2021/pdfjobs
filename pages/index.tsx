import ChangeColorInput from "@/components/ChangeColorInput";
import Draggable from "@/components/Draggable";
import { Inter } from "next/font/google";
import { jsPDF } from "jspdf";
import useList from "@/hooks/useList";
import Icon from "@/components/Icon";
import { AiFillPicture, AiFillSave,  } from "react-icons/ai";
import { BiFont } from "react-icons/bi"
import { MdTitle } from "react-icons/md"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { items, addItem } = useList();
  const generatePdf = () => {
    const content = document.getElementById("cv") ?? "";
    const cvPDF = new jsPDF("portrait", "pt", "a4");
    cvPDF.html(content).then(() => {
      cvPDF.save("cv.pdf");
    });
  };
  const addPhoto = () => {
    addItem({position: 0, type: "photo"})
  }
  const addText = () => {
    addItem({position: 0, type: "text"})
  }
  const addTitle = () => {
    addItem({position: 0, type: "title"})

  }

  return (
    <main
      className={`flex flex-row  min-h-screen bg-gray-950  items-center justify-between p-2 ${inter.className}`}
    >
      <div
        id="cv"
        style={{
          width: "600px",
        }}
        className="
          h-screen
          bg-white
          overflow-x-hidden
        "
      >
        {items.map(({ position, type }, index) => (
          <Draggable disable={false} arrayPos={index} key={index} index={position} type={type} />
        ))}
      </div>
      <div
        className="
        bg-white
        w-2/5
        flex 
        flex-col
        h-screen
        "
      >
        <div className="w-full flex items-center flex-wrap p-3">
          <h1 className="w-full mb-2 font-bold text-2xl text-gray-950">Agregar Componentes y guardar</h1>
          <div className="h-1/2 m-3 border-2 border-gray-950  rounded">
            <Icon  Ico={AiFillPicture} click={addPhoto} title="Agregar Foto" size={50}/>
          </div>
          <div className="h-1/2 m-3 border-2 border-gray-950  rounded">
            <Icon  Ico={BiFont} click={addText} title="Agregar Texto" size={50}/>
          </div>
          <div className="h-1/2 m-3 border-2 border-gray-950  rounded">
            <Icon  Ico={MdTitle} click={addTitle} title="Agregar Titulo" size={50}/>
          </div>
          <div className="h-1/2 m-3 border-2 border-gray-950  rounded">
            <Icon  Ico={AiFillSave} click={generatePdf} title="Guardar PDF" size={50}/>
          </div>
          
        </div>
        <ChangeColorInput />
      </div>
    </main>
  );
}
