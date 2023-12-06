import { mskContacts, ekbContacts, spbContacts, khimkiContacts } from '~/static/js/poolsInfo.js';
import { socialLinksHeader, socialLinksHeaderEkb, socialLinksHeaderSpb } from '~/static/js/links.js';
import { socialLinksContactForm, socialLinksContactFormEkb, socialLinksContactFormSpb } from '~/static/js/links.js';

export default {
    data() {
        return {
            currentLocation: null,
            mskTitle: 'Москва, Зеленоград',
            spbTitle: 'Санкт-Петербург',
            khimkiTitle: 'Химки',
            anotherTitle: 'Другой',

            coordsCenterMsk: [55.98180773463946, 37.199255310803],
            coordsCenterEkb: [56.839567, 60.550663],
            coordsCenterSpb: [59.918747, 30.344246],
            coordsCenterKhimki: [55.899364, 37.460812]
        };
    },

    computed: {
        isEkb() {
            return this.currentLocation?.toLowerCase() === 'sve';
        },

        isMsk() {
            return this.currentLocation?.toLowerCase() === 'mow';
        },

        isKhimki() {
            return this.currentLocation?.toLowerCase() === 'khimki';
        },

        isSpb() {
            return this.currentLocation?.toLowerCase() === 'spb';
        },

        isAnother() {
            return (
                this.currentLocation &&
                this.currentLocation?.toLowerCase() !== 'spb' &&
                this.currentLocation?.toLowerCase() !== 'mow' &&
                this.currentLocation?.toLowerCase() !== 'sve'
            );
        },

        currentTitle() {
            if (this.isEkb) return this.ekbTitle;
            if (this.isMsk) return this.mskTitle;
            if (this.isSpb) return this.spbTitle;
            if (this.isKhimki) return this.khimkiTitle;
            if (this.isAnother) return this.anotherTitle;

            return '';
        },

        currentContacts() {
            if (this.isEkb || this.pathName === '/ekb') return ekbContacts;

            if (this.isSpb || this.pathName === '/spb') return spbContacts;

            if (this.isKhimki || this.pathName === '/khimki') return khimkiContacts;

            return mskContacts;
        },

        currentLinksHeader() {
            if (this.isEkb || this.pathName === '/ekb') return socialLinksHeaderEkb;

            if (this.isSpb || this.pathName === '/spb') return socialLinksHeaderSpb;

            return socialLinksHeader;
        },

        currentLinksContactForm() {
            if (this.isEkb || this.pathName === '/ekb') return socialLinksContactFormEkb;

            if (this.isSpb || this.pathName === '/spb') return socialLinksContactFormSpb;

            return socialLinksContactForm;
        },

        pathName() {
            if (!process.client) return '';

            return $nuxt.$route.path;
        },

        coordsCenter() {
            if (!process.client) return this.coordsCenterMsk;

            if (this.pathName === '/zelenograd') return this.coordsCenterMsk;
            if (this.pathName === '/orbita') return this.coordsCenterMsk;
            if (this.pathName === '/ekb') return this.coordsCenterEkb;
            if (this.pathName === '/spb') return this.coordsCenterSpb;
            if (this.pathName === '/khimki') return this.coordsCenterKhimki;

            if (this.isEkb) return this.coordsCenterEkb;
            if (this.isSpb) return this.coordsCenterSpb;

            return this.coordsCenterMsk;
        },
    },

    methods: {
        async getLocation() {
            await fetch('https://ipinfo.io/json?token=0a9c848024b91e', {
                method: 'GET',
            }).then((resp) => {
                resp.json().then((body) => this.setLocation(body.region));
            });
        },

        setLocation(currentLocation) {
            let settingLocation = 'another';

            if (currentLocation.toLowerCase() == 'sverdlovsk oblast' || currentLocation.toLowerCase() == 'sve')
                settingLocation = 'sve';

            if (currentLocation.toLowerCase() == 'moscow' || currentLocation.toLowerCase() == 'mow')
                settingLocation = 'mow';

            if (currentLocation.toLowerCase() == 'st.-petersburg' || currentLocation.toLowerCase() == 'spb')
                settingLocation = 'spb';

            if (currentLocation.toLowerCase() == 'khimki' || currentLocation.toLowerCase() == 'khimki')
                settingLocation = 'khimki';

            this.currentLocation = settingLocation;

            this.$root.$emit('currentLocationChange', settingLocation);
        },
    },

    mounted() {
        if (!this.currentLocation) this.getLocation();

        this.$root.$on('currentLocationChange', (currentLocation) => (this.currentLocation = currentLocation));
    },
};
