import { create } from "zustand";

interface Color {
    color: String;
    changeColor: (value: string) => void;
}
const useColor = create<Color>((set) => ({
    color: "#000",
    changeColor: ((value: string) => set({ color: value }))
}))
export default useColor;