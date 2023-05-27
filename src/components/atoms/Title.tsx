import { type FC } from "react";


interface HeadlineProps {
    text: string;
}

const Title: FC<HeadlineProps> = ({ text }: HeadlineProps) => {
  return (
    <h1>{text}</h1>
  )
}

export default Title