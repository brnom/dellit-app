import { defineNuxtConfig } from 'nuxt3'
import fs from 'fs'

/* TODO: remove this when vite supports style resources */
let sassVars = ''
try {
  sassVars = fs.readFileSync('./assets/variables.scss', 'utf8')
} catch (err) {
  console.error(err)
}


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // buildModules: [
    //     '@nuxtjs/style-resources'
    // ],

    css: [
        '@/assets/main.scss',
        '@/assets/variables.scss',
    ],

    meta: {
        link: [
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" }
        ],
    },

    modules: [
        'nuxt-svg-loader',
    ],

    ssr: false,

    /* TODO: fix sass variables import */
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    sourceMap: true,
                    additionalData: sassVars,
                },
            },
        },
    },
})
