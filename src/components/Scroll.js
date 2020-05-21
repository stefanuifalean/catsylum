import React, {Fragment} from "react";

const Scroll = (props) => {
  return (
    <Fragment /* style={{height: "80vh", overflowY: "scroll", border: "1px solid black"}} */>
      {props.children}
    </Fragment>
  );
};

export default Scroll;
