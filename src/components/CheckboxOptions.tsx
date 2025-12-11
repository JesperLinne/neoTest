import '../styles/CheckboxOptions.css'

import { Checkbox } from '@neo4j-ndl/react'
import { useTranslation } from 'react-i18next'

interface Props {
  options: {
    upper: boolean
    lower: boolean
    symbols: boolean
  }
  onHandleCheckboxChange: (key: 'upper' | 'lower' | 'symbols') => void
}

const CheckboxOptions = ({ options, onHandleCheckboxChange }: Props) => {
  const { t } = useTranslation()

  return (
    <div className="checkbox-group">
      <div data-testid="checkbox-upper">
        <Checkbox
          isChecked={options.upper}
          onChange={() => onHandleCheckboxChange('upper')}
          label={t('checkbox.upper')}
        />
      </div>

      <div data-testid="checkbox-lower">
        <Checkbox
          isChecked={options.lower}
          onChange={() => onHandleCheckboxChange('lower')}
          label={t('checkbox.lower')}
        />
      </div>

      <div data-testid="checkbox-symbols">
        <Checkbox
          isChecked={options.symbols}
          onChange={() => onHandleCheckboxChange('symbols')}
          label={t('checkbox.symbols')}
        />
      </div>
    </div>
  )
}

export default CheckboxOptions
