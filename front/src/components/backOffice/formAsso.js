import React from 'react'
import { withRouter } from 'react-router-dom'

class FormAsso extends React.Component {

    constructor (props) {
        super (props); 


        this.state = {
            nameAsso: '', 
            adress : '', 
            category: '', 
            description: '', 
            tags: '',
        }

        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange = (e) => {
        this.setState({
            nameAsso: e.target.value, 
        })
    }


    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type='text' name='nameAsso' value={this.state.nameAsso} onChange={this.handleChange}></input>
                    <label>Adresse</label>
                    <input type='text' value={this.state.adress} onChange={this.handleChange}></input>
                    <label>Catégorie</label>
                    <input type='text'value={this.state.category} onChange={this.handleChange}></input>
                    <label>Description</label>
                    <input type='text' value={this.state.description} onChange={this.handleChange}></input>
                    <label>Tags</label>
                    <input type='text' value={this.state.tags} onChange={this.handleChange}></input>
                </form>
                <button type='submit'>Enregistrer</button>
            </div>
        )
    }
}

export default withRouter (FormAsso)
