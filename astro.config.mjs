import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Construction Specifications',
    // social: {
    // 	github: 'https://github.com/withastro/starlight',
    // },
    sidebar: [{
      label: 'Standard Specifications',
      autogenerate: {
        directory: '01-specs'
      }
      // items: [
      // 	// Each item here is one entry in the navigation menu.
      // 	{ label: 'Example Guide', link: '/guides/example/' },
      // ],
    }, {
      label: 'Supplemental Specifications',
      autogenerate: {
        directory: '02-supplemental'
      }
    }, {
      label: 'Superseded Editions',
      autogenerate: {
        directory: '03-superseded'
      }
    }],
    favicon: '/favicon.png',
    logo: {
      src: './src/assets/logo.png'
    },
	customCss: [
		// Path to your Tailwind base styles:
		'./src/tailwind.css',
	],
  }), 
  tailwind({
	// Disable the default base styles:
	applyBaseStyles: true,
}),
],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});