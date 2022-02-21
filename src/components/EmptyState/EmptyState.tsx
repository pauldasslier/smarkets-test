import { Box, Typography, Button } from '@material-ui/core';
import { FC } from 'react';

type EmptyStateProps = {
    onRetry?: () => void;
    description?: string;
    title?: string;
}

const EmptyState: FC<EmptyStateProps> = ({ onRetry, title, description }) => (
    <Box display="flex" justifyContent="center">
        <Box
            maxWidth={300}
            display="flex"
            textAlign="center"
            alignItems="center"
            flexDirection="column"
        >
            {title && (
                <Typography color="primary" variant="h6">
                    {title}
                </Typography>
            )}
            {description && (
                <Typography
                    variant="body1"
                    color="primary"
                >
                    {description}
                </Typography>
            )}
            {onRetry && (
                <Box mt={2}>
                    <Button variant="contained" onClick={onRetry}>
                        <Typography color="secondary">
                            Try again
                        </Typography>
                    </Button>
                </Box>
            )}
        </Box>
    </Box>
);

export default EmptyState;