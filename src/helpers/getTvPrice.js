import {bestSellingTv, inventory} from "../constants/inventory.js";

export function getTvPrice(bestSellingTv, inventory) {
    const tvPrice = `€${bestSellingTv.price},-`;

    return tvPrice;
}