import { PureComponent } from 'react';
import { Box, Typography } from '@material-ui/core';
import { INTL } from '../intls';

class ErrorBoundary extends PureComponent {
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    state = {
        hasError: false,
    };

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Box display="flex" justifyContent="center">
                    <Typography color="primary" variant="h5">
                        {INTL.SCRIPT_ERROR}
                    </Typography>
                </Box>
            );
        }

        return (
            <>
                {children}
            </>
        );
    }
}

export default ErrorBoundary;