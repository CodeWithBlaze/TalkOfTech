import '../css/searchbar.css';
function Searchbar({onchange,onSearch}){
    return <div className="search-container">
        <input className="searchbar-input" placeholder="search anything" onChange={text=>onchange(text.target.value)}></input>
        <button className="search-button" onClick={()=>{onSearch()}}><i className="fa fa-search fa-lg" aria-hidden="true"></i></button>
    </div>
}
export default Searchbar;