import { formatDateToSpanish } from "../utils"

interface Props{
  data: PriceData
}

const styleObject = {
  display: "flex"
}

export const Data = ({data}:Props) => {
  return (
    <div className="box" style={{
      display: "flex",
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>    
      <span>{data.lastUpdate == 'Desconocido...' ? 'Desconocido...' : formatDateToSpanish(data.lastUpdate)}</span>
    </div>
  )
}