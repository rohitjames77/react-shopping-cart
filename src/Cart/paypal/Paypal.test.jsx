import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, expect, test } from "vitest";
import PaypalForm from "./PaypalForm";

describe("PaypalForm basic tests", () => {
  test("renders form when isPaypalSelected is true", () => {
    render(<PaypalForm isPaypalSelected={true} setLogInSuccess={vi.fn()} />);

    expect(
      screen.getByPlaceholderText(/enter your email/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/enter your password/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  test("hides form when isPaypalSelected is false", () => {
    const { container } = render(
      <PaypalForm isPaypalSelected={false} setLogInSuccess={vi.fn()} />,
    );

    const form = container.querySelector("#card-payment-paypal-form-container");
    expect(form).toHaveClass("hidden");
  });

  test("calls setLogInSuccess(true) when clicking Log In", async () => {
    const user = userEvent.setup();
    const mockSetLogin = vi.fn();

    render(
      <PaypalForm isPaypalSelected={true} setLogInSuccess={mockSetLogin} />,
    );

    await user.click(screen.getByRole("button", { name: /log in/i }));

    expect(mockSetLogin).toHaveBeenCalledWith(true);
  });

  test("calls setLogInSuccess(false) after 3 seconds", async () => {
    const mockSetLogin = vi.fn();

    render(
      <PaypalForm isPaypalSelected={true} setLogInSuccess={mockSetLogin} />,
    );

    await userEvent.click(screen.getByRole("button", { name: /log in/i }));

    // wait slightly more than 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3100));

    expect(mockSetLogin).toHaveBeenLastCalledWith(false);
  });
});
