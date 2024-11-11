import React from 'react';
import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const MaterialUIComponent: React.FC = () => (
    <ThemeProvider theme={theme}>
        <div className="container">
            <p className="myStyle">
                HELLO
            </p>
            <p className="myParagraph">
                This is a Material UI component.
            </p>
            <Button variant="contained">Click Me</Button>
        </div>
    </ThemeProvider>
);

export default MaterialUIComponent;
