import React from "react";
import img from "./img/404.webp";
export default function NotFound() {
  return (
    <div className="container p-4 d-flex  justify-content-center">
      <div className="w-75">
        <img className="img-fluid " src={img} alt="" />
        <h1 className="text-center">Page not found</h1>
      </div>
    </div>
  );
}
