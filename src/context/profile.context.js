import { auth, database } from "../misc/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { getDatabase, ref, onValue, off } from "firebase/database";
const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const authunsubscribfun = onAuthStateChanged(auth, (authobj) => {
      if (authobj) {
        const starCountRef = ref(database, `/profile/${authobj.uid}`);
        onValue(starCountRef, (snapshot) => {
          const { name, createdAt } = snapshot.val();
          const data = {
            name,
            createdAt,
            uid: authobj.uid,
            email: authobj.email,
          };
          setProfile(data);
          setIsLoading(false);
        });
      } else {
        setProfile(null);
        setIsLoading(false);
      }
    });

    return () => {
      authunsubscribfun();
    };
  }, []);
  return (
    <ProfileContext.Provider value={{ profile, isLoading }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  return useContext(ProfileContext);
};
