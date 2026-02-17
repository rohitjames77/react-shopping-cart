import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ErrorPage from "./ErrorPage";
import { describe, test, expect, beforeEach, vi } from "vitest";

describe("ErrorPage basic tests", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test("renders error title and static content", () => {
    render(<ErrorPage error="Something went wrong" />);

    expect(screen.getByText("Status Code 400")).toBeInTheDocument();
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Bad Request")).toBeInTheDocument();
    expect(
      screen.getByText(/sorry for the inconvenience/i),
    ).toBeInTheDocument();
  });

  test("calls window.location.reload when clicking Try Again", async () => {
    const user = userEvent.setup();
    const reloadMock = vi.fn();

    Object.defineProperty(window, "location", {
      value: { reload: reloadMock },
      writable: true,
    });

    render(<ErrorPage error="Error" />);

    const retryButton = screen.getByRole("button", { name: /try again/i });
    await user.click(retryButton);

    expect(reloadMock).toHaveBeenCalled();
  });

  test("redirects to home when clicking Go Home", async () => {
    const user = userEvent.setup();

    delete window.location;
    window.location = { href: "" };

    render(<ErrorPage error="Error" />);

    const homeButton = screen.getByRole("button", { name: /go home/i });
    await user.click(homeButton);

    expect(window.location.href).toBe("/");
  });
});
