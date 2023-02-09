import React from "react";
import ReactDOM from "react-dom";
import MyApp from "./module/components/PageCoco";

// let root = document.createElement("root");
// root.textContent = "I am root";
// document.body.appendChild(root);

const rootNode = document.createElement("div");
rootNode.id = "root";
document.body.appendChild(rootNode);

ReactDOM.render(<MyApp title={"coco"} />, document.getElementById("root"));
