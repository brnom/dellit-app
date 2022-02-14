import { defineNuxtConfig } from 'nuxt3'
import fs from 'fs'
import svgLoader from 'vite-svg-loader'

/* TODO: fix on vite style-resources support */
let sassVars = ''
try {
  sassVars = fs.readFileSync('./assets/variables.scss', 'utf8')
} catch (err) {
  console.error(err)
}


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    alias: {
        '@': '~',
        '@icons': '~/public/icons',
    },

    css: [
        '@/assets/main.scss',
        '@/assets/variables.scss',
    ],

    meta: {
        title: 'Dellit Doces',
        link: [
            { rel: 'icon', href: '/favicon.png', type: 'image/png' },
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap" },
        ],
    },

    modules: [
        'vite-svg-loader',
    ],

    ssr: false,

    typescript: {
        strict: true,
    },

    /* TODO: fix sass variables import */
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // sourceMap: true,
                    additionalData: sassVars,
                },
            },
        },
        plugins: [svgLoader()],
    },
})
