import React, {useState} from "react";
import axios from "axios";

const tokenString = localStorage.getItem('id_token');

export { readAllLanguages, readAllLanguageCompetency,readAllLanguageFluency,readAllMyLanguages};

function readAllMyLanguages() {
    return Promise.resolve().then(() => {
        return  axios.get('http://localhost:3001/employees/me/languages', {
            headers: {
                Authorization: `Bearer ${tokenString}`,
            },

        })
            .then(response => {
                // setUserData(response.data);
                return(response.data.languages);
            })
            .catch((err) => {
                console.log('Unable access ...');
            });

    });
}
function readAllLanguages() {
    return Promise.resolve().then(() => {
        return  axios.get('http://localhost:3001/languages', {
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
function readAllLanguageFluency() {
    return Promise.resolve().then(() => {
        return  axios.get('http://localhost:3001/language_fluency', {
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
function readAllLanguageCompetency() {
    return Promise.resolve().then(() => {
        return  axios.get('http://localhost:3001/language_competencies', {
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