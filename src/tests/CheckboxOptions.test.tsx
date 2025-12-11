import { describe, test, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import CheckboxOptions from "../components/CheckboxOptions"

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key
  })
}))

describe("CheckboxOptions", () => {
  test("renders all three checkboxes", () => {
    render(
      <CheckboxOptions
        options={{ upper: true, lower: false, symbols: true }}
        onHandleCheckboxChange={() => {}}
      />
    )

expect(screen.getByLabelText("checkbox.upper")).toBeInTheDocument()
expect(screen.getByLabelText("checkbox.lower")).toBeInTheDocument()
expect(screen.getByLabelText("checkbox.symbols")).toBeInTheDocument()
  })

  test("checkboxes reflect the correct checked state", () => {
    render(
      <CheckboxOptions
        options={{ upper: true, lower: false, symbols: true }}
        onHandleCheckboxChange={() => {}}
      />
    )

    expect(screen.getByLabelText("checkbox.upper")).toBeChecked()
    expect(screen.getByLabelText("checkbox.lower")).not.toBeChecked()
    expect(screen.getByLabelText("checkbox.symbols")).toBeChecked()
  })

  test("calls onHandleCheckboxChange with 'upper' when upper checkbox is clicked", () => {
    const onHandleCheckboxChange = vi.fn()

    render(
      <CheckboxOptions
        options={{ upper: false, lower: false, symbols: false }}
        onHandleCheckboxChange={onHandleCheckboxChange}
      />
    )

    const upper = screen.getByLabelText("checkbox.upper")
    fireEvent.click(upper)

    expect(onHandleCheckboxChange).toHaveBeenCalledWith("upper")
  })

  test("calls onHandleCheckboxChange with 'lower' when lower checkbox is clicked", () => {
    const onHandleCheckboxChange = vi.fn()

    render(
      <CheckboxOptions
        options={{ upper: false, lower: false, symbols: false }}
        onHandleCheckboxChange={onHandleCheckboxChange}
      />
    )

    const lower = screen.getByLabelText("checkbox.lower")
    fireEvent.click(lower)

    expect(onHandleCheckboxChange).toHaveBeenCalledWith("lower")
  })

  test("calls onHandleCheckboxChange with 'symbols' when symbols checkbox is clicked", () => {
    const onHandleCheckboxChange = vi.fn()

    render(
      <CheckboxOptions
        options={{ upper: false, lower: false, symbols: false }}
        onHandleCheckboxChange={onHandleCheckboxChange}
      />
    )

    const symbols = screen.getByLabelText("checkbox.symbols")
    fireEvent.click(symbols)

    expect(onHandleCheckboxChange).toHaveBeenCalledWith("symbols")
  })
})
