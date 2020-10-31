import React, { useEffect, useState } from 'react';
import { localApiBaseUrl } from '../config.contants';
import AddEmployee from './employee/AddEmployee';
import SearchEmployee from './employee/SearchEmployee';
import Loader from './Loader';

function CustomTable() {
    const [employees, setEmployees] = useState([]);
    const [showHide, setShowHide] = useState(false);

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = () => {
        const apiEndpoint = "employees";
        fetch(`${localApiBaseUrl}/${apiEndpoint}?_sort=maritalStatus&_order=asc`)
            .then(res => res.json())
            .then(data => {
                setEmployees(data);
                console.log(data);
            })
            .catch(error => console.log(error))
    }
    
    const showHideHandler=()=>{
        setShowHide(!showHide);
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
                                        <th>Full Name</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>Marital Status</th>
                                        <th>Qualification</th>
                                        <th>Location</th>
                                        <th>Designation</th>
                                        <th>Working Company</th>
                                        <th>Work Location</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employees.map(emp => (
                                            <tr key={emp.id}>
                                                <td>{emp.firstName + emp.lastName}</td>
                                                <td>{emp.age}</td>
                                                <td>{emp.gender}</td>
                                                <td>{emp.maritalStatus}</td>
                                                <td>{emp.qualification}</td>
                                                <td>{emp.location}</td>
                                                <td>{emp.designation}</td>
                                                <td>{emp.presentWorkingCompany}</td>
                                                <td>{emp.workLocation}</td>
                                                <td>
                                                    <ul className="list-unstyled d-flex mb-0">
                                                        <li>E</li>
                                                        <li>U</li>
                                                        <li>D</li>
                                                    </ul>
                                                </td>
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

export default CustomTable;
