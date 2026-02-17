import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, vi, test, expect } from "vitest";
import Carousel from "./Carousel";

vi.mock("react-router", () => ({
  useOutletContext: () => ({
    storeApiData: [
      { id: 1, image: "img1.jpg", title: "Slide 1" },
      { id: 2, image: "img2.jpg", title: "Slide 2" },
      { id: 3, image: "img3.jpg", title: "Slide 3" },
    ],
  }),
}));

describe("Carousel basic tests", () => {
  test("renders all images", () => {
    render(<Carousel />);

    expect(screen.getByAltText("Slide 1")).toBeInTheDocument();
    expect(screen.getByAltText("Slide 2")).toBeInTheDocument();
    expect(screen.getByAltText("Slide 3")).toBeInTheDocument();
  });

  test("first image is visible by default", () => {
    render(<Carousel />);

    const firstImage = screen.getByAltText("Slide 1");
    expect(firstImage.className).toContain("opacity-100");
  });

  test("clicking next shows next image", async () => {
    const user = userEvent.setup();
    render(<Carousel />);

    const buttons = screen.getAllByRole("button");
    const nextButton = buttons[1]; // right arrow button

    await user.click(nextButton);

    const secondImage = screen.getByAltText("Slide 2");
    expect(secondImage.className).toContain("opacity-100");
  });

  test("clicking prev from first loops to last", async () => {
    const user = userEvent.setup();
    render(<Carousel />);

    const buttons = screen.getAllByRole("button");
    const prevButton = buttons[0]; // left arrow button

    await user.click(prevButton);

    const lastImage = screen.getByAltText("Slide 3");
    expect(lastImage.className).toContain("opacity-100");
  });

  test("clicking indicator changes slide", async () => {
    const user = userEvent.setup();
    render(<Carousel />);

    const buttons = screen.getAllByRole("button");

    const thirdIndicator = buttons[buttons.length - 1];

    await user.click(thirdIndicator);

    const thirdImage = screen.getByAltText("Slide 3");
    expect(thirdImage.className).toContain("opacity-100");
  });
});
