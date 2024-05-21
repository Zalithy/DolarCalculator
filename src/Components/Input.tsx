import { ChangeEvent } from "react";

interface Props {
  symbol: string;
  fn: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

export const Input = ({fn, value, symbol}: Props) => {
  return(
    <div className="inputbox">
      <span>{symbol}</span>
      <input className="input" value={value} type="number" step={0.01} onChange={fn}/>
    </div> 
  )
}