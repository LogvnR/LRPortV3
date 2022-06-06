import create from 'zustand';

interface AppStore {
  theme: string;
  setTheme: (theme: string) => void;
  screenWidth: number;
  setScreenWidth: (screenWidth: number) => void;
}

const useStore = create<AppStore>((set) => ({
  theme: '',
  setTheme: (theme: string) => set({ theme }),
  screenWidth: 0,
  setScreenWidth: (screenWidth: number) => set({ screenWidth }),
}));

export default useStore;
