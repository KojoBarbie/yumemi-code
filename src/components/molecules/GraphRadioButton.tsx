import { type ChangeEvent, type FC } from "react"
import RadioButton from "../atoms/RadioButton"

interface GraphProps {
    options: string[]
    selectedOption: string | null
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
  }

const GraphRadioButtons: FC<GraphProps> = ({ options, selectedOption, onChange }: GraphProps) => {
  return (
    <div>
    {options.map((option) => (
      <RadioButton
        key={option}
        label={option}
        checked={selectedOption === option}
        onChange={onChange}
      />
    ))}
  </div>
  )
}

export default GraphRadioButtons