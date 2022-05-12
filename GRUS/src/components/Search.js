import React, {useState} from 'react';

export default function Search() {
    const [value, setValue] = useState("");
    const [games, setGames] = useState([]);
    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSearch= () => {
        fetch("https://api.rawg.io/api/games?key=9650f2173fbc4d1cb9a0540381475cc4&search=" + value)
        .then(function (response) {return response.json() })
        .then((data) => {
            console.log(data)
            setGames(data.results)
        })
    }

    const addToCart = () => {
        alert("Add to cart done!")
        // add to cart functionality

    }

    return (
        <>
            <div className='Search-container'>
                <label>Search</label>
                <input type="text" value={value} onChange={onChange} />
                <button onClick={()=>{onSearch()}}> Search </button>
            </div>
            <div className="search-results">
                {
                    games.map((game) => {
                        return (
                            <div className="game-card">
                                <img src={game.background_image} className="game-img"/>
                                <h3 className="game-title">{game.name}</h3>
                                <button onClick={() => {addToCart()}}>Add to Cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}