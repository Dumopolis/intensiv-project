import { ThemeProvider, createTheme } from '@mui/material/styles';

import Footer from './Footer';
import '../../index.css';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto Mono, monospace',
    },
    palette: {
        primary: {
            main: '#000',
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

const Template = (args) => <ThemeProvider theme={theme} ><Footer {...args} /></ThemeProvider>;

// eslint-disable-next-line
export default {
    title: 'Footer',
    component: Template,
    argTypes: {
        color: {
            type: 'string',
            options: ['primary', 'white', 'blue', 'green'],
            control: {
                type: 'inline-radio'
            }
        },
        iconColor: {
            type: 'string',
            options: ['primary', 'white', 'blue', 'green'],
            control: {
                type: 'inline-radio'
            }
        },
        showGitHubIcon: {
            control: 'boolean'
        },
        showLinkedInIcon: {
            control: 'boolean'
        },
        showTelegramIcon: {
            control: 'boolean'
        },
    }
};



export const Dark = {
    args: {
        color: 'primary',
        iconColor: 'white',
        showGitHubIcon: true,
        showLinkedInIcon: false,
        showTelegramIcon: true
    }
};

export const Light = {
    args: {
        color: 'white',
        iconColor: 'primary',
        showGitHubIcon: true,
        showLinkedInIcon: true,
        showTelegramIcon: true
    }
};
