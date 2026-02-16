import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VisaForm from "./VisaForm";
import { describe,test,expect } from "vitest";

describe("VisaForm Component", () => {
  test("renders form when isVisaSelected is true", () => {
    render(<VisaForm isVisaSelected={true} />);

    expect(
      screen.getByPlaceholderText(/name on card/i)
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/card number/i)
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/cvv code/i)
    ).toBeInTheDocument();
  });

  test("hides form when isVisaSelected is false", () => {
    const { container } = render(<VisaForm isVisaSelected={false} />);

    const formContainer = container.querySelector(
      "#card-payment-visa-form-container"
    );

    expect(formContainer).toHaveClass("hidden");
  });

  test("shows down arrow by default", () => {
    render(<VisaForm isVisaSelected={true} />);

    const expirationButton = screen.getByRole("button", {
      name: /expiration date/i,
    });

    expect(expirationButton).toBeInTheDocument();
  });

  test("changes arrow after clicking expiration date button", async () => {
    render(<VisaForm isVisaSelected={true} />);

    const expirationButton = screen.getByRole("button", {
      name: /expiration date/i,
    });
    await userEvent.click(expirationButton);
    expect(expirationButton).toBeInTheDocument();
  });
});