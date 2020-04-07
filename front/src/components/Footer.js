import React from 'react'; 
import {withRouter} from 'react-router-dom'; 
import './../mystyle.css';
import { styled } from '@material-ui/core/styles';
import {ThemeProvider, createMuiTheme,} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const theme = createMuiTheme({
    palette: {
        primary: { 
            main: '#1A1423',
        },
    },
});

const Newsletter = styled(TextField)({
    fontSize: '1.125em',
})

class Footer extends React.Component {
    
    render () {
        return (
            <div className="footerContainer">
                <div className="newsletter">
                <ThemeProvider theme={theme}>
                    <TextField label="Gardons Contact : " id="mui-theme-provider-standard-input"/>
                </ThemeProvider>
                </div>
                <div className="usefulInfo">    
                    <p>Qui suis-je ?</p>
                    <p>Contacts</p>
                </div>
            </div>
        )
    }
}

export default withRouter (Footer)
