import { Checkbox } from "@neo4j-ndl/react"
import "./index.css"

interface Props {
  opts: {
    upper: boolean
    lower: boolean
    symbols: boolean
  }
  onToggle: (key: "upper" | "lower" | "symbols") => void
}

const CheckboxOptions = ({ opts, onToggle }: Props) => {
  return (
    <div className="checkbox-group">
      <Checkbox
        isChecked={opts.upper}
        onChange={() => onToggle("upper")}
        label="Include uppercase letters"
      />

      <Checkbox
        isChecked={opts.lower}
        onChange={() => onToggle("lower")}
        label="Include lowercase letters"
      />

      <Checkbox
        isChecked={opts.symbols}
        onChange={() => onToggle("symbols")}
        label="Include symbols"
      />
    </div>
  )
}

export default CheckboxOptions
