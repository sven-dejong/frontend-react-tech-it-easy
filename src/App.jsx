import './App.css';
import {getTotalAmountSold} from "./helpers/amountSold.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {getTotalAmountBought} from "./helpers/amountBought.js";
import {getTotalAmountLeft} from "./helpers/amountLeft.js";
import {getTvName} from "./helpers/getTvName.js";
import {getTvPrice} from "./helpers/getTvPrice.js";
import {getTvSizes} from "./helpers/getTvSizes.js";
import checkIcon from "./assets/check.png";
import minusIcon from "./assets/minus.png"
import showOpdrachtEen from "./constants/opdracht-1-oefeningen.js"

function App() {
    showOpdrachtEen();

    function sortBestSelling() {
        inventory.sort((a, b) => {
            return b.sold - a.sold;
        });

        console.log('Meest verkocht eerst', inventory);
    }

    function sortCheapest() {
        inventory.sort((a, b) => {
            return a.price - b.price;
        });

        console.log('Goedkoopste eerst', inventory);
    }

    function sortSport() {
        inventory.sort((a, b) => {
            return b.refreshRate - a.refreshRate;
        });

        console.log('Meest geschikt voor sport eerst', inventory);
    }

    return (
        <main className="page-container">
            <h1>Tech It Easy Dashboard</h1>
            <h2>Verkoopoverzicht</h2>
            <section className="dashboard">
                <article className="dashboardComponent total-sold">
                    <h2>Aantal verkochte producten</h2>
                    <p>{getTotalAmountSold(bestSellingTv, inventory)}</p>
                </article>
                <article className="dashboardComponent total-bought">
                    <h2>Aantal ingekochte producten</h2>
                    <p>{getTotalAmountBought(bestSellingTv, inventory)}</p>
                </article>
                <article className="dashboardComponent total-left">
                    <h2>Aantal producten over</h2>
                    <p>{getTotalAmountLeft(bestSellingTv, inventory)}</p>
                </article>
            </section>
            <section className="bestSellingTv">
                <h2>Best verkochte TV</h2>
                <article className="productComponent">
          <span className="productImage">
          <img src={bestSellingTv.sourceImg}/>
            </span>
                    <div className="productDetails">
                        <h2>{getTvName(bestSellingTv, inventory)}</h2>
                        <h3>{getTvPrice(bestSellingTv, inventory)}</h3>
                        <p>{getTvSizes(bestSellingTv, inventory)}</p>
                        <ul className="tvSpecs">
                            <li><img src={checkIcon} alt="Icoon: aanwezig" className="icon"/>wifi</li>
                            <li><img src={minusIcon} alt="Icoon: niet aanwezig" className="icon"/>speech</li>
                            <li><img src={checkIcon} alt="Icoon: aanwezig" className="icon"/>hdr</li>
                            <li><img src={checkIcon} alt="Icoon: aanwezig" className="icon"/>bluetooth</li>
                            <li><img src={minusIcon} alt="Icoon: niet aanwezig" className="icon"/>ambilight</li>
                        </ul>
                    </div>
                </article>
            </section>
            <section className="allTvsList">
                <h3>Alle TV merken</h3>
                <ul>
                    {inventory.map((tv) => {
                        return <li key={tv.type}>{tv.brand}</li>
                    })}
                </ul>
            </section>
            <section className="sortingButtons">
            <button type="button" onClick={sortBestSelling}>
                Meest verkocht eerst
            </button>
            <button type="button" onClick={sortCheapest}>
                Goedkoopste eerst
            </button>
            <button type="button" onClick={sortSport}>
                Meest geschikt voor sport eerst
            </button>
            </section>
    <section className="allTvs">
        <h3>Alle TVs</h3>
        {inventory.map((tv) => {
            return (
                <article className="productComponent" key={tv.type}>
                        <span className="productImage">
                                <img src={tv.sourceImg} alt="Afbeelding van het product"/>
                            </span>
                    <div className="productDetails">
                        <h2>{getTvName(tv)}</h2>
                        <h3>{getTvPrice(tv)}</h3>
                        <p>{getTvSizes(tv)}</p>
                        <ul className="tvSpecs">
                            {tv.options.map((option) => {
                                if (option.applicable === true) {
                                    return <li key={`${tv.type}-${option.name}`}>
                                        <img src={checkIcon} alt="Icoon: aanwezig"/>
                                        {option.name}
                                    </li>
                                } else {
                                    return <li key={`${tv.type}-${option.name}`}>
                                        <img src={minusIcon} alt="Icoon: niet aanwezig"/>
                                        {option.name}
                                    </li>
                                }
                            })}
                        </ul>
                    </div>
                </article>
            )
        })}
    </section>
</main>
)
}

export default App
