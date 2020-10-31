import React, { useState } from 'react';

const SearchEmployee = () => {

    const [employeeFields, setEmployeeFields] = useState({
        "firstName": "",
        "lastName": "",
        "age": "",
        "dob": "",
        "gender": "",
        "maritalStatus": "",
        "qualification": "",
        "location": ""
    })

    const searchEmployeeHandler = () => {
        console.log("searchEmployeeHandler");
    }

    return (
        <div className="add-employee">
            <form action="" onSubmit={searchEmployeeHandler}>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" className="form-control" name={employeeFields.firstName} />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">Last Name</label>
                            <input type="text" className="form-control" name={employeeFields.lastName} />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">Age</label>
                            <input type="text" className="form-control" name={employeeFields.firstName} />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">Gender</label>
                            <select name={employeeFields.dob} id="age" className="form-control">
                                <option >Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">DOB</label>
                            <input type="date" className="form-control" name={employeeFields.dob} />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">Marital Status</label>
                            <select name={employeeFields.maritalStatus} id="maritalStatus" className="form-control">
                                <option >Select</option>
                                <option value="male">Single</option>
                                <option value="female">Married</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">Qualification</label>
                            <input type="text" className="form-control" name={employeeFields.qualification} />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">Location</label>
                            <input type="text" className="form-control" name={employeeFields.location} />
                        </div>
                    </div>

                </div>
                <div className="col-lg-12">
                    <div className="submit-btns text-right mb-3">
                        <button className="btn btn-info mr-2">Search</button>
                        <button className="btn btn-light">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchEmployee;
