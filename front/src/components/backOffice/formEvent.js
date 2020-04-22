import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

// import CSS : 
import './../../Mystyle.css'; 
import './../backOffice/styleBackOffice.css'; 

// Material UI : 
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';

// CSS : 

const ButtonSave = styled(Button)({
    backgroundColor: '#6A9CFD',
})

class FormEvent extends React.Component {

    constructor (props) {
        super (props); 


        this.state = {
            nameEvent: '',
            dateEvent: '', 
            description: '', 
            address : '', 
            category: '', 
        }

        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange = (e) => {

        let ref = e.target.name; 
        let value = e.target.value; 

        this.setState({
            [ref] : value, 
        })
    }


    render() {
        return (
            <div>
                <div className="formStyle">
                    <TextField id="outlined-basic" label="Nom" variant="outlined" name="nameEvent" value= {this.state.nameEvent} onChange={this.handleChange} />
                    <TextField id="outlined-basic" type="date" variant="outlined" name="dateEvent" value= {this.state.dateEvent} onChange={this.handleChange} />
                    <TextField id="outlined-textarea" label="Description" variant="outlined" multiline name="description" value= {this.state.description} onChange={this.handleChange} />
                    <TextField id="outlined-basic" label="Adresse" variant="outlined" name="address" value= {this.state.address} onChange={this.handleChange} />
                    <ButtonSave variant="contained" startIcon={<SaveIcon />}>Enregistrer</ButtonSave>
                </div>
            </div>
        )
    }
}

export default withRouter (FormEvent)