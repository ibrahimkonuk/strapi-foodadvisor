import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import App from "./App";
import { getRestaurants } from "./api/restaurants";

// Mock the getRestaurants function
vi.mock("./api/restaurants", () => ({
  getRestaurants: vi.fn(),
}));

describe("App component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("displays a loading spinner initially", () => {
    // For this test, we simulate a never-resolving promise to keep the component in the loading state.
    (getRestaurants as ReturnType<typeof vi.fn>).mockImplementation(
      () => new Promise(() => {})
    );

    render(<App />);
    // The CircularProgress component renders with a role of "progressbar"
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("displays an error message when the API call fails", async () => {
    const errorMsg = "API failed";
    (getRestaurants as ReturnType<typeof vi.fn>).mockRejectedValue(
      new Error(errorMsg)
    );

    render(<App />);
    // Wait for the error alert to appear
    await waitFor(() => {
      expect(screen.getByText(errorMsg)).toBeInTheDocument();
    });
  });

  it("displays restaurant cards when API call succeeds", async () => {
    const fakeRestaurants = [
      { id: "1", Name: "Restaurant A" },
      { id: "2", Name: "Restaurant B" },
    ];
    (getRestaurants as ReturnType<typeof vi.fn>).mockResolvedValue(
      fakeRestaurants
    );

    render(<App />);
    // Wait for the restaurant names to be rendered
    await waitFor(() => {
      expect(screen.getByText("Restaurant A")).toBeInTheDocument();
      expect(screen.getByText("Restaurant B")).toBeInTheDocument();
    });
  });
});
