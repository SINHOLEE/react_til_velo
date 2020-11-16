import React from "react";
import styles from "./CSSModule.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);
const CSSModule = () => {
  console.log(cx("wrapper"));
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕<span className="something"> 와우!</span>
    </div>
  );
};

export default CSSModule;
