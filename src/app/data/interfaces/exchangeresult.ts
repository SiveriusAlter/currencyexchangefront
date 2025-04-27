import { Currency } from "./currency.interface";

export interface ExchangeResult {
        id: number,
        baseCurrency: Currency,
        targetCurrency: Currency,
        rate: number,
        amount: number,
        convertedAmount: number
}
