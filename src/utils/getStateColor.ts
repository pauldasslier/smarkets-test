import { SportEventState } from '../interfaces';

type TypographyColors = 'primary' | 'secondary' | 'error';

const stateColors: Record<SportEventState, TypographyColors> = Object.freeze({
    upcoming: 'primary',
    live: 'secondary',
    ended: 'error',
});

export const getStateColor = (state: SportEventState): TypographyColors => {
    if (state in stateColors) {
        return stateColors[state];
    }

    return 'primary';
};