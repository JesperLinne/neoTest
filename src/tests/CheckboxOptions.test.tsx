import { describe, test, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import CheckboxOptions from "../components/CheckboxOptions"

describe("CheckboxOptions", () => {
  test("renders all three checkboxes", () => {
    render(
      <CheckboxOptions
        options={{ upper: true, lower: false, symbols: true }}
        onHandleCheckboxChange={() => {}}
      />
    )

    expect(screen.getByLabelText("Include uppercase letters")).toBeInTheDocument()
    expect(screen.getByLabelText("Include lowercase letters")).toBeInTheDocument()
    expect(screen.getByLabelText("Include symbols")).toBeInTheDocument()
  })

  test("checkboxes reflect the correct checked state", () => {
    render(
      <CheckboxOptions
        options={{ upper: true, lower: false, symbols: true }}
        onHandleCheckboxChange={() => {}}
      />
    )

    expect(screen.getByLabelText("Include uppercase letters")).toBeChecked()
    expect(screen.getByLabelText("Include lowercase letters")).not.toBeChecked()
    expect(screen.getByLabelText("Include symbols")).toBeChecked()
  })

  test("calls onToggle with 'upper' when upper checkbox is clicked", () => {
    const onHandleCheckboxChange = vi.fn()

    render(
      <CheckboxOptions
        options={{ upper: false, lower: false, symbols: false }}
        onHandleCheckboxChange={onHandleCheckboxChange}
      />
    )

    const upper = screen.getByLabelText("Include uppercase letters")
    fireEvent.click(upper)

    expect(onHandleCheckboxChange).toHaveBeenCalledWith("upper")
  })

  test("calls onToggle with 'lower' when lower checkbox is clicked", () => {
    const onHandleCheckboxChange = vi.fn()

    render(
      <CheckboxOptions
        options={{ upper: false, lower: false, symbols: false }}
        onHandleCheckboxChange={onHandleCheckboxChange}
      />
    )

    const lower = screen.getByLabelText("Include lowercase letters")
    fireEvent.click(lower)

    expect(onHandleCheckboxChange).toHaveBeenCalledWith("lower")
  })

  test("calls onToggle with 'symbols' when symbols checkbox is clicked", () => {
    const onHandleCheckboxChange = vi.fn()

    render(
      <CheckboxOptions
        options={{ upper: false, lower: false, symbols: false }}
        onHandleCheckboxChange={onHandleCheckboxChange}
      />
    )

    const symbols = screen.getByLabelText("Include symbols")
    fireEvent.click(symbols)

    expect(onHandleCheckboxChange).toHaveBeenCalledWith("symbols")
  })
})
