import React, { useEffect, useState } from 'react';
import { restCountriesApiBaseUrl } from '../config.contants';
import Loader from './Loader';
import '../components/pagination/Pagination.css';
import Pagination from './pagination/Pagination';

function RegularTable() {
    const [countries, setCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchKey, setSearchKey] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [filteredPageCount, setFilteredPageCount] = useState(0);
    const countriesPageCount = Math.ceil(countries.length/itemsPerPage);
    const finalResults = isFiltered ? filteredItems : countries;
    const finalPageCount = isFiltered ? filteredPageCount : countriesPageCount;;


    useEffect(() => {
        const getCountries = () => {
            fetch(`${restCountriesApiBaseUrl}`)
                .then(res => res.json())
                .then(data => {
                    setCountries(data);
                    // let pageCount = Math.ceil(data.length / itemsPerPage);
                    // setPageCount(pageCount);
                })
                .catch(error => console.log(error))
        }
        getCountries();
        logItems();
    }, []);

    
    // Get current page items
    const indexOfLastpage = currentPage * itemsPerPage;
    const indexOfFirstpage = indexOfLastpage - itemsPerPage;
    const currentItems = finalResults.slice(indexOfFirstpage, indexOfFirstpage + itemsPerPage);

    // paginateHandler
    const paginateHandler = (e, number) => {
        e.preventDefault();
        setCurrentPage(number);
    }
    // prevPageHandler
    const prevPageHandler = (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    // nextPageHandler
    const nextPageHandler = (e) => {
        e.preventDefault();
        if (currentPage < finalPageCount) {
            setCurrentPage(currentPage + 1);
        }
    }

    const setItemsAndPage=(selectedValue)=>{
        setItemsPerPage(parseInt(selectedValue));
        setCurrentPage(1);
        // searchCountriesHandler(e);
        console.log("selectedValue", selectedValue);

    }

    const itemsPerPageHandler = (e) => {
        const selectedValue = e.target.value;
        setItemsAndPage(selectedValue);
    }

    const searchCountriesHandler = (e) => {
        debugger;
        const searchKeyword = e.target.value;
        setSearchKey(searchKeyword);
        let searchedItems = countries.filter(item => {
            return item.name.toLowerCase().match(searchKey.toLowerCase());
        })
        setFilteredItems(searchedItems);
        let pageCount = Math.ceil(searchedItems.length / itemsPerPage);
        console.log("pageCount", pageCount);
        setFilteredPageCount(pageCount);
        if (searchKeyword !=="") {
            setIsFiltered(true);
        }
        else {
            setIsFiltered(false);
        }
        setItemsAndPage(itemsPerPage);
        console.log("searchKeyword", searchKeyword);
    }

    useEffect(()=>{
        searchCountriesHandler(e);
    }, [itemsPerPage]);


    const numberFormat = (number) => {
        return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number)
    }



  // console.log(test)
  const logItems = () => {
    // console.log("currentPage", currentPage);
    // console.log("itemsPerPage", itemsPerPage);
    // console.log("indexOfLastpage", indexOfLastpage);
    // console.log("currentItems", currentItems);
    // console.log("countries", countries[0]);
    // console.log("countries", countries[countries.length-1]);
    // console.log("pageCount", pageCount);
}

    return (
        <div className="container-fluid">
            {
                countries.length > 0 ? (
                    <>
                        {/* <h2>Regular Table</h2> */}
                        <div className="row">
                            <div className="section-title">
                                <div className="title float-left">
                                    <h2>Regular Table</h2>
                                </div>
                                <div className="search-field float-right">
                                    <label htmlFor="search">Search : </label>
                                    <input type="text" onChange={(e) => searchCountriesHandler(e)} />
                                </div>
                            </div>
                        </div>
                        <div className="row m-0">
                            <table className="table table-bordered table-striped table-hover table-sm">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Capital</th>
                                        <th>Currency</th>
                                        <th>Region</th>
                                        <th>Population</th>
                                        <th>Timezones</th>
                                        <th>Flag</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentItems.map((country, index) => (
                                            <tr key={country.name}>
                                                <td>{index + 1 + indexOfFirstpage}</td>
                                                <td>{country.name}</td>
                                                <td>{country.capital}</td>
                                                <td>{country.currencies[0].name}</td>
                                                <td>{country.region}</td>
                                                <td>{numberFormat(country.population)}</td>
                                                <td>{country.timezones[0]}</td>
                                                <td><img src={country.flag} alt={country.name} style={{ width: "50px" }} /></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <Pagination
                                // itemsPerPage={itemsPerPage}
                                // totalCountries={countries.length}
                                pageCount={finalPageCount}
                                paginate={paginateHandler}
                                prevPage={prevPageHandler}
                                nextPage={nextPageHandler}
                                currentPage={currentPage} />

                            <div className="selected-items">
                                <select name="itemsSelect" id="itemsSelect"
                                    className="form-control"
                                    onChange={(e) => itemsPerPageHandler(e)}>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                                {/* <input type="text" className="form-control" onChange={itemsPerPageHandler} /> */}
                            </div>
                        </div>
                    </>
                ) : (<Loader loaderText="Loading Countries" />)
            }
        </div>
    )
}

export default RegularTable;
