/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
    tabWidth: 4,
    semi: false,
}

export default config
