import '../styles/Slider.css'

interface SliderProps {
  max: number
  value: number
  onChange: (value: number) => void
  label?: string
}

const Slider = ({ max, value, onChange, label }: SliderProps) => {
  return (
    <div className="slider-container">
      <div className="slider-top">
        {label && <div className="slider-label">{label}</div>}
        <span className="slider-value">{value}</span>
      </div>

      <input
        className="clean-slider"
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  )
}

export default Slider
