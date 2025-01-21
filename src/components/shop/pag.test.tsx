// components/Pagination.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./pagination";

describe("Pagination Component", () => {
  const mockOnPageChange = jest.fn();

  it("should render correctly with given currentPage and totalPages", () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />);

    // Check if pagination buttons are rendered
    expect(screen.getByText("«")).toBeInTheDocument(); // Previous button
    expect(screen.getByText("1")).toBeInTheDocument(); // Page 1
    expect(screen.getByText("2")).toBeInTheDocument(); // Page 2
    expect(screen.getByText("3")).toBeInTheDocument(); // Page 3
    expect(screen.getByText("»")).toBeInTheDocument(); // Next button
  });

  it("should call onPageChange when a page button is clicked", () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />);

    // Simulate clicking on page 2
    fireEvent.click(screen.getByText("2"));

    // Check if onPageChange was called with the correct argument
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it("should disable the previous button when on the first page", () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />);

    // Check if the previous button is disabled
    const prevButton = screen.getByText("«");
    expect(prevButton).toBeDisabled();
  });

  it("should disable the next button when on the last page", () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={mockOnPageChange} />);

    // Check if the next button is disabled
    const nextButton = screen.getByText("»");
    expect(nextButton).toBeDisabled();
  });

  it("should show the correct visible pages based on currentPage", () => {
    render(<Pagination currentPage={3} totalPages={5} onPageChange={mockOnPageChange} />);

    // Pages 2, 3, 4 should be shown for currentPage = 3
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });

  it("should highlight the current page", () => {
    render(<Pagination currentPage={3} totalPages={5} onPageChange={mockOnPageChange} />);

    // Check if the current page is highlighted
    const currentPageButton = screen.getByText("3");
    expect(currentPageButton).toHaveClass("bg-orange-500 text-white");
  });

  it("should call onPageChange when previous button is clicked", () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={mockOnPageChange} />);

    const prevButton = screen.getByText("«");
    fireEvent.click(prevButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  });

  it("should call onPageChange when next button is clicked", () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={mockOnPageChange} />);

    const nextButton = screen.getByText("»");
    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });
});
