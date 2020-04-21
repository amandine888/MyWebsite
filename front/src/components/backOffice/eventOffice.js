import React from 'react';
import { withRouter } from 'react-router-dom'; 
import FormEvent from './formEvent'; 

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

class EventOffice extends React.Component {

    constructor (props) {
        super (props); 

        this.state = {  
            formEvent : '', 
        }

        this.showFormEvent = this.showFormEvent.bind(this); 
        this.removeFormEvent = this.removeFormEvent.bind (this); 
    }

    showFormEvent (e) {
        this.setState ({
            formEvent: true, 
        }); 
    }

    removeFormEvent (e) {
        this.setState ({
            formEvent: false, 
        }); 
    }


    render () {
        if (this.state.formEvent === true) {
            return (
                <div>
                    <div className="subtitleContainer">
                        <h2>Gérer les événements</h2>
                        <ButtonAdd
                            variant="contained"
                            startIcon={<AddCircleIcon/>} onClick={this.removeFormEvent}>
                            Ajouter
                        </ButtonAdd>
                        <ButtonSup
                            variant="contained"
                            startIcon={<DeleteIcon />}>
                            Supprimer
                        </ButtonSup>
                    </div>
                    <FormEvent/>
                </div>
            ); 
        }
        else {
            return (
                <div>
                    <div className="subtitleContainer">
                        <h2>Gérer les événements</h2>
                        <ButtonAdd
                            variant="contained"
                            startIcon={<AddCircleIcon/>} onClick={this.showFormEvent}>
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

export default withRouter (EventOffice); 