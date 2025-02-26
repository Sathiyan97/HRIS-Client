import React, {useState} from "react";
import axios from "axios";

const tokenString = localStorage.getItem('id_token');

export { readAllSkills, readAllMySkills,readAllEmpSkills};

function readAllMySkills() {
    return Promise.resolve().then(() => {
        return  axios.get('http://localhost:3001/employees/me/skills', {
            headers: {
                Authorization: `Bearer ${tokenString}`,
            },

        })
            .then(response => {
                // setUserData(response.data);
                return(response.data.skills);
            })
            .catch((err) => {
                console.log('Unable access ...');
            });

    });
}
function readAllSkills() {
    return Promise.resolve().then(() => {
        return  axios.get('http://localhost:3001/skills', {
            headers: {
                Authorization: `Bearer ${tokenString}`,
            },

        })
            .then(response => {
                // setUserData(response.data);
                return(response.data);
            })
            .catch((err) => {
                console.log('Unable access ...');
            });

    });
}
function readAllEmpSkills(props) {
    console.log(props.props)
    let empID= props.props
    return Promise.resolve().then(() => {
        console.log(tokenString)
        return  axios.get('http://localhost:3001/employees/'+empID+'/skills/', {
            headers: {
                Authorization: `Bearer ${tokenString}`,
            },

        })
            .then(response => {
                // setUserData(response.data);
                console.log("hello")
                return(response.data.skills);
            })
            .catch((err) => {
                console.log('Unable access ...');
            });

    });
}