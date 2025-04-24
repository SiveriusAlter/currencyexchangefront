import { Currency } from "./currency.interface";

export interface ExchangeRate {
    id: number,
    baseCurrency: Currency,
    targetCurrency: Currency,
    rate: number
}
