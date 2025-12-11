import './index.css'

import '@neo4j-ndl/base/lib/neo4j-ds-styles.css'
import { Typography, TextInput, CleanIconButton, FilledButton } from '@neo4j-ndl/react'
import { MagnifyingGlassIconOutline } from '@neo4j-ndl/react/icons'

import { useState } from 'react'

import Slider from './components/Slider'
import CheckboxOptions from './components/CheckboxOptions'
import { generatePassword } from './utils/GeneratePassword'
import type { OptionKey } from './utils/types'

const App = () => {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(5)
  const [options, setOptions] = useState({
    upper: true,
    lower: true,
    symbols: false,
  })

  const onHandleCheckboxChange = (key: OptionKey) => {
    setOptions(prev => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleGenerate = () =>
    setPassword(generatePassword(length, options))

  const handleCopy = () =>
    navigator.clipboard.writeText(password)

  return (
    <div className="app-container">
      <div className="card">
        <Typography variant="body-medium" className="title">
          Password Generator
        </Typography>

        <TextInput
          label="Generated password"
          value={password}
          className="text-input"
          size="large"
          trailingElement={
            <CleanIconButton onClick={handleCopy} description="Copy password">
              <MagnifyingGlassIconOutline />
            </CleanIconButton>
          }
        />

        <Slider
          max={10}
          value={length}
          onChange={setLength}
          label="Character length"
        />

        <CheckboxOptions options={options} onHandleCheckboxChange={onHandleCheckboxChange} />

        <FilledButton className="generate-btn" variant="primary" onClick={handleGenerate}>
          Generate
        </FilledButton>
      </div>
    </div>
  )
}

export default App
