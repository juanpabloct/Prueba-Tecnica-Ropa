import React from "react";
import { render, screen } from "@testing-library/react";
import { Products } from "./pages/All_products";

test("renders learn react link", () => {
  render(<Products />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
