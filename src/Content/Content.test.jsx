import { render, screen, waitFor } from "@testing-library/react";
import ContentPage from "./Content";
import { describe, test, expect, beforeEach, vi } from "vitest";
vi.mock("react-router", () => ({
  useOutletContext: () => ({
    isActive: { men: false, women: false, home: false, beauty: false },
    quantity: 1,
    setQuantity: vi.fn(),
  }),
  Outlet: () => <div data-testid="outlet" />,
}));

describe("ContentPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders outlet after successful fetch", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve([{ id: 1 }]),
        }),
      ),
    );

    render(<ContentPage />);

    expect(await screen.findByTestId("outlet")).toBeInTheDocument();
  });

  test("shows error message if fetch fails", async () => {
    globalThis.fetch = vi.fn(() =>
      Promise.reject(new Error("Failed to fetch")),
    );

    render(<ContentPage />);

    await waitFor(() =>
      expect(screen.getByText(/error:/i)).toBeInTheDocument(),
    );

    expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
  });
});
