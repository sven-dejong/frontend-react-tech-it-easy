import {bestSellingTv as tv, inventory} from "./inventory.js";

function showOpdrachtEen() {

    // 1a
    const tvTypes = inventory.map((tv) => {
        return tv.type
    });

    console.log(tvTypes);

    // 1b
    const soldOutTv = inventory.filter((tv) => {
        return tv.originalStock === tv.sold;
    });

    console.log(soldOutTv);

    // 1c
    const getInformation = inventory.find((tv) => {
        return tv.type === "NH3216SMART"
    });

    console.log(getInformation);

    // 1d
    const suitableSport = inventory.map((tv) => {
        return {name: `${tv.brand} ${tv.name}`, suitable: tv.refreshRate >= 100};
    });

    console.log(suitableSport);

    // 1e
    const largeTvs = inventory.filter((tv) => {
        const largerThan65 = tv.availableSizes.find((availableSize) => {
            return availableSize >= 65;
        });
        return largerThan65;
    });

    console.log(largeTvs);

    // 1f
    const ambilightTvs = inventory.filter((tv) => {
        const hasAmbilight = tv.options.find((option) => {
            return option.name === 'ambiLight'
        });
        return hasAmbilight.applicable === true
    });

    console.log(ambilightTvs);

}

export default showOpdrachtEen;