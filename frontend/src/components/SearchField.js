import React, { useState } from "react";
import "../styles/SearchField.css";

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

const carMakes = [
    {
        value: 'Ford',
        label: 'Ford',
    },
    {
        value: 'Honda',
        label: 'Honda',
    },
    {
        value: 'Nissan',
        label: 'Nissan',
    }
];

const carModels = [
    {
      value: 'Mustang',
      label: 'Mustang',
    },
    {
      value: 'Fusion',
      label: 'Fusion',
    },
];

const carMiles = [
    {
      value: 'Low',
      label: '0-50,000',
    },
    {
      value: 'Medium',
      label: '50,000 - 90,000',
    },
    {
      value: 'High',
      label: '100,000+',
    },
];

const carYears = [
    {
      value: '2020',
      label: '2020',
    },
    {
      value: '2021',
      label: '2021',
    },
    {
      value: '2022',
      label: '2022',
    },
];

const carPrices= [
    {
        value: '100',
        label: '100'
    },
];


function SearchField() {

    // Set state
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carMile, setCarMiles] = useState('');
    const [carYear, setCarYear] = useState('');
    const [carPrice, setCarPrice] = useState('');
    const [priceSlider, setPriceSlider] = useState([0, 100]);


    // Change state of carMake
    const handleMakeChange = (event) => {
        setCarMake(event.target.value);
    };

    // Change state of carModel
    const handleModelChange = (event) => {
        setCarModel(event.target.value);
    };

    // Change state of carModel
    const handleMilesChange = (event) => {
        setCarMiles(event.target.value);
    };

    // Change state of carYear
    const handleYearChange = (event) => {
        setCarYear(event.target.value);
    };

    // Change state of carYear
    const handlePriceChange = (event) => {
        setCarPrice(event.target.value);
    };

    // Change state of carYear
    const handlePriceSliderChange = (event) => {
        setPriceSlider(event.target.value);
    };

    return (
        <div className="selection-area">
            <div className="selectors">
                {/*Make of car selection*/}
                <TextField
                    id="make"  
                    select
                    label="Make"
                    value={carMake}
                    onChange={handleMakeChange}
                    helperText="Manufacturer"
                    prop sx={{width: 120}}
                >
                    {carMakes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                {/*Model of car selection*/}
                <TextField
                    id="model"
                    select
                    label="Model"
                    value={carModel}
                    onChange={handleModelChange}
                    helperText="Car model"
                    prop sx={{width: 100}}
                >
                    {carModels.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                {/*Miles of car selection*/}
                <TextField
                    id="miles"
                    select
                    label="Miles"
                    value={carMile}
                    onChange={handleMilesChange}
                    helperText="Miles"
                    prop sx={{width: 100}}
                >
                    {carMiles.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                {/*Year of car selection*/}
                <TextField
                    id="year"
                    select
                    label="Year"
                    value={carYear}
                    onChange={handleYearChange}
                    helperText="Year"
                    prop sx={{width: 100}}
                >
                    {carYears.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                {/*Price of car selection*/}
                <TextField
                    id="price"
                    select
                    label="Price"
                    value={carPrice}
                    onChange={handlePriceChange}
                    helperText="Price"
                    prop sx={{width: 100}}
                >
                    {/*PRICE SLIDER*/}
                    <div className="slider-container">
                        <h4 id='h4'>PRICE RANGE</h4>
                        <div className='priceInputField'>
                            <input className='minPrice' type="text" placeholder="$0"></input>
                            <input className='maxPrice' type="text" placeholder="$100,000"></input>
                        </div>
                        <div className='slider'>
                            <Slider
                                size="small"
                                defaultValue={0}
                            />
                        </div>
                    </div>
                </TextField>
            </div>
        </div>
    );
};

export default SearchField;