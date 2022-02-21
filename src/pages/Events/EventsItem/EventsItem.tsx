import { FC } from 'react';
import { Box, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { SportEvent } from '../../../interfaces';
import EventsItemDate from './EventsItemDate/EventsItemDate';

const EventsItem: FC<{ event: SportEvent }> = ({ event }) => (
    <Box
        p={1}
        width={1}
        border={1}
        borderRadius={4}
        bgcolor="background.default"
    >
        <Link
            variant="h6"
            color="primary"
            state={{ event }}
            underline="hover"
            component={RouterLink}
            to={`/event/${event.id}${event.full_slug}`}
        >
            {event.name}
        </Link>
        <Box display="flex">
            <EventsItemDate
                start_date={event.start_date}
            />
        </Box>
    </Box>
);

export default EventsItem;