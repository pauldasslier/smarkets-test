import { memo } from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { INTL } from '../../../intls';

const AppLayoutHeader = () => (
    <Box component="header">
        <Box display="flex">
            <Link to="/" underline="none" component={RouterLink}>
                <Typography variant="h5" color="primary">
                    {INTL.COMPANY_NAME}
                </Typography>
            </Link>
        </Box>
    </Box>
);

export default memo(AppLayoutHeader);