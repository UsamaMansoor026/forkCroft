import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        // Item already exists → increment quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;

        return { cartItems: updatedCartItems };
      } else {
        // Item not found → add new with quantity 1
        return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
      }
    }),

  removeFromCart: (itemId) =>
    set((state) => {
      const updatedCartItems = state.cartItems
        .map((item) => {
          if (item.id === itemId) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
            // If quantity becomes 0, we'll remove it later in filter
            return null;
          }
          return item;
        })
        .filter((item) => item !== null); // Remove items with quantity 0

      return { cartItems: updatedCartItems };
    }),
  clearCart: () => set({ cartItems: [] }),
}));
