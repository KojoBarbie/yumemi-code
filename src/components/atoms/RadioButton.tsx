import { type ChangeEvent, type FC } from 'react'

interface RadioButtonProps {
  label: string
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const RadioButton: FC<RadioButtonProps> = ({ label, checked, onChange }: RadioButtonProps) => {
  return (
    <label>
      <input type="radio" value={label} checked={checked} onChange={onChange} />
      {label}
    </label>
  )
}

export default RadioButton
