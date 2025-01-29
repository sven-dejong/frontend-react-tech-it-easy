import {bestSellingTv, inventory} from "../constants/inventory.js";

// export function getTvSizes(bestSellingTv, inventory) {
   // const tvSizes = bestSellingTv.availableSizes;
    // const tvSizesCm = Math.round(tvSizes * 2.54);
    // const tvSizeComplete = `${tvSizes} inches | (${tvSizesCm} cm)`;
    // return tvSizeComplete;
// }

export function getTvSizes(tv) {
    return tv.availableSizes
        .map(size => `${size} inches (${Math.round(size * 2.54)} cm)`)
        .join(" | ");
}