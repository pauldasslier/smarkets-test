import { memo, FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import { SportEvent } from '../../../../interfaces';
import { INTL } from '../../../../intls';

const EventsItemDate: FC<{ start_date: SportEvent['start_date'] }> = ({ start_date }) => (
    <Box display="flex">
        <Typography color="primary">
            {INTL.DATE}
        </Typography>
        <Box width={8} />
        <Typography color="secondary">
            {start_date}
        </Typography>
    </Box>
);

export default memo(EventsItemDate)