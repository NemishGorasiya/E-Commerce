import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const BreadCrumb = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  const pathArr = location.pathname.split("/").filter((x) => x);
  return (
    <div className="breadCrumb">
      <Link to="/">Home</Link>
      {pathArr.map((link, idx) => {
        const pathTo = pathArr.slice(0, idx + 1).join("/");
        return idx === pathArr.length - 1 ? (
          <span>&gt;{link}</span>
        ) : (
          <Link to={"/" + pathTo}>&gt;{link}</Link>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
