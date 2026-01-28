import { error } from "@sveltejs/kit";

export const load = async (): Promise<{ hp_data: HpData[] }> => {
    try {
        const url = "https://hp-api.onrender.com/api/characters/students";
        const response = await fetch(url);
        const hp_response = await response.json();
        return {
            hp_data: hp_response.filter((character: { image: string; }) => character.image !== ''),
        }
    }
    catch {
        error(400, 'not found');
    }
}