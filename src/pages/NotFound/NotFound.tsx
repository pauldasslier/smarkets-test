import { Box, Typography } from '@material-ui/core';
import { INTL } from '../../intls';

const NotFound = () => (
    <Box component="section">
        <Typography color="primary" variant="h4" component="h1">
            {INTL.PAGE_NOT_FOUND}
        </Typography>
    </Box>
);

export default NotFound;