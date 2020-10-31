import React, { useEffect, useState, useCallback } from 'react';
import { localApiBaseUrl, restCountriesApiBaseUrl } from '../config.contants';
import Loader from './Loader';

function SortableTable() {
    const [countries, setCountries] = useState([]);
    const [sortBy, setSortBy] = useState(null);
    const [isSorted, setIsSorted] = useState(false);
    const sortOrder = isSorted ? 'desc' : 'asc';

    const getCountries = useCallback(() => {
        const apiEndpoint = "countries";
        fetch(`${localApiBaseUrl}/${apiEndpoint}?_sort=${sortBy}&_order=${sortOrder}`)
            .then(res => res.json())
            .then(data => {
                setCountries(data);
                console.log(data);
            })
            .catch(error => console.log(error))
        console.log(`${restCountriesApiBaseUrl}`);
        console.log(`${localApiBaseUrl}/${apiEndpoint}`);
    }, [sortBy, sortOrder])

    useEffect(() => {
        getCountries();
    }, [getCountries]);

    const sortCountries = (sortKey) => {
        setSortBy(sortKey);
        setIsSorted(!isSorted);
    }

    const numberFormat = (number) => {
        return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number)
    }

    return (
        <div className="container-fluid">
            {
                countries.length > 0 ? (
                    <>
                        <h2>Regular Table</h2>
                        <div className="row m-0">
                            <table className="table table-bordered table-striped table-hover table-sm">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th className="th-sort" onClick={() => sortCountries("name")}>
                                            Name
                                            {sortBy === 'name' && <span><i className={(isSorted && sortBy === 'name') ? "fas fa-sort-amount-up" : "fas fa-sort-amount-down"}></i></span>}
                                        </th>
                                        <th className="th-sort" onClick={() => sortCountries("capital")}>
                                            Capital
                                            {sortBy === 'capital' && <span><i className={(isSorted && sortBy === 'capital') ? "fas fa-sort-amount-up" : "fas fa-sort-amount-down"}></i></span>}
                                        </th>
                                        <th className="th-sort" onClick={() => sortCountries("currencies")}>
                                            Currency
                                            {sortBy === 'currencies' && <span><i className={(isSorted && sortBy === 'currencies') ? "fas fa-sort-amount-up" : "fas fa-sort-amount-down"}></i></span>}
                                        </th>
                                        <th className="th-sort" onClick={() => sortCountries("region")}>
                                            Region
                                            {sortBy === 'region' && <span><i className={(isSorted && sortBy === 'region') ? "fas fa-sort-amount-up" : "fas fa-sort-amount-down"}></i></span>}
                                        </th>
                                        <th className="th-sort" onClick={() => sortCountries("population")}>
                                            Population
                                            {sortBy === 'population' && <span><i className={(isSorted && sortBy === 'population') ? "fas fa-sort-amount-up" : "fas fa-sort-amount-down"}></i></span>}
                                        </th>
                                        <th className="th-sort" onClick={() => sortCountries("timezones")}>
                                            Timezones
                                            {sortBy === 'timezones' && <span><i className={(isSorted && sortBy === 'timezones') ? "fas fa-sort-amount-up" : "fas fa-sort-amount-down"}></i></span>}
                                        </th>
                                        <th>Flag</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        countries.map((country, index) => (
                                            <tr key={country.name}>
                                                <td>{index + 1}</td>
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
                        </div>
                    </>
                ) : (<Loader loaderText="Loading Countries" />)
            }
        </div>
    )
}

export default SortableTable;
