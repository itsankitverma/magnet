import React from "react";

function Buttons(props) {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      {/* <button 
        style={{ marginLeft:40, position:"relative", top:-20, cursor:"pointer" }}
        onClick={props.onClick}
      >
        Activity Dashboard Details - ON CliCk
      </button> */}
      <button
        style={{
          marginLeft: 40,
          position: "relative",
          top: -20,
          left: -30,
          cursor: "pointer",
        }}
        onClick={refreshPage}
      >
        Refresh
      </button>
    </>
  );
}
export default Buttons;
