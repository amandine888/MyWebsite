import React, { Component, useState  } from 'react';
import {withRouter} from 'react-router-dom';

// import CSS : 
import './../../../css/Mystyle.css'; 

// Material UI : 
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

// Style : 

const windowSearch = styled(FormControl)({
    width: '100%',
});

const logStyle = {
    // fontFamily: 'Open Sans, sans-serif',
    backgroundColor: 'white',
    fontWeight: '600',
    fontSize: '0.8em',
    border: '1px solid #1A1423',
    width: '90%',
}

const positionSearch = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
}

// Hook Component : 

export default function DialogSelect() {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        arrondissement: '',
        name: '',
    });

    const handleChange = event => {
        let name = event.target.name;
        let value = event.target.value; 
        setState({
            ...state,
            [name]: value,
        });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div style={positionSearch}>
            <Button onClick={handleClickOpen} style={logStyle}>Veuillez cliquer ici pour chercher une association</Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Choisissez votre filtre</DialogTitle>
                <DialogContent>
                    <form>
                        <windowSearch>
                            <TextField id="Nom" label="Nom" variant="outlined" />
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </windowSearch>
                    </form>
                    <div className='division'>
                        <div className='divisionLine'></div>
                        <p> ou</p>
                        <div className='divisionLine'></div>
                    </div>
                    <form>
                        <windowSearch>
                            <TextField id="Adresse" label="Adresse" variant="outlined" placeholder="Search Google Maps" inputProps={{ 'aria-label': 'search google maps' }}/>
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </windowSearch>
                    </form>
                    <div className='division'>
                        <div className='divisionLine'></div>
                        <p> ou</p>
                        <div className='divisionLine'></div>
                    </div>
                    <windowSearch variant="outlined">
                        <InputLabel id="demo-simple-select-outlined-label">Arrondissements</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={handleChange}
                        label="Arrondissement">
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={75001} name='75001'>75001</MenuItem>
                        <MenuItem value={75002} name='75002'>75002</MenuItem>
                        <MenuItem value={75003} name='75003'>75003</MenuItem>
                        <MenuItem value={75004} name='75004'>75004</MenuItem>
                        <MenuItem value={75005} name='75005'>75005</MenuItem>
                        <MenuItem value={75006} name='75006'>75006</MenuItem>
                        <MenuItem value={75007} name='75007'>75007</MenuItem>
                        <MenuItem value={75008} name='75008'>75008</MenuItem>
                        <MenuItem value={75009} name='75009'>75009</MenuItem>
                        <MenuItem value={75010} name='75010'>75010</MenuItem>
                        <MenuItem value={75011} name='75011'>75011</MenuItem>
                        <MenuItem value={75012} name='75012'>75012</MenuItem>
                        <MenuItem value={75013} name='75013'>75013</MenuItem>
                        <MenuItem value={75014} name='75014'>75014</MenuItem>
                        <MenuItem value={75015} name='75015'>75015</MenuItem>
                        <MenuItem value={75016} name='75016'>75016</MenuItem>
                        <MenuItem value={75017} name='75017'>75017</MenuItem>
                        <MenuItem value={75018} name='75018'>75018</MenuItem>
                        <MenuItem value={75019} name='75019'>75019</MenuItem>
                        <MenuItem value={75020} name='75020'>75020</MenuItem>
                        </Select>
                        <IconButton type="submit" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </windowSearch>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Fermer la fenêtre
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}


