import { useContext } from 'react'
import { GrFormSearch } from "react-icons/gr";
import MainContext from '../context/MainContext'

const Search = () => {
    const { search, setSearch } = useContext(MainContext)

    return (
        <div className="search">
            <div className="icon"> <GrFormSearch /></div>
            <input type="text" onChange={(e) => { setSearch(e.target.value) }} placeholder="Search brands" />
        </div>
    )
}

export default Search