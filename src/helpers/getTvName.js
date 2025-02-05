import {bestSellingTv, inventory} from "../constants/inventory.js";

export function getTvName(bestSellingTv, inventory) {
    const tvName = `${bestSellingTv.brand} ${bestSellingTv.type} - ${bestSellingTv.name} `;

    return tvName;
}