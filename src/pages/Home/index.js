import { useState, useEffect } from "react";
import '../../styles/home.css'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Grid, Container } from '@mui/material';

import { getMovies } from '../../service/firestore';
import ButtonAppBar from '../../components/title';



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
        <ButtonAppBar />
        <Container className="Container">
            <Grid container spacing = {10}>
                { movie.length >= 0 && 
                  movie.map((mov) => (
                      <Grid item md={4} lg={4} sm={12} xs={12}>
                          <Card sx={{ width: 300 }} className="card">
                                <CardMedia className="img-poster" component='img' image={`${mov.photo}`} />
                                <CardContent>
                                    <div className="header">
                                        <h4 className="titulo">{mov.title}</h4>
                                        <h2 className="rate">{mov.rate}</h2>
                                    </div>
                                    <p className="description">{mov.description}</p>
                                    <a href={mov.url} className="button">Ver Aqui</a>
                                </CardContent>
                            </Card>
                      </Grid>
                  ))}
            </Grid>
        </Container>
        </>
    );  
}

export default Home;