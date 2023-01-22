import { database } from "../misc/firebase";
import { createContext, useContext, useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";

const PRoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setrooms] = useState(null);
  useEffect(() => {
    const roomsdataFromdatabase = ref(database, "personalRooms");
    onValue(roomsdataFromdatabase, (snapshot) => {
      const alltheroomsdata = snapshot.val();
      let transformedData = Object.keys(alltheroomsdata).map((val, index) => {
        return {
          pRoom: alltheroomsdata[val],
          id: val,
        };
      });

      setrooms(transformedData);
    });
  }, []);
  return (
    <PRoomsContext.Provider value={{ rooms }}>
      {children}
    </PRoomsContext.Provider>
  );
};
export const usePRooms = () => {
  return useContext(PRoomsContext);
};
