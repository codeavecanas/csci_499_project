import React, { useState } from "react";
import "../styles/SearchField.css";

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


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


function SearchField() {

    // Set state
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carMile, setCarMiles] = useState('');


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



    return (
        <div className="selection-area">
            <div>
                {/*Make of car selection*/}
                <TextField
                    id="make"
                    select
                    label="Make"
                    value={carMake}
                    onChange={handleMakeChange}
                    helperText="Car manufacturer"
                >
                    {carMakes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>

            {/*Model of car selection*/}
            <TextField
                className="model-selection"
                select
                label="Model"
                value={carModel}
                onChange={handleModelChange}
                helperText="Car model"
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
                helperText="Miles of car"
            >
                {carMiles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>


        </div>
    );
};

export default SearchField;