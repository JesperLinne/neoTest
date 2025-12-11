import "./index.css"

import { Checkbox } from "@neo4j-ndl/react"

interface Props {
  options: {
    upper: boolean
    lower: boolean
    symbols: boolean
  }
  onHandleCheckboxChange: (key: "upper" | "lower" | "symbols") => void
}

const CheckboxOptions = ({ options, onHandleCheckboxChange }: Props) => {
  return (
    <div className="checkbox-group">
      <Checkbox
        isChecked={options.upper}
        onChange={() => onHandleCheckboxChange("upper")}
        label="Include uppercase letters"
      />

      <Checkbox
        isChecked={options.lower}
        onChange={() => onHandleCheckboxChange("lower")}
        label="Include lowercase letters"
      />

      <Checkbox
        isChecked={options.symbols}
        onChange={() => onHandleCheckboxChange("symbols")}
        label="Include symbols"
      />
    </div>
  )
}

export default CheckboxOptions
