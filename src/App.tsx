import './index.css'

import '@neo4j-ndl/base/lib/neo4j-ds-styles.css'
import { Typography, TextInput, CleanIconButton, FilledButton } from '@neo4j-ndl/react'
import { MagnifyingGlassIconOutline } from '@neo4j-ndl/react/icons'

import { useState } from 'react'

import Slider from './Slider'
import CheckboxOptions from './CheckboxOptions'
import { generatePassword } from './GeneratePassword'

type OptionKey = "upper" | "lower" | "symbols"

const App = () => {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(5)
  const [opts, setOpts] = useState({
    upper: true,
    lower: true,
    symbols: false,
  })

  const updateOpt = (key: OptionKey) => {
    setOpts(prev => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleGenerate = () =>
    setPassword(generatePassword(length, opts))

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

        <CheckboxOptions opts={opts} onToggle={updateOpt} />

        <FilledButton className="generate-btn" variant="primary" onClick={handleGenerate}>
          Generate
        </FilledButton>
      </div>
    </div>
  )
}

export default App
