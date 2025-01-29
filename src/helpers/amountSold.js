import {bestSellingTv, inventory} from "../constants/inventory.js";

export function getTotalAmountSold(bestSellingTv, inventory) {
    let totalSold = bestSellingTv.sold;
    inventory.forEach(tv => {
        totalSold += tv.sold;
    });

    return totalSold
}

