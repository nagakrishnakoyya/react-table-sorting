import React, { useState } from 'react';

const AddEmployee = () => {
    const [employeeFields, setEmployeeFields] = useState({
        "firstName": "",
        "lastName": "",
        "surname": "",
        "age": "",
        "dob": "",
        "gender": "",
        "maritalStatus": "",
        "qualification": "",
        "location": "",
        "designation": "",
        "presentWorkingCompany": "",
        "workLocation": ""
    })
    const addEmployeeHandler = () => {
        console.log("addEmployeeHandler");
    }

    return (
        <div className="add-employee">
            <form action="" onSubmit={addEmployeeHandler}>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" className="form-control" name={employeeFields.firstName} placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" className="form-control" name={employeeFields.firstName} placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" className="form-control" name={employeeFields.firstName} placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" className="form-control" name={employeeFields.firstName} placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" className="form-control" name={employeeFields.firstName} placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" className="form-control" name={employeeFields.firstName} placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" className="form-control" name={employeeFields.firstName} placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" className="form-control" name={employeeFields.firstName} placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" className="form-control" name={employeeFields.firstName} placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" className="form-control" name={employeeFields.firstName} placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" className="form-control" name={employeeFields.firstName} placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" className="form-control" name={employeeFields.firstName} placeholder="First Name" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="submit-btns text-right mb-3">
                        <button className="btn btn-info mr-2">Add</button>
                        <button className="btn btn-light">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddEmployee;
