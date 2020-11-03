import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./root.component.css";

export default function Root() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/page1" className="link">
          App 1
        </Link>
        <Link to="/page2" className="link">
          App 2
        </Link>
        <Link to="/page3" className="link">
          Create Rect App
        </Link>
      </nav>
    </BrowserRouter>
  );
}
// export default function Root(props) {
//   return <section>{props.name} is mounted!</section>;
// }

//  used anchor tags for navigation

// export default function Root() {
//   return (
//     <nav className="nav">
//       <a href="/page1" className="link">
//         Page 1
//       </a>
//       <a href="/page2" className="link">
//         Page 2
//       </a>
//     </nav>
//   );
// }
