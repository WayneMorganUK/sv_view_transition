<script lang="ts">
  import { onNavigate, beforeNavigate, afterNavigate } from "$app/navigation";
  import { tick } from "svelte";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
  beforeNavigate((navigation) => {
    console.log("BEFORE NAVIGATION");
    // Going from array to single image (TO has slug)
    if (navigation.to?.params?.slug) {
      console.log("***** Navigating from Movie to Image");
      const vtn_image = document.querySelector(
        `img[data-vtn="vtn-image-${navigation.to.params.slug}"]`
      ) as HTMLElement;

      if (vtn_image) {
        vtn_image.style.viewTransitionName = `vtn-image-${navigation.to.params.slug}`;

        console.log(
          "image (Added viewTransitionName)",
          vtn_image,
          navigation.to.params.slug
        );
      }
    }

    // Going from single image back to array (FROM has slug, TO doesn't)
    if (navigation.from?.params?.slug) {
      console.log("***** Navigating from Image to Movie");
      const vtn_image = document.querySelector(
        `img[data-vtn="vtn-image-${navigation.from.params.slug}"]`
      ) as HTMLElement;

      if (vtn_image) {
        vtn_image.style.viewTransitionName = `vtn-image-${navigation.from.params.slug}`;
      }
      console.log(
        "image (Added viewTransitionName)",
        vtn_image,
        navigation.from.params.slug
      );
    }
  });

  afterNavigate(async (navigation) => {
    await tick();
    console.log("AFTER NAVIGATION");
    if (navigation.to?.params?.slug) {
      console.log("***** Navigating from Movie to Image");
      const vtn_image = document.querySelector(
        `img[data-vtn="vtn-image-${navigation.to.params.slug}"]`
      ) as HTMLElement;
      console.log("VTN IMAGE", vtn_image);
      const images = document.querySelectorAll("img");
      console.log("ALL IMAGES", images);

      if (vtn_image) {
        vtn_image.style.viewTransitionName = `vtn-image-${navigation.to.params.slug}`;

        console.log(
          "image (Added viewTransitionName)",
          vtn_image,
          navigation.to.params.slug
        );
      } else {
        console.log("failed on afterNavigate", navigation.to.params.slug);
      }
    }

    if (navigation.from?.params?.slug) {
      console.log("***** Navigating from Image to Movie");
      const vtn_image = document.querySelector(
        `img[data-vtn="vtn-image-${navigation.from.params.slug}"]`
      ) as HTMLElement;

      if (vtn_image) {
        vtn_image.style.viewTransitionName = `vtn-image-${navigation.from.params.slug}`;
        console.log(
          "image (Added viewTransitionName)",
          navigation.from.params.slug
        );
      } else {
        console.log("failed on afterNavigate", navigation.from.params.slug);
      }
    }
  });
</script>
