import { ThemeProvider, createTheme } from '@mui/material';

import Form from './Form';
import '../../index.css';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto Mono, monospace',
    },
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: 'rgb(90,0,10)',
        },
        white: {
            main: '#FFF'
        },
        blue: {
            main: 'rgb(0,0,200)'
        },
        green: {
            main: 'rgb(0,200,0)'
        }
    },
});

const Template = (args) => <ThemeProvider theme={theme} ><Form {...args} /></ThemeProvider>;

// eslint-disable-next-line
export default {
    title: 'Form',
    component: Template,
    argTypes: {
        color: {
            type: 'string',
            options: ['primary', 'secondary', 'white', 'blue', 'green'],
            control: {
                type: 'inline-radio'
            }
        },
    }
};

export const Authorization = {
    args: {
        buttonText: 'Log in',
        firstPlaceholder: 'Login',
        secondPlaceholder: 'Password'

    }
};

export const Registration = {
    args: {
        buttonText: 'Sign Up',
        firstPlaceholder: 'Email',
        secondPlaceholder: 'Password'
    }
};