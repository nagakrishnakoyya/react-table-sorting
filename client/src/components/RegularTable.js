import React, { useEffect, useState } from 'react';
import { restCountriesApiBaseUrl } from '../config.contants';
import Loader from './Loader';
import '../components/pagination/Pagination.css';
import Pagination from './pagination/Pagination';

function RegularTable() {
    const [countries, setCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchKey, setSearchKey] = useState('');
    const [results, setResults] = useState(countries);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [pageCount, setPageCount] = useState(Math.ceil(results.length / itemsPerPage));
    const [tableMeta, updateTableMeta] = useState({
        indexOfFirstpage: 0,
        currentItems: [],
        indexOfLastpage: 1
    })

    const updateResults = (resultsArr) => {
        setResults(resultsArr);
        setCurrentPage(1);
        setPageCount(Math.ceil(resultsArr.length / itemsPerPage))
    }

    const updateItemsPerPage = (pageItemCount) => {
        setItemsPerPage(pageItemCount);
        setResults(results);
    }

    useEffect(() => {
        const getCountries = () => {
            fetch(`${restCountriesApiBaseUrl}`)
                .then(res => res.json())
                .then(data => {
                    setCountries(data);
                })
                .catch(error => console.log(error))
        }
        getCountries();
        logItems();
    }, []);

    useEffect(() => {
        console.log('into country update ')
        updateResults(countries);
    }, [countries.length])

    useEffect(() => {
        updateTableMeta(() => {
            const indexOfLastPage = currentPage * itemsPerPage;
            const indexOfFirstpage = indexOfLastPage - itemsPerPage;
            const currentItems = results.slice(indexOfFirstpage, indexOfFirstpage + itemsPerPage);
            return {
                indexOfFirstpage,
                indexOfLastPage,
                currentItems
            }
        })
        setPageCount(Math.ceil(results.length / itemsPerPage))
    }, [results, itemsPerPage, currentPage])

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
        if (currentPage < pageCount) {
            setCurrentPage(currentPage + 1);
        }
    }

    const itemsPerPageHandler = (e) => {
        const selectedValue = e.target.value;
        updateItemsPerPage(parseInt(selectedValue));
        updateResults(results);
    }

    const searchCountriesHandler = (e) => {
        const searchKeyword = e.target.value;
        setSearchKey(searchKeyword);
        let searchedItems = countries.filter(item => {
            return item.name.toLowerCase().match(searchKey.toLowerCase());
        })
        updateResults(searchedItems);
        console.log("searchKeyword", searchKeyword);
    }


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
                tableMeta.currentItems.length > 0 ? (
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
                                        tableMeta.currentItems.map((country, index) => (
                                            <tr key={country.name}>
                                                <td>{index + 1 + tableMeta.indexOfFirstpage}</td>
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
                                pageCount={pageCount}
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
