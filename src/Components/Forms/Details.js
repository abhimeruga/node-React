import React, { useState } from 'react'
import './Details.css'

function Details() {
    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        phone_no: '',
        summary: '',
        accepted: false,
        errorFirstName: '',
        errorLastName: '',
        errorPhone_no: '',
        errorSummary: '',
    })

    const validity = (e) => {
        
        if (details.firstName.length <= 0) setDetails({...details, errorFirstName:'Cannot be nill'});
        if(details.firstName.length > 10) setDetails({...details, errorFirstName:'maximum allowed 10 digits'});

        if(details.lastName.length <= 0) setDetails({...details, errorLastName:'Cannot be nill'});
        if(details.lastName.length > 10) setDetails({...details, errorLastName:'maximum allowed 10 digits'});

        if(details.phone_no.length <= 0) setDetails({...details, errorPhone_no:'Cannot be nill'});
        if(details.phone_no.length > 10) setDetails({...details, errorPhone_no:'maximum allowed 10 digits'});

        if(details.summary.length <= 0) setDetails({...details, errorSummary:'Cannot be nill'});
        if(details.summary.length > 10) setDetails({...details, errorSummary:'maximum allowed 10 digits'});
        console.log(details)
        e.preventDefault();
        
    
    }
    return (
        <div className="container form-style">
            <h2>Form Validation</h2>
            <form className="" onSubmit={validity}>
                <div className="form-group">
                    <input type="text" placeholder="First Name" className="form-control" value={details.firstName}
                        onChange={(e) => setDetails({ ...details, firstName: e.target.value })} />
                             <small>{details.errorFirstName}</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Last Name" className="form-control" value={details.lastName}
                        onChange={(e) => setDetails({ ...details, lastName: e.target.value })} />
                        <small>{details.errorLastName}</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Phone Number" className="form-control" value={details.phone_no}
                        onChange={(e) => setDetails({ ...details, phone_no: e.target.value })} />
                        <small>{details.errorPhone_no}</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Summary" className="form-control" value={details.summary}
                        onChange={(e) => setDetails({ ...details, summary: e.target.value })} />
                        <small>{details.errorSummary}</small>
                </div>
                <div className="form-group from-check">
                    <label htmlFor="accept"> Accepted </label>
                    <input type="checkbox" className="form-control" value={details.accepted}
                        onChange={(e) => setDetails({ ...details, accepted: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary">Sumbit</button>
            </form>

        </div>
    )
}

export default Details
