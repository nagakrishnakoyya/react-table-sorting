import React, { useEffect, useState } from 'react';
import { restCountriesApiBaseUrl } from '../config.contants';
import AddEmployee from './employee/AddEmployee';
import SearchEmployee from './employee/SearchEmployee';
import Loader from './Loader';

function InfinityScroll() {
    const [employees, setEmployees] = useState([]);
    const [showHide, setShowHide] = useState(false);

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = () => {
        fetch(`${restCountriesApiBaseUrl}`)
            .then(res => res.json())
            .then(data => {
                setEmployees(data);
            })
            .catch(error => console.log(error))
    }
    
    const showHideHandler=()=>{
        setShowHide(!showHide);
    }

    const numberFormat = (number) => {
        return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number)
    }

    return (
        <div className="container-fluid">
            {
                employees.length > 0 ? (
                    <>
                        <h2>Custom Table</h2>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="new-employee">
                                    <div className="section-title">
                                        <div className="title float-left">
                                            <h3>{showHide ? "Add Employee" : "Search Employee"}</h3>
                                        </div>
                                        <div className="show-hide-btns float-right">
                                            {
                                                showHide ? (<button className="btn btn-info" onClick={showHideHandler}>Add Employee</button>)
                                                    : (<button className="btn btn-info" onClick={showHideHandler}>Search Employee</button>)
                                            }
                                        </div>
                                    </div>
                                    {
                                        showHide ? <AddEmployee /> : <SearchEmployee />
                                    }
                                    
                                    
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
                                        employees.map((country,index) => (
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
                ) : (<Loader loaderText="Loading Employees" />)
            }

        </div>
    )
}

export default InfinityScroll;
