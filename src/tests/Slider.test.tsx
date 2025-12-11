import { test, describe, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Slider from '../components/Slider'

describe('Slider', () => {
  test('renders the slider with the correct value', () => {
    render(<Slider max={10} value={5} onChange={() => {}} />)

    const valueElement = screen.getByText('5')
    expect(valueElement).toBeInTheDocument()
  })

  test('renders the label when provided', () => {
    render(<Slider max={10} value={4} onChange={() => {}} label="Length" />)

    const label = screen.getByText('Length')
    expect(label).toBeInTheDocument()
  })

  test('does not render a label when none is provided', () => {
    render(<Slider max={10} value={4} onChange={() => {}} />)

    const label = screen.queryByText('Length')
    expect(label).not.toBeInTheDocument()
  })

  test('calls onChange when the slider value changes', () => {
    const handleChange = vi.fn()

    render(<Slider max={10} value={3} onChange={handleChange} />)

    const slider = screen.getByRole('slider')

    fireEvent.change(slider, { target: { value: '7' } })

    expect(handleChange).toHaveBeenCalledWith(7)
  })

  test('input element has correct attributes', () => {
    render(<Slider max={20} value={8} onChange={() => {}} />)

    const slider = screen.getByRole('slider')

    expect(slider).toHaveAttribute('max', '20')
    expect(slider).toHaveAttribute('value', '8')
    expect(slider).toHaveAttribute('min', '0')
    expect(slider).toHaveAttribute('type', 'range')
  })
})
