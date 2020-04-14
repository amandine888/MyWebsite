import React from 'react'
import { withRouter } from 'react-router-dom'

class FormEvent extends React.Component {

    constructor (props) {
        super (props); 


        this.state = {
            nameEvent: '', 
            dateEvent:'', 
            description: '', 
            location: '',
            tags: '',
        }

        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange = (e) => {
        this.setState({
            nameEvent: e.target.value, 
        })
    }


    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type='text' name='nameEvent' value={this.state.nameEvent} onChange={this.handleChange}></input>
                    <label>Date</label>
                    {/* <input type='text' value={this.state.adress} onChange={this.handleChange}></input> */}
                    <label>Description</label>
                    <input type='text' value={this.state.description} onChange={this.handleChange}></input>
                    <label>Location</label>
                    <input type='text' value={this.state.location} onChange={this.handleChange}></input>
                    <label>Tags</label>
                    <input type='text' value={this.state.tags} onChange={this.handleChange}></input>
                </form>
                <button type='submit'>Enregistrer</button>
            </div>
        )
    }
}

export default withRouter (FormEvent)