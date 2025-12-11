import "../styles/CheckboxOptions.css"

import { Checkbox } from "@neo4j-ndl/react"

import { useTranslation } from "react-i18next"

interface Props {
  options: {
    upper: boolean
    lower: boolean
    symbols: boolean
  }
  onHandleCheckboxChange: (key: "upper" | "lower" | "symbols") => void
}

const CheckboxOptions = ({ options, onHandleCheckboxChange }: Props) => {
  const { t } = useTranslation()

  return (
    <div className="checkbox-group">
      <Checkbox
        isChecked={options.upper}
        onChange={() => onHandleCheckboxChange("upper")}
        label={t("checkbox.upper")}
      />
      <Checkbox
        isChecked={options.lower}
        onChange={() => onHandleCheckboxChange("lower")}
        label={t("checkbox.lower")}
      />
      <Checkbox
        isChecked={options.symbols}
        onChange={() => onHandleCheckboxChange("symbols")}
        label={t("checkbox.symbols")}
      />
    </div>
  )
}

export default CheckboxOptions
