import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("Button renders successfully", () => {
  const { getByTestId } = render(
    <Button text="Click Me!" action={() => console.log(`Pass`)} />
  );

  expect(getByTestId("btn")).toHaveTextContent("Click Me");
});

it("Button is visible on screen", () => {
  const { getByTestId } = render(
    <Button text="Click Me!" action={() => console.log(`Pass`)} />
  );

  expect(getByTestId("btn")).toBeVisible("Click Me");
});

it("Button is visible on screen", () => {
  const { getByTestId } = render(
    <Button text="Click Me!" action={() => console.log(`Pass`)} />
  );

  expect(getByTestId("btn")).toBeVisible("Click Me");
});
