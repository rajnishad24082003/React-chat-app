import { useEffect } from "react";
import { useState, useRef } from "react";
import { database } from "../misc/firebase";
import { onValue, ref } from "firebase/database";

export function usePresence(uid) {
  let [presence, setPresence] = useState(null);
  useEffect(() => {
    const statusData = ref(database, `/status/${uid}`);

    onValue(statusData, (snapshot) => {
      if (snapshot.exists()) {
        let data = snapshot.val();
        setPresence(data);
      }
    });
  }, [uid]);
  return presence;
}

export function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      node.removeEventListener("mouseover", handleMouseOver);
      node.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);
  return [ref, value];
}
