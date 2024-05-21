import { useEffect, useRef, useState } from "react";
import { Input } from "./Components/Input";
import { twoDecimalFloat } from "./utils";
import { Rate } from "./Components/Rate";
import { Data } from "./Components/Data";
import './css/index.scss'

export const App = () => {
  const [dolar, setDolar] = useState<number>(1);
  const [bs, setBs] = useState<number>();
  const [rate, setRate] = useState<number>();
  const [rateObject, setRateObject] = useState<PriceData>(null);
  const [listRates, setListRates] = useState<DolarRates>(undefined);

  useEffect(() => {
    async function fetchDolar(){
      const dolarJSON = await window.api.getDolar();
      setRate(dolarJSON.bcv.price)
      setBs(dolarJSON.bcv.price)
      setListRates(dolarJSON)
      setRateObject(dolarJSON.bcv)
    }
    fetchDolar()
  }, [])

  function $Dolar(event: React.ChangeEvent<HTMLInputElement>){
    const inputValue = event.target.value ? twoDecimalFloat(event.target.value) : null;
    setDolar(inputValue)
    setBs(twoDecimalFloat(inputValue * rate))
  }
  
  function $Bs(event: React.ChangeEvent<HTMLInputElement>){
    const inputValue = event.target.value ? twoDecimalFloat(event.target.value) : null;
    setBs(inputValue)
    setDolar(twoDecimalFloat(inputValue / rate))
  }

  function $Rate(event: React.ChangeEvent<HTMLSelectElement>){
    const selectValue = event.target.value;
    const newRate = selectValue == 'bcv' ? listRates.bcv.price : listRates.monitor.price;
    const newRateObject = selectValue == 'bcv' ? listRates.bcv : listRates.monitor;
    setRateObject(newRateObject);
    setRate(newRate); 
    setBs(twoDecimalFloat(dolar * newRate))
  }

  const selectElement = useRef();
  function $CustomRate(event: React.ChangeEvent<HTMLInputElement>){
    const inputValue = event.target.value ? twoDecimalFloat(event.target.value) : null;
    setRate(inputValue);
    setBs(twoDecimalFloat(dolar * inputValue));
    selectElement.current.value = `personalize`;
    setRateObject(null);
  }

  
  return (
    <>
      <h1>calculator</h1>
      <Input value={dolar} symbol="$" fn={$Dolar}/>
      <Input value={bs} symbol="Bs." fn={$Bs}/>
      <div className="div">-</div>
      <Rate reference={selectElement} fn={$Rate}/>

      <Input value={rate} symbol="Precio:" fn={$CustomRate}/>

      <Data data={rateObject ? rateObject : {title: 'Desconocido...', lastUpdate: 'Desconocido...'}}/>
    </>
  )
}