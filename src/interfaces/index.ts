export type SportEvents = 'football' | 'basketball' | 'mma';
export type SportEventState = 'ended' | 'live' | 'upcoming';

export interface SportEvent {
    description: string | null
    state: SportEventState
    start_datetime: string
    display_order: number
    start_date: string
    short_name: string
    full_slug: string
    end_date: string
    created: string
    slug: string
    name: string
    id: string
}