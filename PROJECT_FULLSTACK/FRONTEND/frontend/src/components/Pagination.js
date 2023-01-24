import React, { useState } from "react";
export default function Pagination({ pageHandler, active }) {
  let pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [pageDisplay, setPageDisplay] = useState(pageNumbers.slice(0, 10));
  const pageDisplayHandler = () => {
    setPageDisplay(pageNumbers.slice(pageDisplay.length));
  };
  return (
    <div
      style={{
        position: "fixed",
        display: "inline",
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
        padding: "0px",
      }}
    >
      <ul
        className="pagination "
        style={{ display: "inline-block", width: "45%" }}
      >
        {pageDisplay.map((number) => (
          <li
            key={number}
            className="page-item"
            style={{ display: "inline-block" }}
          >
            <a
              onClick={() => pageHandler(number)}
              href="#"
              style={{
                color: "black",
                margin: "10px",
                marginRight: "30px",
                textDecoration: "none",
              }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      <a
        style={{ textDecoration: "none", color: "black" }}
        href="#"
        onClick={pageDisplayHandler}
      >
        &#62;
      </a>
    </div>
  );
}
