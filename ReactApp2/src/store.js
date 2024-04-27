// store.js
import { create } from 'zustand';

const useStore = create((set) => ({
  data: [],
  setData: (data) => set({ data }),

  fetch_Data: async () => {
    try {
      const response = await fetch('http://localhost:8080/springapod');
      const data = await response.json();
      set({ data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));

export default useStore;
