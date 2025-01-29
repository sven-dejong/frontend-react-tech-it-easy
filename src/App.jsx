import './App.css';
import {getTotalAmountSold} from "./helpers/amountSold.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {getTotalAmountBought} from "./helpers/amountBought.js";
import {getTotalAmountLeft} from "./helpers/amountLeft.js";
import {getTvName} from "./helpers/getTvName.js";
import {getTvPrice} from "./helpers/getTvPrice.js";
import {getTvSizes} from "./helpers/getTvSizes.js";
import samsungTv from "./assets/samsung-du7170-front.png";
import checkIcon from "./assets/check.png";
import minusIcon from "./assets/minus.png"

function App() {
    const totalSold = getTotalAmountSold(bestSellingTv, inventory);
    const totalBought = getTotalAmountBought(bestSellingTv, inventory);
    const totalLeft = getTotalAmountLeft(bestSellingTv, inventory);
    const tvName = getTvName(bestSellingTv, inventory);
    const tvPrice = getTvPrice(bestSellingTv, inventory);
    const tvSizes = getTvSizes(bestSellingTv, inventory);

    return (
        <>
            <h1>Tech It Easy Dashboard</h1>
            <h2>Verkoopoverzicht</h2>
            <section className="dashboard">
                <div className="dashboardSoldComponent">
                    <h2>Aantal verkochte producten</h2>
                    <p>{totalSold}</p>
                </div>
                <div className="dashboardBoughtComponent">
                    <h2>Aantal ingekochte producten</h2>
                    <p>{totalBought}</p>
                </div>
                <div className="dashboardLeftComponent">
                    <h2>Aantal producten over</h2>
                    <p>{totalLeft}</p>
                </div>
            </section>
            <div className="productComponent">
          <span className="productImage">
          <img src={samsungTv}/>
            </span>
                <div className="productDetails">
                    <h2>{tvName}</h2>
                    <h3>{tvPrice}</h3>
                    <p>{tvSizes}</p>
                    <div className="tvSpecs">
                        <p>
                            <img src={checkIcon}/>
                            wifi
                            <img src={minusIcon}/>
                            speech
                            <img src={checkIcon}/>
                            hdr
                            <img src={checkIcon}/>
                            bluetooth
                            <img src={minusIcon}/>
                            ambilight
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
