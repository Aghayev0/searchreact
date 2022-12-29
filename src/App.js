import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  // axios
  //   .get('https://randomuser.me/api/?results=100')
  //   .then((res) => {
  //     setData(res.data.results)
  //     console.log(res.data.results);
  //     })
  //     .catch(() => {
  //       alert("API cokdu")
  //     })
  // }, [])
  // return (
  //   <div>
  //     <h1>Live user Filter</h1>
  //     <p>Search by username and location</p>
  //     <input placeholder='search'></input>
  //     <div className='salam'>
  //       {data.map((item) => {
  //         return <Data key={data.phone} item={item} />
  //       })}
  //     </div>
  //   </div>
  const [items, setItems] = useState([]);

  //     set search query to empty string
  const [q, setQ] = useState("");
  //     set search parameters
  //     we only what to search countries by capital and name
  //     this list can be longer if you want
  //     you can search countries even by their population
  // just add it to this array
  const [searchParam] = useState(["capital", "name"]);

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=100')
      .then((res) => {
        setItems(res.data.results)
        console.log(res.data.results);
      })
  }, []);
    return (
        <div className="wrapper">
            <div className="search-wrapper">
                <label htmlFor="search-form">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input"
                        placeholder="Search for..."
                        value={q}
                        /*
                        // set the value of our useState q
                        //  anytime the user types in the search box
                        */
                        onChange={(e) => setQ(e.target.value)}
                    />
                    <span className="sr-only">Search countries here</span>
                </label>
            </div>
            <ul className="card-grid">
                {items.map((item) => (
                    <li>
                        <article className="card" key={item.gender}>
                            <div className="card-image">
                                <img src={item.picture.thumbnail} alt={item.name.first} />
                            </div>
                            <div className="card-content">
                                <h2 className="card-name">{item.name.first}</h2>
                                <ol className="card-list">
                                    <li>
                                        population:{" "}
                                        <span>{item.city}</span>
                                    </li>
                                    <li>
                                        Region: <span>{item.state}</span>
                                    </li>
                                    <li>
                                        Capital: <span>{item.country}</span>
                                    </li>
                                </ol>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
