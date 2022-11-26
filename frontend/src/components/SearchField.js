import React, { useEffect, useState, useContext, createContext } from "react";
import "../styles/SearchField.css";

// Firebase imports
import { collection, query, where, getDocs } from "firebase/firestore";

// MUI imports
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import { CollectionContext } from "../App";

import { useNavigate } from "react-router";
import SearchResultsBody from "./SearchResultsBody";

// Create Context for results from search bar input
export const SearchResultsContext = createContext()

const SearchField = (props) => {
    // Initialize state
    const [search, setSearch] = useState('')
    const [value, setValue] = useState([])

    const navigate = useNavigate();

    // Set collectionRef to Collection Context from ./App
    const collectionRef = useContext(CollectionContext)

    // Query through Manucturers to match car with user input
    function findCar() {
        const q = query(collectionRef, where("Manufacturer", "==", search));

        const getQuerySnapshot = async () => {
            const querySnapshot = await getDocs(q);
            const answer = querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log("QUERY:", doc.id, " => ", doc.data());
            });
            if (querySnapshot.size != 0) {
                navigate("/search-results/", {
                    state: {
                        search: search
                    }
                })
            }
        };
        getQuerySnapshot();
    }

    // MENU OPTION CLICK
    const handleClick = (e) => {
        setValue(e.target.value)
        console.log(value)
    }

    // Variable to check for duplicates of Manufacturers
    const manuDuplicateCheck = []
    const yearDuplicateCheck = []

    // Sort manufacturer names in aphabetical order
    props.cars.sort((a,b) => a.Name.localeCompare(b.Name))
    //console.log("CARS ARRAY:", props.cars)

    return (
        <div className="selection-area">
            <div className="selectors">
                <div className="search-bar">
                    <input type="search" placeholder="Search for car" onChange={event => setSearch(event.target.value)}></input>
                    <Button onClick={() => findCar()} variant="contained">SEARCH</Button>
                </div>


                {/***** Manufacturer of car selector *****/}
                <TextField
                    id="make"  
                    select
                    label="Make"
                    //value={value}
                    //onChange={(e) => setValue(e.target.value)}
                    helperText="Make"
                    prop sx={{width: 120}}
                >
                    <div className="options">
                        {props.cars.map((car) => {
                            // Check for duplicates in Manufacturer
                            if (manuDuplicateCheck.includes(car.Manufacturer)) {
                                return null;
                            }
                            manuDuplicateCheck.push(car.Manufacturer);
                            
                            // Render option for each manufacturer in array
                            return (
                                <MenuItem className='menu-item' key={car.id}>
                                    {car.Manufacturer}
                                </MenuItem>
                            )
                        })}
                    </div>
                </TextField>
                        
                {/***** Model of car selector *****/}
                <TextField
                    id="model"  
                    select
                    label="Model"
                    //value={carMake}
                    //onChange={//handleMakeChange}
                    helperText="Model"
                    prop sx={{width: 120}}
                >
                    <div className="options">
                        {props.cars.map((car) => {
                            // Check for duplicates in Manufacturer
                            if (manuDuplicateCheck.includes(car.Manufacturer)) {
                                return null;
                            }
                            manuDuplicateCheck.push(car.Manufacturer);
                            
                            // Render card for each car in array
                            return (
                                <MenuItem className='menu-item' key={car.id}>
                                    {car.Manufacturer}
                                </MenuItem>
                            )
                        })}
                    </div>
                </TextField>
                


                {/***** Year of car selector *****/}
                <TextField
                    id="year"  
                    select
                    label="Year"
                    //value={carMake}
                    //onChange={//handleMakeChange}
                    helperText="Year"
                    prop sx={{width: 120}}
                >
                    <div className="options">
                        {props.cars.map((car) => {
                            // Check for duplicates in Manufacturer
                            if (yearDuplicateCheck.includes(car.Year)) {
                                return null;
                            }
                            yearDuplicateCheck.push(car.Year);
                            
                            // Render card for each car in array
                            return (
                                <MenuItem className='menu-item' key={car.id}>
                                    {car.Year}
                                </MenuItem>
                            )
                        })}
                    </div>
                </TextField>



                {/***** Price of car selector *****/}
                <TextField
                    id="price"  
                    select
                    label="Price"
                    //value={carMake}
                    //onChange={//handleMakeChange}
                    helperText="Price"
                    prop sx={{width: 120}}
                >
                    <Slider></Slider>
                </TextField>
            </div>
        </div>
    );
};

export default SearchField;