import ChangeColorInput from "@/components/ChangeColorInput";
import Draggable from "@/components/Draggable";
import { Inter } from "next/font/google";
import { jsPDF } from "jspdf";
import useList from "@/hooks/useList";
import Icon from "@/components/Icon";
import { AiFillPicture, AiFillSave } from "react-icons/ai";
import { BiFont } from "react-icons/bi";
import { MdTitle } from "react-icons/md";
import Logo from "@/components/Logo";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });
type User = {
  name: string;
  description: string;
  expirience: string;
  photo: string;
};
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
    addItem({ position: 0, type: "photo" });
  };
  const addText = () => {
    addItem({ position: 0, type: "text" });
  };
  const addTitle = () => {
    addItem({ position: 0, type: "title" });
  };
  const addPhotoInfoJobs = () => {
    addItem({ position: 0, type: "photo", data: user?.photo });
  };
  const addName = () => {
    addItem({ position: 0, type: "title", data: user?.name });
  };
  const addDescription = () => {
    addItem({ position: 0, type: "text", data: user?.description });
  };
  const addExpirience = () => {
    addItem({ position: 0, type: "text", data: user?.expirience });
  };
  const [user, setUser] = useState<User | null>(null);
  // endpoint de donde se extraeria la data de infoJobs
  useEffect(() => {
    fetch("./api/data")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
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
        {items.map(({ position, type, data }, index) => (
          <Draggable
            disable={false}
            arrayPos={index}
            key={index}
            index={position}
            type={type}
            data={data}
          />
        ))}
      </div>
      <div
        className="
          h-screen
          w-max
          flex
          flex-col
          text-white
          justify-center
          items-center
        "
      >
        <h1 className="w-full mb-2 font-bold text-2xl  flex items-center  flex-wrap ">
          CV
          <Logo />
        </h1>
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
          <h1 className="w-full mb-2 font-bold text-2xl text-gray-950">
            Agregar Componentes y guardar
          </h1>
          <div className="h-1/2 m-3 border-2 border-gray-950  rounded">
            <Icon
              Ico={AiFillPicture}
              click={addPhoto}
              title="Agregar Foto"
              size={50}
            />
          </div>
          <div className="h-1/2 m-3 border-2 border-gray-950  rounded">
            <Icon
              Ico={BiFont}
              click={addText}
              title="Agregar Texto"
              size={50}
            />
          </div>
          <div className="h-1/2 m-3 border-2 border-gray-950  rounded">
            <Icon
              Ico={MdTitle}
              click={addTitle}
              title="Agregar Titulo"
              size={50}
            />
          </div>
          <div className="h-1/2 m-3 border-2 border-gray-950  rounded">
            <Icon
              Ico={AiFillSave}
              click={generatePdf}
              title="Guardar PDF"
              size={50}
            />
          </div>
        </div>
        <div className="w-full flex items-center flex-wrap p-3">
          <h1 className="w-full mb-2 font-bold text-2xl text-gray-950">
            Elegir Color general {"(Presiona Enter)"}
          </h1>
          <ChangeColorInput />
        </div>
        <div className="w-full flex items-center flex-wrap p-3 gap-2">
          <h1 className="w-full mb-2 font-bold text-2xl text-gray-950 flex items-center ">
            Traer datos de <Logo />
          </h1>
          <br />
          <button
            onClick={addPhotoInfoJobs}
            style={{
              borderColor: "#2088c2",
              color: "#2088c2",
            }}
            className="border-2 p-2 font-bold italic rounded"
            title="traer foto de infojobs"
          >
            Foto
          </button>
          <button
            style={{
              borderColor: "#2088c2",
              color: "#2088c2",
            }}
            className="border-2 p-2 font-bold italic rounded"
            title="traer nombre de infojobs"
            onClick={addName}
          >
            Nombre
          </button>
          <button
            onClick={addDescription}
            style={{
              borderColor: "#2088c2",
              color: "#2088c2",
            }}
            className="border-2 p-2 font-bold italic rounded"
            title="traer descripcion de infojobs"
          >
            descripcion
          </button>
          <button
            onClick={
              addExpirience
            }
            style={{
              borderColor: "#2088c2",
              color: "#2088c2",
            }}
            className="border-2 p-2 font-bold italic rounded"
            title="traer experiencia de infojobs"
          >
            Experiencia
          </button>
        </div>
      </div>
    </main>
  );
}
