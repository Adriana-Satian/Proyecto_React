import '../css/Search.css';
function Search({ searchValue, setSearchValue }) {
    return (
        <input
            className="TodoSearch"
            placeholder=" Buscar la tarea"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { Search };