import { useState, useMemo, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import { getUTCFormattedDate } from '../../utils/getUTCFormattedDate';
import { getStateColor } from '../../utils/getStateColor';
import { Spinner, EmptyState } from '../../components';
import useFetching from '../../hooks/useFetching';
import { SportEvent } from '../../interfaces';
import { eventsAgent } from '../../agents';
import { INTL } from '../../intls';

const Event = () => {
    const { id } = useParams();
    const location = useLocation();
    const state = location.state as { event?: SportEvent };
    const [event, setEvent] = useState<SportEvent | undefined>(state?.event);

    const { loading, error, onRetry } = useFetching<AxiosResponse<{
        events: SportEvent[];
    }>>({
        getData: useCallback((token) => eventsAgent.getById(id as string, token), [id]),
        onSuccess: ({ data }) => setEvent(data.events[0]),
        skipInitial: !!state?.event,
    });

    const content = useMemo(() => {
        if (loading) {
            return (
                <Spinner />
            );
        }

        if (error) {
            return (
                <EmptyState
                    onRetry={onRetry}
                    title={INTL.LOAD_ERROR_TITLE}
                    description={INTL.LOAD_ERROR_DESCRIPTION}
                />
            );
        }

        if (event) {
            return (
                <Box>
                    <Box 
                        display="flex"
                        flexWrap="nowrap"
                        justifyContent="space-between"
                    >
                        <Typography
                            variant="h6"
                            component="h1"
                            color="primary"
                        >
                            {event.name}
                        </Typography>
                        <Box
                            px={1}
                            ml={0.5}
                            display="flex"
                            alignItems="center"
                            bgcolor="background.default"
                        >
                            <Typography
                                variant="caption" 
                                color={getStateColor(event.state)}
                            >
                                {event.state.toUpperCase()}
                            </Typography>
                        </Box>
                    </Box>
                    <Typography color="primary">
                        {INTL.START_TIME} {getUTCFormattedDate(event.start_datetime)}
                    </Typography>
                </Box>
            );
        }

        return null;
    }, [loading, error, event, onRetry]);

    return (
        <div>
            {content}
        </div>
    );
};

export default Event;