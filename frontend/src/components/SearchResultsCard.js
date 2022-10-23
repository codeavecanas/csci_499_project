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
                    <CardContent className='card-content'>
                        <Typography className='card-title' variant="h4">
                            {option.name}
                        </Typography>
                        <Typography className='card-info' variant="h5" color="text.secondary">
                            Price: ${option.price}
                        </Typography>
                    </CardContent>
                    <CardActions className='actions'>
                        <a href={option.link}>
                            <Button size="small">Go to site</Button>
                        </a>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

export default SearchResultCard;