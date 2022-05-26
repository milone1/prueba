import { useState } from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import { addMovie } from "../../service/firestore";
import swal from "sweetalert";

const CreateMovie = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    rate: "",
    photo: "",
    url: "",
  });

  // envienem el codigo de la funcion handleInputChange
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClickStore = async () => {
    await addMovie(values);

    swal({
      icon: "success",
      title: "Success",
      text: "Se creo correctamente",
    });
  };

  return (
    <Container>
      <Grid container spacing={3} mt={0}>
        <Grid item md={12}>
          <h4>Crear Producto</h4>
        </Grid>
        <Grid item md={6}>
          <TextField label="Nombre de la pelicula:" name="title" onChange={handleInputChange} fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Descripcion de la pelicula" name="description" onChange={handleInputChange} fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Aceptacion del publico" name="rate" onChange={handleInputChange} fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="URl del poster" name="photo" onChange={handleInputChange} fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Link del trailer" name="url" onChange={handleInputChange} fullWidth />
        </Grid>
        <Grid item md={12}>
          <Button onClick={handleClickStore} variant="contained">
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateMovie;