import { Stock } from './main';

const dataonlyStock: Omit<Stock,"companyName" | "pricebyDate">[] = [
    {actualPrice: 0.2,
    actualDate: "01/04/2024"}, 
    {actualPrice:0.1,
    actualDate: "02/04/2024"}, 
    {actualPrice: 0.3,
    actualDate:"03/04/2024"},
    {actualPrice: 0.5,
        actualDate:"04/04/2024"}
]

export const mockData = () =>{

   const getActualPriceAndDate = () =>{
    dataonlyStock.push({actualPrice: 0.1, actualDate: new Date().toISOString()
            .slice(0, 10)
            .split("-")
            .reverse()
            .join("/")
        })
     }
     getActualPriceAndDate();
    return dataonlyStock;
}