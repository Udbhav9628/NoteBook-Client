import React, { useContext } from "react";
import Notecontext from "../context/notes/Notecontext";

function Alert() {
  const context = useContext(Notecontext);
  const { Alert} = context;
  return (
    <div>
      {Alert && (
        <div
          className={`alert alertedit alert-${Alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {Alert.Msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
