import React from "react";
import BasketProvider from "./basketContext";
import WishlistProvider from "./wishlistContext";
import UserProvider from "./userContext";
import { SearchProvider } from "./searchContext";

function MainProvider({ children }) {
  return (
    <UserProvider>
      <SearchProvider>
        <BasketProvider>
          <WishlistProvider>{children}</WishlistProvider>
        </BasketProvider>
      </SearchProvider>
    </UserProvider>
  );
}

export default MainProvider;
