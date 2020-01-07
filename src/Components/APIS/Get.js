import React, { useEffect, useState, useReducer } from 'react'
import axios from 'axios';

function Get() {
    const initialState = {};
    const [get, setGetData] = useState({});
    const reducer = (state, action) => {
        switch (action.type) {
            case "getEmployee": {
                axios.get("http://localhost:4000/employee").then(res => {
                    return res.data
                }).catch(
                    error => {
                        throw error;
                    }
                )
            }
                break;
            case "getProfile": {
                axios.get("http://localhost:4000/profile").then(res => {
                    return res.data
                }).catch(
                    error => {
                        throw error;
                    }
                )
            }
                break;
            case "addEmployee": {
                axios.post("http://localhost:4000/add/employee").then(res => {
                    return res.data
                }).catch(
                    error => {
                        throw error;
                    }
                )
            }
                break;
            default:
                return state;

        }
    }
    useEffect(() => {
        axios.get("http://localhost:4000/").then(res => {
            setGetData(res.data);
            console.log(res);
        }).
            catch(err => {
                console.log(err)
            })
    }, [])
    const [action, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <hr />
            <h2 className="bg-secondary">Node + react</h2>
            <h4 className="bg-primary">{get.name}</h4>
            <button className="btn btn-warning" onClick={() => dispatch({ type: "getEmployee" })}>Get Employee</button>
            <br /><br /><button className="btn btn-danger" onClick={() => dispatch({ type: "getProfile" })}>Get Profile</button>
            <br /><br /><button className="btn btn-info" onClick={() => dispatch({ type: "addEmployee" })}>Add employee</button>
            <br /><br /></div>
    )
}

export default Get
