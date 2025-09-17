import { create } from 'zustand';

type UIState = {
    isCartOpen: boolean;
    searchOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
    openSearch: () => void;
    closeSearch: () => void;
    toggleSearch: () => void;
};

export const useUIStore = create<UIState>((set) => ({
    isCartOpen: false,
    searchOpen: false,
    openCart: () => set({ isCartOpen: true }),
    closeCart: () => set({ isCartOpen: false }),
    toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

    // Adding search functionality
    openSearch: () => set({ searchOpen: true }),
    closeSearch: () => set({ searchOpen: false }),
    toggleSearch: () => set((state) => ({ searchOpen: !state.searchOpen })),
}));
