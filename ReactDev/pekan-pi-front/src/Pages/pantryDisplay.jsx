import React, {useState} from "react";
import axios from 'axios'
import { useEffect } from "react";
import Grid2 from '@mui/material/Unstable_Grid2';


function PantryDisplay(){
    const [pData, setPData] = useState([])

    const getPData = async () => {
        const token = JSON.parse(localStorage.getItem('udata')).token
        const UID = JSON.parse(localStorage.getItem('udata')).userId
        await axios({
            method: 'GET',
            url: 'http://localhost:3002/getPantry',
            headers: { Authorization : `token ${token}` },
            params: { UID: UID }
        })
        .then(res => {
            console.log(res.data[0].pantryInfo)
            return res.data[0].pantryInfo
        })
        .catch(err => {
            console.log(err)
            alert("Failed to get Pantry. Try again later.")
        })
    }

    useEffect(() => {
        setPData(getPData)
    }, [])


    return(
        <div>
            
        </div>
    )
}

export default PantryDisplay;