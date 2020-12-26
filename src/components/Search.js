import React from 'react'
import style from '../style/search.module.css'

const Search = ({searchResult, updateSearch, getSearch}) => {
    return (
        <div className={style.search}>
            <form className={style.searchForm} onSubmit={getSearch}>
                <input className={style.searchBar}
                       type='text'
                       value={searchResult}
                       onChange={updateSearch}/>
                <button className={style.searchBtn}
                        type='submit'
                >Search
                </button>
            </form>
        </div>
    )
}

export default Search