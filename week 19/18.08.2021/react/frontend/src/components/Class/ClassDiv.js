import React, { Component } from "react";
import ClassButton from "./ClassButton";
import classes from "./ClassDiv.module.css";

export default class ClassDiv extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.heading = props.heading;
  //   // this.text = props.text;
  //   // this.btnText = props.btnText;
  // }
  render() {
    const { heading, text, btnText } = this.props;
    return (
      <div className={classes.div}>
        <h3>{heading}</h3>
        <p>{text}</p>
        <ClassButton children={btnText} />
      </div>
    );
  }
}

// import React from "react";
// import FuncButton from "./ClassButton";

// const FuncDiv = (props) => {
//   return (
//     <div className={classes.div}>
//       <h3>{props.heading}</h3>
//       <p>{props.text}</p>
//       <FuncButton children={props.btnText} />
//     </div>
//   );
// };

// export default FuncDiv;
