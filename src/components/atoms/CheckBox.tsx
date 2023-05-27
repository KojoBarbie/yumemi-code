import { type ChangeEvent, type FC } from "react";


interface Props {
    label: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: FC<Props> = ({label, checked, onChange}: Props) => {
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