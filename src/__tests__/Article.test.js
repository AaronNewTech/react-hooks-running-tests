import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  // the line below adds a display to the console of the html elements that looks like this
  // console.log
  //     <body>
  //       <div>
  //         <div>
  //           please pass this test
  //         </div>
  //       </div>
  //     </body>

  screen.debug();

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
