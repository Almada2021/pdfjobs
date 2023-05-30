import { create } from "zustand";

interface Item {
  position: number;
  type: "photo" | "title" | "text";
  data?: any;
}
interface list {
  items: Item[];
  addItem: (item: Item) => void;
  deleteItem: (value: number) => void;
}
const useList = create<list>((set) => ({
  items: [{ position: 0, type: "text" }],
  addItem: (newItem) => set((state) => ({ items: [...state.items, newItem] })),
  deleteItem: (index) =>
    set((state) => ({ items: state.items.filter((element, i) => i !== index)})),
}));
export default useList;
