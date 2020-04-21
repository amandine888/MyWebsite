import React from 'react';
import { withRouter } from 'react-router-dom'; 
import FormAsso from './formAsso'; 

// import CSS : 
import './../../Mystyle.css'; 
import './../backOffice/styleBackOffice.css'; 

// Material UI : 
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

// CSS : 

const ButtonSup = styled(Button)({
    backgroundColor: '#FFB8D0',
})

const ButtonAdd = styled(Button)({
    backgroundColor: '#AEE4FF',
})

class AssoOffice extends React.Component {

    constructor (props) {
        super (props); 

        this.state = {
            formAsso : '',  
        }

        this.showFormAsso = this.showFormAsso.bind(this); 
        this.removeFormAsso = this.removeFormAsso.bind (this); 
    }

    showFormAsso (e) {
        this.setState ({
            formAsso: true, 
        }); 
    }

    removeFormAsso (e) {
        this.setState ({
            formAsso: false, 
        }); 
    }


    render () {
        if (this.state.formAsso === true) {
            return (
                <div>
                    <div className="subtitleContainer">
                        <h2>Gérer les associations</h2>
                        <ButtonAdd
                            variant="contained"
                            startIcon={<AddCircleIcon/>} onClick={this.removeFormAsso}>
                            Ajouter
                        </ButtonAdd>
                        <ButtonSup
                            variant="contained"
                            startIcon={<DeleteIcon />}>
                            Supprimer
                        </ButtonSup>
                    </div>
                    <FormAsso/>
                </div>
            ); 
        }
        else {
            return (
                <div>
                    <div className="subtitleContainer">
                        <h2>Gérer les associations</h2>
                        <ButtonAdd
                            variant="contained"
                            startIcon={<AddCircleIcon/>} onClick={this.showFormAsso}>
                            Ajouter
                        </ButtonAdd>
                        <ButtonSup
                            variant="contained"
                            startIcon={<DeleteIcon />}>
                            Supprimer
                        </ButtonSup>
                    </div>
                </div>
            )
        }; 
    }
}

export default withRouter (AssoOffice); 