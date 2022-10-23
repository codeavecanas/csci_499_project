import React from 'react';
import '../styles/SearchResultsCard.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SearchResultCard = () => {
    const data = require('/Users/Ivan/Desktop/car_4_u/frontend/src/components/cardata.json')
    const array = data.data;
    /*console.log(array);*/
    return (
        <div className='card-container'>
            {data.data.map((option) => (
                <Card className='card' key={option.index} value={option.carmake}>
                    <CardMedia
                        component="img"
                        alt="CAR IMAGE"
                        height="140"
                        image={option.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {option.carmake} {option.name}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            ${option.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <a href={option.link}>
                        <Button size="small">Learn More</Button>
                        </a>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

export default SearchResultCard;