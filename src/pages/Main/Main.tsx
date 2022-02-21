import { Box, Typography } from '@material-ui/core';
import { INTL } from '../../intls';

const Main = () => {
    return (
        <Box component="section">
            <Typography color="primary" variant="h4" component="h1">
                {INTL.MAIN_TEXT}
            </Typography>
        </Box>
    );
};

export default Main;