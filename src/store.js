import { create } from "zustand";
import data from "./data.json";

const useImageName = create((set, get) => ({
  imageArray: data,
  imageIndex: 0,
  heading: "Image Carousel",
  nextImage: () => {
    if (get().imageArray.length - 1 === get().imageIndex) {
      set({ imageIndex: 0 });
    } else {
      set({ imageIndex: get().imageIndex + 1 });
    }
  },
  prevImage: () => {
    if (get().imageIndex === 0) {
      set({ imageIndex: get().imageArray.length - 1 });
    } else {
      set({ imageIndex: get().imageIndex - 1 });
    }
  },
}));

// const useImageName = create((set) => ({
//   imgName: "Blue Arc",
//   changeName: () =>
//     set((state) => ({ imgName: (state.imgName = "Night Moon") })),
// }));
export default useImageName;

// export const useCounter = create((set) => ({
//   count: 0,
//   increaseCount: () => (set) => (state) => set({ count: state.count + 1 }),
//   decreaseCount: () => (set) => (state) => set({ count: state.count + 1 }),
// }));
