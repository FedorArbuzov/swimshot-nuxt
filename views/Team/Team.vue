<template>
    <div class="container team">
        <h2 class="text-header" data-aos="fade-right">Наши <span class="blue">тренеры</span></h2>

        <h3 class="text-subheader" data-aos="fade-right">
            Каждый сотрудник <span class="blue">Swim Shot</span> делает все, чтобы ты получал максимальное наслаждение
            от плавания с пользой для здоровья и прогрессом. Тренеры регулярно обучаются как организованно, так и
            самостоятельно, а некоторые даже продолжают плавать, чтобы сначала опробовать на себе новые методы и
            упражнения, а потом внедрять их в тренировочный процесс <span id="team"></span>
        </h3>

        <swiper data-aos="fade-up" ref="teamSwiper" :options="swiperOptions">
            <swiper-slide v-for="(man, index) in teamArr" :key="index">
                <div class="team__list-item">
                    <div style="width: 100%">
                        <a :href="`https://instagram.com/${man.inst}`" target="_blank" class="team__list-item-img-wrap">
                            <img :src="man.photo" class="team__list-item-img" alt="Swim shot тренеры" />

                            <div class="team__list-item-social">
                                <img
                                    class="social-item-img social-item-img--image"
                                    :src="require('~/assets/swimshot_header_logo.jpg')"
                                    alt="Swim shot логотип"
                                />
                            </div>

                            <span v-if="man.founder" class="card-badge">основатель</span>
                        </a>

                        <div class="team__list-item-text">
                            <p class="team__list-item-name">
                                {{ man.name }}
                            </p>

                            <ul class="team__list-item-desc">
                                <li v-for="(item, index) in man.desc" :key="index">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div v-if="!man.unavailable" @click="onModalOpen(man.name)" style="width: 100%">
                        <VButton text="Записаться" wide />
                    </div>
                </div>
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

import VButton from '~/components/VButton/VButton.vue';

import 'swiper/css/swiper.css';
import './styles.css';

import Instagram from '~/assets/svg/instagram.svg';

import davydov from '~/assets/jpg/team/davydov.jpg';
import georgieva from '~/assets/jpg/team/georgieva.jpg';
import burakov from '~/assets/jpg/team/burakov.jpg';
import soboleva from '~/assets/jpg/team/soboleva.jpg';
import kurkin from '~/assets/jpg/team/kurkin.jpg';
import eliseeva from '~/assets/jpg/team/eliseeva.jpg';
import mekhedov from '~/assets/jpg/team/mekhedov.jpg';

const teamArr = [
    {
        photo: davydov,
        name: 'Александр Давыдов',
        desc: [
            'Отец-основатель школы плавания Swim Shot',
            'Работает Тренером с 2017 года',
            'Мастер Спорта РФ по плаванию',
            'Комментатор всероссийских соревнований',
            'Призер первенства России по плаванию на открытой воде',
            'Пятикратный рекордсмен Зеленограда',
        ],
        founder: true,
        unavailable: true,
        inst: 'davydov_alex98',
    },
    {
        photo: georgieva,
        name: 'Александра Георгиева',
        desc: [
            'Старший Тренер Школы плавания Swim Shot',
            'Работает тренером с 2019 года',
            'Кандидат в Мастера спорта России',
            'Победитель и призер турниров России и СНГ',
            'Сертифицированный тренер по плаванию, гидрореабилитации и психологическому сопровождению спортсменов',
        ],
        inst: '_alexandrina__',
    },
    {
        photo: burakov,
        name: 'Никита Бураков',
        desc: [
            'Главная Борода Swim Shot',
            'Работает тренером с 2010 года',
            'Мастер спорта России по плаванию',
            'Член сборной России по плаванию на открытой воде',
            'Победитель первенства России',
            'Обучает плаванию с нуля, помогает бороться со страхами воды, проводит занятия для беременных, гидрореабилитации и аква аэробику',
            'Готовит любителей к соревнованиям на открытой воде, триатлону и IRONMAN',
        ],
    },
    {
        photo: soboleva,
        name: 'Ольга Соболева',
        desc: [
            'Единственный Международник Swim Shot',
            'Работает тренером с 2020 года',
            'Мастер спорта международного класса',
            'Победитель и призер Первенств мира, Европы и России',
            'Сертифицированный тренер по работе с беременными',
            'Удостоена знака Губернатора Московской обл. Громова Б. В. “Во славу спорта”',
        ],
    },
    {
        photo: kurkin,
        name: 'Артём Куркин',
        desc: [
            'Гигант-Бицепс Swim Shot',
            'Кандидат в мастера спорта по плаванию',
            'Многократный призер Первенства Москвы и Зеленограда',
            'Специализируется на обучении плаванию с нуля и техники плавания',
            'Работает тренером с 2018 года',
        ],
    },
    {
        photo: eliseeva,
        name: 'Анна Елисеева',
        desc: [
            'Кроссфитер всея Swim Shot',
            'Работает тренером с 2015 года',
            'Мастер спорта России по плаванию',
            'Магистр по адаптивной физической культуре',
            'Победитель чемпионатов России',
            'Работает со взрослыми и детьми с полутора месяцев и старше',
        ],
    },
    {
        photo: mekhedov,
        name: 'Евгений Мехедов',
        desc: [
            'Многоборец Swim Shot',
            'Работает тренером с 2021 года',
            'Кандидат в мастера спорта',
            'Победитель Всероссийских соревнований',
        ],
    },
];

export default {
    name: 'Team',
    components: {
        Swiper,
        SwiperSlide,
        Instagram,
        VButton,
    },
    props: {
        currentTrainer: {
            type: String,
            default: null,
        },
    },
    directives: {
        swiper: directive,
    },

    data() {
        return {
            teamArr,
            swiperOptions: {
                slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    1150: {
                        slidesPerView: 3,
                    },
                    780: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1,
                    },
                },
            },
        };
    },
    computed: {
        isTablet() {
            return this.$mq === 'tablet';
        },

        swiper() {
            return this.$refs.teamSwiper.$swiper;
        },
    },

    methods: {
        onModalOpen(name) {
            this.$emit('modalOpen', name);
        },
    },

    watch: {
        currentTrainer(val) {
            const trainer = this.teamArr.find((t) => {
                const name = t.name.split(' ')[0];

                return name === val;
            });

            const summ = this.swiper.loopedSlides > 1 ? 2 : 1;
            const index = this.teamArr.indexOf(trainer) + summ;

            this.swiper.slideTo(index);
        },
    },
};
</script>
