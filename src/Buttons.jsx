import React from "react";
import Button from '@material-ui/core/Button';

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
      <Button 
        style={{
          marginLeft: 40,
          position: "relative",
          top: -20,
          left: -30,
          cursor: "pointer",
        }}
        onClick={refreshPage}
        variant="contained"
      >
        Refresh
      </Button >
    </>
  );
}
export default Buttons;
