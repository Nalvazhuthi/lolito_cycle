import { Product } from '@/data/products';  // Assuming you have a Product type defined
import { create } from 'zustand';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast styling

type ProductStore = {
  cartItems: Product[];
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  updateCartQuantity: (id: number, quantity: number) => void;
};

const getCartFromLocalStorage = (): Product[] => {
  if (typeof window === 'undefined') return [];
  try {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error('Failed to parse cartItems from localStorage:', error);
    return [];
  }
};

export const useProductStore = create<ProductStore>((set, get) => ({
  cartItems: getCartFromLocalStorage(),
  searchValue: '',

  
  // Update search value
  setSearchValue: (searchValue) => set({ searchValue }),

  // Add product to cart
  addToCart: (product) => {
    const existing = get().cartItems.find((item) => item.id === product.id);

    if (existing) {
      set((state) => {
        const updatedCart = state.cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Persist to localStorage
        return { cartItems: updatedCart };
      });
    } else {
      set((state) => {
        const updatedCart = [...state.cartItems, { ...product, quantity: 1 }];
        localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Persist to localStorage
        return { cartItems: updatedCart };
      });
    }

    // Show toast notification when an item is added to the cart
    toast.success(`${product.name} has been added to the cart!`, {
      position: "bottom-right",  // You can customize position
      autoClose: 2000,  // Time in ms for the toast to disappear
    });
  },

  // Remove product from cart
  removeFromCart: (id) => {
    set((state) => {
      const updatedCart = state.cartItems.filter((item) => item.id !== id);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Persist to localStorage
      return { cartItems: updatedCart };
    });
  },

  // Clear all items from cart
  clearCart: () => {
    localStorage.removeItem('cartItems'); // Clear from localStorage
    set({ cartItems: [] }); // Update Zustand state
  },

  // Update quantity of a specific product in the cart
  updateCartQuantity: (id, quantity) => {
    set((state) => {
      const updatedCart = state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Persist to localStorage
      return { cartItems: updatedCart };
    });
  },
}));
