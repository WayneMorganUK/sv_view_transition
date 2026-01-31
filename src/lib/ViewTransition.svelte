<script lang="ts">
	import { onNavigate, beforeNavigate, afterNavigate } from '$app/navigation';

	/**
	 * onNavigate is a SvelteKit lifecycle function that runs when navigation is initiated.
	 * It checks if the browser supports the View Transitions API (document.startViewTransition).
	 * If supported, it wraps the navigation in a view transition.
	 */
	onNavigate((navigation) => {
		// If the browser doesn't support the View Transitions API, do nothing.
		if (!document.startViewTransition) return;

		// Create a new Promise that resolves when the view transition is ready to start.
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				// Resolve the promise to allow the navigation to proceed.
				resolve();
				// Wait for the navigation to complete.
				await navigation.complete;
			});
		});
	});

	/**
	 * beforeNavigate is a SvelteKit lifecycle function that runs before navigation starts.
	 * It prepares the DOM for the view transition by setting the `view-transition-name`
	 * on the relevant image element.
	 */
	beforeNavigate(async (navigation) => {
	
		// Case 1: Navigating from a grid of images to a single image view.
		// The destination URL has a 'slug' parameter.
		if (navigation.to?.params?.slug) {
			
			// Find the image in the grid that corresponds to the destination slug.
			const vtn_image = document.querySelector(
				`img[data-vtn="vtn-image-${navigation.to.params.slug}"]`
			) as HTMLElement;

			// If the image is found, set its `view-transition-name`.
			if (vtn_image) {
				vtn_image.style.viewTransitionName = `vtn-image-${navigation.to.params.slug}`;
			}
		}

		// Case 2: Navigating from a single image view back to the grid.
		// The source URL has a 'slug' parameter, but the destination URL does not.
		if (navigation.from?.params?.slug) {
		
			// Find the image on the single image page.
			const vtn_image = document.querySelector(
				`img[data-vtn="vtn-image-${navigation.from.params.slug}"]`
			) as HTMLElement;

			// If the image is found, set its `view-transition-name`.
			if (vtn_image) {
				vtn_image.style.viewTransitionName = `vtn-image-${navigation.from.params.slug}`;
			}
    }
	});

	/**
	 * afterNavigate is a SvelteKit lifecycle function that runs after navigation is complete.
	 * It ensures the `view-transition-name` is set on the image on the new page.
	 */
	afterNavigate(async (navigation) => {

		// Case 1: Arrived at a single image view.
		if (navigation.to?.params?.slug) {
		
			// Find the image on the new page.
			const vtn_image = document.querySelector(
				`img[data-vtn="vtn-image-${navigation.to.params.slug}"]`
			) as HTMLElement;

			// If the image is found, set its `view-transition-name`.
			if (vtn_image) {
				vtn_image.style.viewTransitionName = `vtn-image-${navigation.to.params.slug}`;
			} else {
			 console.error('failed on afterNavigate', navigation.to.params.slug);
			}
		}

		// Case 2: Arrived back at the grid view.
		if (navigation.from?.params?.slug) {
			
			// Find the image in the grid that was just transitioned from.
			const vtn_image = document.querySelector(
				`img[data-vtn="vtn-image-${navigation.from.params.slug}"]`
			) as HTMLElement;

			// If the image is found, ensure its `view-transition-name` is still set.
			// This can be useful for cases where the user navigates back and forth quickly.
			if (vtn_image) {
				vtn_image.style.viewTransitionName = `vtn-image-${navigation.from.params.slug}`;
      } else {
				console.error('failed on afterNavigate', navigation.from.params.slug);
			}
		}
	});
</script>
