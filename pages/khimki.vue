<template>
    <div>
        <SignNow />
        <PoolStartBlock
            title="Swim Shot в Химках"
            address="ул. Кудрявцева, стр. 23, ЖК «Маяк», Химки"
            :photosArr="poolsPicArr"
        />
        <div class="bg-grey">
            <PoolsFeatures data-aos="fade-up" :PoolsFeatures="poolFeatures" alone />
        </div>

        <ScheduleLink text="Расписание бассейна 'Swim Shot Химки'" pool="khimki" />

        <div class="container" data-aos="fade-right">
            <div class="pools-info">
                <p class="pools-info__text">
                    Бассейн находится в Химках, в 5 минутах от станции.
                </p>
                <p class="pools-info__text">
                    Это новый, уютный, красивый и просторный двадцати пяти метровый бассейн. 
                    Есть раздевалки с запирающимися шкафчиками, душевые, туалеты, умывальники, фены. 
                    Вокруг бассейна есть большое пространство, на котором можно размяться.
                </p>
                <p class="pools-info__text">
                    Для посетителей бассейна есть необходимый инвентарь – досочки, калабашки, нудлы, игрушки и так далее.
                </p>
                <p class="pools-info__text">
                    Тренер занимается с детьми и взрослыми любого возраста и уровня подготовки. При надобности занятия
                    проходят <b>из воды</b>.
                </p>
            </div>
        </div>

        <div class="bg-grey">
            <AnotherPools data-aos="fade-right" :PoolsArr="poolsList" />
        </div>
    </div>
</template>

<script>
/* eslint-disable*/
import { poolsList } from '~/static/js/poolsInfo.js';

import PoolStartBlock from '~/views/PoolStartBlock/PoolStartBlock.vue';
import SignNow from '~/components/SignNow/SignNow.vue';
import PoolsFeatures from '~/components/PoolsFeatures/PoolsFeatures.vue';
import ScheduleLink from '~/components/ScheduleLink/ScheduleLink.vue';
import AnotherPools from '~/views/AnotherPools/AnotherPools.vue';

import PoolPic1 from '~/assets/jpg/pools/khimki_pool_1.jpg';
import PoolPic2 from '~/assets/jpg/pools/khimki_pool_2.jpg';
import PoolPic3 from '~/assets/jpg/pools/khimki_pool_3.jpg';
import PoolPic4 from '~/assets/jpg/pools/khimki_pool_4.jpg';

const poolsPicArr = [PoolPic1, PoolPic2, PoolPic3, PoolPic4];

const poolFeatures = [
    {
        title: 'Стоимость групповых',
        text: 'от 6500 в месяц',
    },
    {
        title: 'Для кого?',
        text: 'для детей от 5 до 17 лет',
    },
    {
        title: 'Глубина',
        text: 'от 120 см до 180 см',
    },
    {
        title: 'Длина',
        text: '25 метров',
    },
    {
        title: 'Количество дорожек',
        text: '4',
    },
    {
        title: 'Температура воды',
        text: '28 градусов',
    },
];

export default {
    name: 'ekb-page',

    layout: 'default',

    components: {
        PoolStartBlock,
        SignNow,
        PoolsFeatures,
        ScheduleLink,
        AnotherPools,
    },

    head() {
        return {
            title: 'Swim Shot в Химках',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Бассейн в Химках по адресу ул. Кудрявцева, стр. 23, ЖК «Маяк», Химки. Длина бассейна 25 метров 4 дорожки. В бассейн в Химках можно приобрести абонемент для свободного плавания, групповых или индивидуальных занятий с тренером.',
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content:
                        'Контакты бассейн Химки, Адрес бассейн Химки, Бассейн Химки, Абонемент бассейн Химки, Цена бассейн Химки, Стоимость бассейн Химки, Расписание бассейн Химки, Отзывы бассейн Химки',
                },
            ],
        };
    },

    data() {
        return {
            poolsPicArr,
            poolFeatures,
            poolsList: poolsList.filter((pool) => pool.id !== 'ekb'),
        };
    },
};
</script>
