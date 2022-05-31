import create from 'zustand';

interface AppStore {
  theme: string;
  setTheme: (theme: string) => void;
}

const useStore = create<AppStore>((set) => ({
  theme: '',
  setTheme: (theme: string) => set({ theme }),
}));

export default useStore;
