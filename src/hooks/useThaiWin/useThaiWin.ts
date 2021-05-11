import { resolve } from "dns";
import { exit } from "process";
import { useCallback, useEffect, useRef, useState } from "react";
import enterThaiWin from "../../api/enterThaiWin";
import exitThaiWin from "../../api/exitThaiWin";

const useThaiWin = () => {
  const [isStay, setStay] = useState<boolean>(false);

  const Enter = () => {
    if (!isStay) {
        enterThaiWin();
        setStay(true);
    }
  };
  const Exit = () => {
    if (isStay) {
        setStay(false);
        exitThaiWin();
    }
  };

  useEffect(() => {
    return () => {
        setStay(false);
        exitThaiWin();
        //Exit()
    };
  },[]);

  return [isStay, Enter, Exit] as const;
};

export default useThaiWin;
