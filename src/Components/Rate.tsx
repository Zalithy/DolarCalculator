interface Props{
  fn: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  reference: React.MutableRefObject<undefined>;
}

export const Rate = ({fn, reference}:Props) => {
  return(
    <div className="inputbox">
      <span>Tasa:</span>
      <select className="input" onChange={fn} ref={reference}>
        <option value="bcv">BCV</option>
        <option value="monitor">EnParaleloVzla</option>
        <option value="personalize">Personalizado</option>
      </select>
    </div>
  )
}