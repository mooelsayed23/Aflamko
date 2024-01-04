import layout from "simple-keyboard-layouts/build/layouts/arabic";
import Keyboard from "react-simple-keyboard";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Keyboard.css";
function MyKeyboard({ hinput }) {
  const [hkeyboard, sethkeyboard] = useState(false);
  const language = { ...layout };
  const showkeys = () => {
    document.getElementById("search").focus();
    hkeyboard ? sethkeyboard(false) : sethkeyboard(true);
  };
  return (
    <>
      <div onClick={showkeys} className="cursor-ponter text-dark">
        <FontAwesomeIcon icon={faKeyboard} />
      </div>
      {hkeyboard && (
        <>
          <div className="mykeyboard position-fixed top-0  z-3 mt-5">
            <div
              onClick={showkeys}
              className="btn position-absolute py-1 mb-0 start-0 closekeys"
            >
              x
            </div>
            <div dir="ltr">
              <Keyboard onChange={hinput} layout={language.layout} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MyKeyboard;
