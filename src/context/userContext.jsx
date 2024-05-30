import { createContext, useContext } from "react";

export const UserContext = createContext();

function useUserContext() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContext.Provider');
  }

  return context;
}

export default useUserContext;
