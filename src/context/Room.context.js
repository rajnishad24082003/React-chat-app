import { database } from "../misc/firebase";
import { createContext, useContext, useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";

const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setrooms] = useState(null);
  useEffect(() => {
    const roomsdataFromdatabase = ref(database, "rooms");
    onValue(roomsdataFromdatabase, (snapshot) => {
      const alltheroomsdata = snapshot.val();
      let transformedData = Object.keys(alltheroomsdata).map((val, index) => {
        return {
          ...alltheroomsdata[val],
          id: val,
        };
      });

      setrooms(transformedData);
    });
  }, []);
  return (
    <RoomsContext.Provider value={{ rooms }}>{children}</RoomsContext.Provider>
  );
};
export const useRooms = () => {
  return useContext(RoomsContext);
};
