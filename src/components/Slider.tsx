import '../styles/Slider.css'

interface SliderProps {
  max: number
  min: number
  value: number
  onChange: (value: number) => void
  label?: string
}

const Slider = ({ max, min, value, onChange, label }: SliderProps) => {
  return (
    <div className="slider-container" data-testid="slider">
      <div className="slider-top">
        {label && (
          <div className="slider-label" data-testid="slider-label">
            {label}
          </div>
        )}
        <span className="slider-value" data-testid="slider-value">
          {value}
        </span>
      </div>

      <input
        data-testid="slider-input"
        className="clean-slider"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  )
}

export default Slider
