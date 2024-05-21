interface PriceData {
  title: string;
  price: number;
  price_old: number;
  type: string;
  lastUpdate: string;
}

interface DolarRates {
  bcv: PriceData;
  monitor: PriceData;
}