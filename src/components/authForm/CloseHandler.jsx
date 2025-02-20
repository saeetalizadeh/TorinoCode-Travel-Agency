"use client";
import { useEffect, useRef } from "react";

function CloseHandler({ children, unFocusHandler }) {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        unFocusHandler();
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [unFocusHandler]);

  return <div  ref={ref}>{children}</div>;
}

export default CloseHandler;
