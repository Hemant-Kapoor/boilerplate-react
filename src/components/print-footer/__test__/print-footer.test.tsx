import { render, screen } from "@testing-library/react";
import PrintFooter from "../../print-footer/print-footer";

test("renders the Footer component", () => {
  render(<PrintFooter />);
  const footerElement = screen.getByText(/Footer Component/i);
  expect(footerElement).toBeInTheDocument();
});
