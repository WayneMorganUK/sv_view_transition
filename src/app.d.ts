// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	export interface HpResults {
		hp_data: HpData[];
	}

	export interface HpData {
		id: string;
		name: string;
		alternate_names: string[];
		species: string;
		gender: string;
		house: string;
		dateOfBirth?: string;
		yearOfBirth?: number;
		wizard: boolean;
		ancestry: string;
		eyeColour: string;
		hairColour: string;
		wand: Wand;
		patronus: string;
		hogwartsStudent: boolean;
		hogwartsStaff: boolean;
		actor: string;
		alternate_actors: string[];
		alive: boolean;
		image: string;
	}

	export interface Wand {
		wood: string;
		core: string;
		length?: number;
	}
}
export { };
