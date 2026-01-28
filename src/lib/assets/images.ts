import cedric from '$lib/assets/cedric.jpg';
import crabbe from '$lib/assets/crabbe.jpg';
import cho from '$lib/assets/cho.jpg';
import draco from '$lib/assets/draco.jpg';
import ginny from '$lib/assets/ginny.jpg';
import hermione from '$lib/assets/hermione.jpeg';
import harry from '$lib/assets/harry.jpg';
import ron from '$lib/assets/ron.jpg';
import neville from '$lib/assets/neville.jpg';
import luna from '$lib/assets/luna.jpg';
import goyle from '$lib/assets/goyle.jpg';

export const characterImages = {
	cedric,
	crabbe,
	cho,
	draco,
	ginny,
	hermione,
	harry,
	ron,
	neville,
	luna,
	goyle
};

export function getImageById(id: string | undefined, data: { hp_data: HpData[] }) {
	if (!id) return 'harry';
	const character = data.hp_data.find((item) => item.id === id);
	const remoteUrl = character ? character.image : null;

	return getImagebyUrl(remoteUrl ? remoteUrl : '');
}

export function getImagebyUrl(url: string) {
	const filename = url.split('/').pop(); // "harry.jpg"
	if (!filename) return 'harry';
	const name = filename.split('.')[0]; // "harry"
	return name ? name : 'harry';
}
