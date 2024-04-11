/* Construct a simple Portfolio class that has a collection of Stocks and a "Profit" method that 
receives 2 dates and returns the profit of the Portfolio between those dates. 
Note: in this point, if the result of the process is a loss is considerer a profit? in a negative way?
Assume each Stock has a "Price" method that receives a date and returns its price.
Bonus Track: make the Profit method return the "annualized return" of the portfolio 
between the given dates. */
import { mockData } from './mockDataStockHistory';

export interface Stock {
  companyName: string;
  actualPrice:number;
  actualDate:string;
  pricebyDate: (actualDate:string)=> number | undefined;
}

interface Portfolio {
  stocks: Stock [];
  profit: (initialDate: string,endDate: string) => number;
}

class stock implements Stock{
  companyName:string;
  actualDate: string;
  actualPrice: number;

  constructor(companyName: string ) {
    this.companyName = companyName;
    this.actualPrice = 0.5;
    this.actualDate = new Date().toLocaleString();
  }

  pricebyDate(actualDate: string) {
      const dateObject = mockData().find(stockArchiveElement=> new Date(actualDate).toString() === new Date(stockArchiveElement.actualDate).toString());
      if (dateObject === undefined) {
        throw new TypeError('data Stock unable to find');
      }
      return  dateObject.actualPrice;
  }

}

class portfolio implements Portfolio {
  stocks: Stock [];

  constructor() {
    this.stocks = [];
  }

  profit(initialDate: string, endDate: string): number {
    const initialStockPrice = new stock("Netflix").pricebyDate(initialDate);
    const endStockPrice = new stock("Netflix").pricebyDate(endDate);
    const percentageGain = (endStockPrice - initialStockPrice) / initialStockPrice;
    const rangeProfit = initialStockPrice * percentageGain;
    return rangeProfit;
  }
  

}

console.log( new portfolio().profit("01/04/2024","04/04/2024"))