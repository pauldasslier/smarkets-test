import { Box, CircularProgress, Typography } from '@material-ui/core';
import { INTL } from '../../intls';

const Spinner = () => (
    <Box
        width={1}
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
    >
        <Typography 
            color="primary"
            variant="caption"
        >
            {INTL.LOADING}
        </Typography>
        <Box mt={1}>
            <CircularProgress
                size={40}
                color="primary"
            />
        </Box>
    </Box>
);

export default Spinner;