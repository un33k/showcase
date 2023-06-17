import * as React from "react";
import * as ReactDOM from "react-dom";

import { CounterButton } from "../components/client/CounterButton";

describe("CounterButton", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CounterButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
