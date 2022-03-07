export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Swim Shot — Бассейн, школа плавания в Зеленограде и в Южном Бутове. Обучение плаванию',
        htmlAttrs: {
            lang: 'ru',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Научим плавать вас и вашего ребенка. Лучшие тренеры. Школа плавания Swim Shot, занятия с тренерами, обучение плаванию детей и взрослых в Зеленограде и Южном Бутове. Пробное занятие по плаванию со скидкой 75%. Свободное плавание и групповые занятия по обучению плаванию.',
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content:
                    'Школа плавания Зеленоград, Абонемент плавание Зеленоград, Обучение плаванию Зеленоград, Детская школа плавания, Школа плавания для детей, Школа плавания для взрослых, Свободное плавание Зеленоград, Тренер плавание Зеленоград, Отзывы школа плавания, Занятия плаванием Зеленоград, Цена обучение плаванию, Стоимость обучение плаванию',
            },
            {
                property: 'og:image',
                content: '/soc.png',
            },
        ],
        link: [{ rel: 'icon', href: '/favicon.svg' }],
        link: [{ rel: 'image_src', href: '/soc.png' }],
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js' },
            { src: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&onload=InitMap' },
            { src: 'js/mango.js' },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~assets/css/base.css',
        '~assets/css/container.css',
        '~assets/css/fonts.css',
        '~assets/css/properties.css',
        '~assets/css/spacing.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~plugins/slide-menu', ssr: false },
        { src: '~plugins/main', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // Google Tag Manager
        ['@nuxtjs/google-tag-manager', { id: 'GTM-N5XZZBJ', pageTracking: true, dev: true }],
        'nuxt-svg-loader',
        [
            'nuxt-mq',
            {
                // Default breakpoint for SSR
                defaultBreakpoint: 'tablet',
                breakpoints: {
                    tablet: 960,
                    desktopXl: Infinity,
                },
            },
        ],
        [
            'nuxt-facebook-pixel-module',
            {
                /* module options */
                pixelId: '732689604791133',
                autoPageView: true,
            },
        ],
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
    ],

    robots: {
        Host: 'https://swimshot.ru',
        Sitemap: 'https://swimshot.ru/sitemap.xml',
    },

    loading: {
        color: '#29b1ff',
        height: '5px !important',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                'postcss-url': true,
                'postcss-normalize': true,
                'postcss-custom-media': { importFrom: './assets/css/media.css' },
                'postcss-nested': true,
                'postcss-pxtorem': true,
                'postcss-inline-svg': true,
                autoprefixer: true,
            },
        },
    },

    buildModules: ['@nuxt/postcss8', '@aceforth/nuxt-optimized-images'],

    optimizedImages: {
        optimizeImages: true,
    },
};
