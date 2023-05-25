import { type FC } from "react";


interface HeadlineProps {
    text: string;
}

const SubTitle: FC<HeadlineProps> = ({ text }: HeadlineProps) => {
  return (
    <h2>{text}</h2>
  )
}

export default SubTitle