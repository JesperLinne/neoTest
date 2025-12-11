import './index.css'

import '@neo4j-ndl/base/lib/neo4j-ds-styles.css'
import {
  Typography,
  TextInput,
  CleanIconButton,
  FilledButton,
  useCopyToClipboard,
} from '@neo4j-ndl/react'
import { Square2StackIconOutline } from '@neo4j-ndl/react/icons'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Slider from './components/Slider'
import CheckboxOptions from './components/CheckboxOptions'
import { generatePassword } from './utils/GeneratePassword'
import type { OptionKey } from './utils/types'

const App = () => {
  const { t } = useTranslation()
  const [password, setPassword] = useState('')
  const [, copy] = useCopyToClipboard()
  const [length, setLength] = useState(5)
  const [options, setOptions] = useState({
    upper: true,
    lower: true,
    symbols: false,
  })

  const onHandleCheckboxChange = (key: OptionKey) => {
    setOptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleGenerate = () => setPassword(generatePassword(length, options))

  return (
    <div className="app-container">
      <div className="card">
        <Typography variant="body-medium" className="title">
          {t('title')}
        </Typography>

        <TextInput
          label={t('generatedPasswordLabel')}
          value={password}
          className="text-input"
          onChange={(e) => setPassword(e.target.value)}
          trailingElement={
            <CleanIconButton onClick={() => copy(password)} description={t('copyPassword')}>
              <Square2StackIconOutline />
            </CleanIconButton>
          }
        />
        <Slider max={10} value={length} onChange={setLength} label={t('characterLength')} />
        <CheckboxOptions options={options} onHandleCheckboxChange={onHandleCheckboxChange} />
        <FilledButton className="generate-btn" variant="primary" onClick={handleGenerate}>
          {t('generateButton')}
        </FilledButton>
      </div>
    </div>
  )
}

export default App
