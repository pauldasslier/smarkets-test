import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { SportEvents, SportEvent } from '../../interfaces';
import { Spinner, EmptyState } from '../../components';
import useFetching from '../../hooks/useFetching';
import { eventsAgent  } from '../../agents';
import { INTL } from '../../intls';
import EventsItem from './EventsItem/EventsItem';

const Events = () => {
    const [events, setEvents] = useState<SportEvent[]>([]);
    const { name } = useParams<{ name: SportEvents }>();

    const { loading, error, onRetry } = useFetching<SportEvent[]>({
        getData: useCallback((token) => eventsAgent.getPopularByName(name as SportEvents, token), [name]),
        onSuccess: (res) => setEvents(res),
        skipInitial: true,
    });

    useEffect(() => {
        onRetry();
    }, [name, onRetry]);

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

        if (!events.length) {
            return (
                <EmptyState
                    onRetry={onRetry}
                    title={INTL.EMPTY_EVENTS_TITLE}
                    description={INTL.EMPTY_EVENTS_DESCRIPTION}
                />
            );
        }

        return (
            <Box
                width={1}
                display="flex"
                flexDirection="column"
            >
                {events.map((event) => (
                    <EventsItem
                        event={event}
                        key={event.id} 
                    />
                ))}
            </Box>
        );
    }, [loading, error, events, onRetry]);

    return (
        <>
            {content}
        </>
    );
};

export default Events;