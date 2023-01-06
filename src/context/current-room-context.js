import { createContext, useContextSelector } from "use-context-selector";

let CurrentRoomContext = createContext();

export let CurrentRoomProvider = ({ children, data }) => {
  return (
    <CurrentRoomContext.Provider value={data}>
      {children}
    </CurrentRoomContext.Provider>
  );
};

export let useCurrentRoom = (selector) => {
  useContextSelector(CurrentRoomContext, selector);
};
