import { useState, useEffect } from 'react';
import { getMovies, deleteMovie } from '../../service/firestore';
import { Button, Container, Table, TableBody, TableCell, TableHead, TableRow, Grid, TableContainer, Paper } from "@mui/material";
import swal from "sweetalert";


const MovieCrud = () => {

    const [movs, setMov] = useState([]);

    const fetchOtherMovies = async () => {
        const data = await getMovies();
        setMov(data);
    }

    const fetchDeleteMovie = async (id) => {
    const response = await swal({
            title: "¿Esta seguro de eliminar?",
            text: "Recuerda que una vez eliminado no hay vuelta atras",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        });
        if (response) {
            await deleteMovie(id);
            // despues de eliminar la pelicula debemos recargar la tabla
            // despues de elimniar la pelicula vamos a llamar a fetchMovies
            // para que basicamente actualice la tabla y muestro los datos actualizados
            await fetchOtherMovies();
          }
    }

    useEffect(() => {
        fetchOtherMovies();
    }, []);

    return (
        <Container>
            <Grid container spacing={3} mt={0}>
                <Grid item md={6}>
                    <h1>LISTA DE PELICULAS: </h1>
                </Grid>
                <Grid item md={6} sx={{ textAlign: "right" }}>
                    
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Titulo</TableCell>
                            <TableCell>Descripcion</TableCell>
                            <TableCell>Calificacion</TableCell>
                            <TableCell>Photo</TableCell>
                            <TableCell>Video Link</TableCell>
                            <TableCell>Botones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movs.length > 0 &&
                            movs.map((movie) => (
                                <TableRow>
                                    <TableCell> {movie.title}</TableCell>
                                    <TableCell>{movie.description}</TableCell>
                                    <TableCell>{movie.rate}</TableCell>
                                    <TableCell>
                                        <a href={`${movie.photo}`}>
                                            photo link
                                        </a>
                                    </TableCell>
                                    <TableCell>
                                        <a href={`${movie.url}`}>
                                            video link
                                        </a>
                                    </TableCell>
                                    <TableCell>
                                        <Button>lapiz</Button>
                                        <Button onClick={() => fetchDeleteMovie(movie.id)}>tacho</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default MovieCrud;