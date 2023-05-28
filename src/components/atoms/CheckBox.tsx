import { type ChangeEvent, type FC } from "react";


interface CheckBoxProps {
    label: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: FC<CheckBoxProps> = ({label, checked, onChange}: CheckBoxProps) => {
  return (
    <div>
        <label>
            <input type="checkbox" checked={checked} onChange={onChange} />
            {label}
        </label>
    </div>
  )
}

export default CheckBox