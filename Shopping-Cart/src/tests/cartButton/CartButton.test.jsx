import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react"
import CartButton from "/src/components/cartButton/CartButton.jsx"

describe("Cart Button component", () => {
    it("renders Cart Button button component with its text", () => {
        render(<CartButton />)
        expect(screen.getByRole("button", {name: "Add to Cart"}))
    })
})