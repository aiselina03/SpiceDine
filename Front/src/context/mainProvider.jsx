import React from "react";
import BasketProvider from "./basketContext";
import WishlistProvider from "./wishlistContext";
import UserProvider from "./userContext";

function MainProvider({ children }) {
  return (
    <UserProvider>
      <BasketProvider>
        <WishlistProvider>{children}</WishlistProvider>
      </BasketProvider>
    </UserProvider>
  );
}

export default MainProvider;
