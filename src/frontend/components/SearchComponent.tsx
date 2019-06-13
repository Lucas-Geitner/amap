import { Search, Filter } from 'react-feather';
import * as React from "react"
import { Props } from '../../util/Props';

const SearchComponent: React.FunctionComponent<Props> = () => {
    return (
        <section className="bg-gray-800  px-4 py-3 justify-between flex">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                    <Search className="w-6 w-6 text-gray-600"/>
                </div>
                <input className="pl-6 bg-gray-900  text-gray-600 rounded-lg pl-12 pr-8 py-2 focus:outline-none  focus:bg-gray-200 focus:text-gray-800 " placeholder="Rechercher par emplacement" />
            </div>

            <button className="text-gray-400 inline-flex bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow px-2 py-2">
                    <Filter className="w-6 w-6 m-r-3 text-gray-500"/>
                    <span className="text-white font-medium ml-1">Filtres</span>
            </button>
        </section>
    )
}


export default SearchComponent
