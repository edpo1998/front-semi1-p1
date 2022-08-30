import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PasswordIcon from '@mui/icons-material/Password';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import IconButton from '@mui/material/IconButton';

export default function RegistroUsuario() {
    return (
        <Card sx={{ maxWidth: 550, maxHeight: 950, marginX: 80, marginY: 2 }}>
            <CardMedia
                component="img"
                alt="super storage"
                height="310"
                image="/src/public/assets/images/logo_storage.jpeg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align='center'>
                    FORMULARIO DE REGISTRO
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Ingresa tus datos en el siguiente formulario para ser parte de este super almacenamiento.
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    Ingresa tu nombre:
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle color="primary" />
                    <TextField id="name" variant="standard" />
                </Box><br />
                <Typography variant="body1" color="text.secondary">
                    Ingresa tu usuario:
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <InsertEmoticonIcon color="primary" />
                    <TextField id="user" variant="standard" />
                </Box><br />
                <Typography variant="body1" color="text.secondary">
                    Ingresa tu contraseña:
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <PasswordIcon color="primary" />
                    <TextField id="pwd" variant="standard" type='password'/>
                </Box><br />
                <Typography variant="body1" color="text.secondary">
                    Confirma tu contraseña:
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <PasswordIcon color="primary" />
                    <TextField id="pwd_confir" type="password" variant="standard" />
                </Box><br />
                <Typography variant="body1" color="text.secondary">
                    Carga tu foto de perfil:
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <InsertPhotoIcon />
                    </IconButton>

                </Box>
            </CardContent>
            <CardActions>
                <Button size="medium">Registrar</Button>
                <Button size="medium">Cancelar</Button>
            </CardActions>
        </Card>
    );
}
