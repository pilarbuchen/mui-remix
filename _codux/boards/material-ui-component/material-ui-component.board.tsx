import { createBoard } from '@wixc3/react-board';
import { MaterialUIComponent } from '../../../src/components/material-ui-component/material-ui-component';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

export default createBoard({
    name: 'MaterialUIComponent',
    Board: () => (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <MaterialUIComponent />
        </StyledEngineProvider>
    ),
});
