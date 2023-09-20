import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFilePen, faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../css/sidemenu.css";
function Sidemenu() {
  return (
      <ul className="text-start bg-white ">
        <Link className="list-item" to={"#"}>
          <li className="py-2 px-2"><FontAwesomeIcon icon={faPlus} /> Add Product</li>
        </Link>
        <Link className="list-item" to={"#"}>
          <li className="py-2 px-2"><FontAwesomeIcon icon={faFilePen} /> Update Product</li>
        </Link>
        <Link className="list-item" to={"#"}>
          <li className="py-2 px-2"><FontAwesomeIcon icon={faPenToSquare} /> Edit Product</li>
        </Link>
        <Link className="list-item" to={"#"}>
          <li className="py-2 px-2"><FontAwesomeIcon icon={faTrash} /> Remove Product</li>
        </Link>
      </ul>
  );
}

export default Sidemenu;
