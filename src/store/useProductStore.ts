import { Product } from '@/components/shop';
import { create } from 'zustand';



type ProductStore = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useProductStore = create<ProductStore>((set, get) => ({
  cartItems: [],

  addToCart: (product) => {
    const existing = get().cartItems.find((item) => item.id === product.id);
    if (existing) {
      // Update quantity
      set((state) => ({
        cartItems: state.cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      }));
    } else {
      // Add new product
      set((state) => ({
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
      }));
    }
  },

  removeFromCart: (id) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    }));
  },

  clearCart: () => set({ cartItems: [] }),
}));
