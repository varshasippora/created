import { React } from "react";
import { createRoot } from "react-dom/client";

import StudentList from "./StudentList.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<StudentList />, document.getElementById("root"));
