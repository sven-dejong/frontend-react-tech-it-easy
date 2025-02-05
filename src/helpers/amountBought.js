import {bestSellingTv, inventory} from "../constants/inventory.js";

export function getTotalAmountBought(bestSellingTv, inventory) {
    let totalBought = bestSellingTv.originalStock;
    inventory.forEach(tv => {
        totalBought += tv.originalStock;
    });

    return totalBought
}