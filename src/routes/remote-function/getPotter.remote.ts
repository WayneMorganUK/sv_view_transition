import { query, getRequestEvent } from '$app/server';

export const getPotter = query(async () => {
    const url = 'https://hp-api.onrender.com/api/characters/students';
    const response = await getRequestEvent().fetch(url);
    const hp_response = await response.json();
    return {
        hp_data: hp_response.filter(
            (character: { image: string }) => character.image !== ''
        ) as HpData[]
    };
});
