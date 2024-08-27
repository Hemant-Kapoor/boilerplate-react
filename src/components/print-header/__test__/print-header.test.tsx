import { render, screen } from "@testing-library/react";
import PrintHeader from "../../print-header/print-header";

test("renders the Header component", () => {
  render(<PrintHeader />);
  const headerElement = screen.getByText(/Header Component/i);
  expect(headerElement).toBeInTheDocument();
});
