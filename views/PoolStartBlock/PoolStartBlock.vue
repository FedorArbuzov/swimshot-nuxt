<template>
    <div class="container pool-start-block">
        <h1 class="pool-start-block__title" data-aos="fade-right">{{ title }}</h1>
        <a class="pool-start-block__address js-link" href="#contact-form-map" data-aos="fade-right">
            <img :src="mapMark" alt="Swim shot адрес" />{{ address }}
        </a>

        <div class="pool-start-block__swiper" data-aos="fade-up">
            <swiper class="swiper" :options="swiperOptions" ref="swiperTop">
                <swiper-slide
                    v-for="(photo, index) in photosArr"
                    :key="index"
                    :style="{ 'background-image': 'url(' + photo + ')' }"
                ></swiper-slide>

                <div class="swiper-button-prev" slot="button-prev"></div>

                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import './styles.css';

import mapMark from '~/assets/mapMark.png';

export default {
    name: 'pool-start-block',
    props: {
        title: {
            type: String,
            default: '',
        },
        address: {
            type: String,
            default: '',
        },
        photosArr: {
            type: Array,
            default: () => [],
        },
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiperOptions: {
                slideToClickedSlide: true,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            mapMark,
        };
    },
};
</script>
