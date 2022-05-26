import { useState, useEffect } from 'react';
import { getMovies } from '../../service/firestore';
import { Link } from "react-router-dom";
import { Button, Container, Table, TableBody, TableCell, TableHead, TableRow, Grid } from "@mui/material";


const MovieCrud = () => {
    
    const [movs, setMov] = useState([]);

    const fetchOtherMovies = async () => {
        const data = await getMovies();
        setMov(data);
    }

    useEffect(() => {
        fetchOtherMovies();
      }, []);

    return(
        <Container>
        <Grid container spacing={3} mt={5}>
            <Grid item md={6}>
            <h4>Lista de Peliculas</h4>
            </Grid>
            <Grid item md={6} sx={{ textAlign: "right" }}>
            
            </Grid>
        </Grid>
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Titulo</TableCell>
                    <TableCell align="right">ID </TableCell>
                    <TableCell align="right">Descripcion</TableCell>
                    <TableCell align="right">Calificacion</TableCell>
                    <TableCell align="right">Photo</TableCell>
                    <TableCell align="right">Video Link</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {movs.length > 0 &&
                 movs.map((movie) => (
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row"> {movie.title}</TableCell>
                    <TableCell align="right">{movie.movie_id}</TableCell>
                    <TableCell align="right">{movie.description}</TableCell>
                    <TableCell align="right">{movie.rate}</TableCell>
                    <TableCell align="right">{movie.photo}</TableCell>
                    <TableCell align="right">{movie.url}</TableCell>
                  </TableRow>
                 ))}
            </TableBody>
            </Table>
        </Container> 
    );
}

export default MovieCrud;