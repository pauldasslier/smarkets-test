import { FC } from 'react';
import { Grid, Box } from '@material-ui/core';
import ErrorBoundary from '../../containers/ErrorBoundary';
import Categories from '../../widgets/Categories';
import AppLayoutHeader from './AppLayoutHeader/AppLayoutHeader';

const AppLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box
            p={2}
            maxWidth={800}
            margin="0 auto"
        >
            <AppLayoutHeader />
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <ErrorBoundary>
                        <Categories />
                    </ErrorBoundary>
                </Grid>
                <Grid item xs={9}>
                    <ErrorBoundary>
                        {children}
                    </ErrorBoundary>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppLayout;