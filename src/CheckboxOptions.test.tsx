import { describe, test, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import CheckboxOptions from "./CheckboxOptions"

describe("CheckboxOptions", () => {
  test("renders all three checkboxes", () => {
    render(
      <CheckboxOptions
        opts={{ upper: true, lower: false, symbols: true }}
        onToggle={() => {}}
      />
    )

    expect(screen.getByLabelText("Include uppercase letters")).toBeInTheDocument()
    expect(screen.getByLabelText("Include lowercase letters")).toBeInTheDocument()
    expect(screen.getByLabelText("Include symbols")).toBeInTheDocument()
  })

  test("checkboxes reflect the correct checked state", () => {
    render(
      <CheckboxOptions
        opts={{ upper: true, lower: false, symbols: true }}
        onToggle={() => {}}
      />
    )

    expect(screen.getByLabelText("Include uppercase letters")).toBeChecked()
    expect(screen.getByLabelText("Include lowercase letters")).not.toBeChecked()
    expect(screen.getByLabelText("Include symbols")).toBeChecked()
  })

  test("calls onToggle with 'upper' when upper checkbox is clicked", () => {
    const onToggle = vi.fn()

    render(
      <CheckboxOptions
        opts={{ upper: false, lower: false, symbols: false }}
        onToggle={onToggle}
      />
    )

    const upper = screen.getByLabelText("Include uppercase letters")
    fireEvent.click(upper)

    expect(onToggle).toHaveBeenCalledWith("upper")
  })

  test("calls onToggle with 'lower' when lower checkbox is clicked", () => {
    const onToggle = vi.fn()

    render(
      <CheckboxOptions
        opts={{ upper: false, lower: false, symbols: false }}
        onToggle={onToggle}
      />
    )

    const lower = screen.getByLabelText("Include lowercase letters")
    fireEvent.click(lower)

    expect(onToggle).toHaveBeenCalledWith("lower")
  })

  test("calls onToggle with 'symbols' when symbols checkbox is clicked", () => {
    const onToggle = vi.fn()

    render(
      <CheckboxOptions
        opts={{ upper: false, lower: false, symbols: false }}
        onToggle={onToggle}
      />
    )

    const symbols = screen.getByLabelText("Include symbols")
    fireEvent.click(symbols)

    expect(onToggle).toHaveBeenCalledWith("symbols")
  })
})
