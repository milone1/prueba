import { useState, useEffect } from "react";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { getMovies } from '../../service/firestore';


const Home = () => {
    const [movie, setMovies] = useState([]);

    const fetchMovies = async () => {
        const data = await getMovies();
        setMovies(data);
    }

    useEffect(()=> {
        fetchMovies();
    }, [])

    return (
        <>
            { movie.length >= 0 && 
              movie.map((mov) => (
                    <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="220"
                            image={`${mov.photo}`}
                            alt=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {mov.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {mov.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <a href={mov.url}>Ver</a>
                        </Button>
                    </CardActions>
                </Card>
              ))}
        </>
    );  
}

export default Home;