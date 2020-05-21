import React, {useState, useEffect} from 'react'; 

// Import CSS : 
import './../css/styleAsso.css';

// Material UI : 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

// Style Material UI : 
import { styled } from '@material-ui/core/styles';

const TagForm = styled( FormControl)({
    width: '95%', 
    height: '20vh',
}); 

const LabelStyle = styled(InputLabel)({
    marginLeft: '45vw',
})

const ContainerStyle = styled(Select)({
    width: '100%', 
    height: '10vh',
})


const tagList = [
    {id: '', libelle: '', }
]

export default function SelectTags () {

    const [tag] = useState ()

    return (

        <div>
            <div className='selectContainer'>
                <TagForm>
                    <LabelStyle id="demo-mutiple-checkbox-label">Tags</LabelStyle>
                    <ContainerStyle labelId="demo-mutiple-checkbox-label" id="demo-mutiple-checkbox">
                    {tagList.map((tags) => (
                        <MenuItem>
                        <Checkbox />
                        <ListItemText/>
                        </MenuItem>
                    ))}
                    </ContainerStyle>
                </TagForm>
            </div>
        </div>
    )
};