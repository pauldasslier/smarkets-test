import axios, { AxiosPromise, CancelToken } from 'axios';
import { SportEvent, SportEvents } from '../interfaces';

type PopularEventsIdsResponse = AxiosPromise<{ popular_event_ids: string[] }>;

const getById = (id: string | number, token: CancelToken): AxiosPromise<{ events: SportEvent[] }> => axios({
    method: 'GET',
    url: `events/${id}/`,
    cancelToken: token,
});

const getPopularIdsByName = (name: SportEvents, token: CancelToken): PopularEventsIdsResponse => axios({
    method: 'GET',
    url: `/popular/event_ids/sport/${name}/`,
    cancelToken: token,
});

const getMappedPopularEvents = (ids: string[], token: CancelToken) => Promise.all([
    ...ids.map((id) => getById(id, token))
]).then((arr) => arr.map((res) => res.data.events[0]));

const getPopularByName = (name: SportEvents, token: CancelToken) => getPopularIdsByName(name, token)
    .then(({ data }) => getMappedPopularEvents(data.popular_event_ids, token));

export const eventsAgent = {
    getPopularByName,
    getById,
};