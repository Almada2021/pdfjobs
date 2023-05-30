import { create } from "zustand";

interface Color {
    color: string;
    changeColor: (value: string) => void;
}
const useColor = create<Color>((set) => ({
    color: "#ffffff",
    changeColor: ((value: string) => set({ color: value }))
}))
export default useColor;