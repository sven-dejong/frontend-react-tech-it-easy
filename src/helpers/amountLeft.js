import {getTotalAmountSold} from "./amountSold.js";
import {getTotalAmountBought} from "./amountBought.js";
import {bestSellingTv} from "../constants/inventory.js";

export function getTotalAmountLeft(bestSellingTv, inventory) {
    return getTotalAmountBought(bestSellingTv, inventory) - getTotalAmountSold(bestSellingTv, inventory);
}