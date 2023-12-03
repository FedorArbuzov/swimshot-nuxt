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

        <!-- <ScheduleLink text="Расписание бассейна 'Swim Shot Химки'" pool="khimki" /> -->

        <div class="container" data-aos="fade-right">

            <p class="schedule-info">Групповые и персональные тренировки для детей проходят по будням с 17 до 21 и по выходным с 9 до 19. Оставляй заявку, и мы точно подберем максимально удобное время для тебя.</p>

            <div class="pools-info">
                <p class="pools-info__text">
                    Бассейн находится в 7 минутах пешком от железнодорожной станции “Химки” в частной школе “Форум”
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

const poolsPicArr = [PoolPic3, PoolPic1, PoolPic2, PoolPic4];

const poolFeatures = [
    {
        title: 'Стоимость групповых',
        text: 'от 6500 в месяц',
    },
    {
        title: 'Стоимость персональных',
        text: 'от 4500 за тренировку',
    },
    {
        title: 'Стоимость без тренера',
        text: 'от 4500 за тренировку',
    },
    {
        title: 'Для кого?',
        text: 'для детей от 3 до 17 лет',
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
        text: '29-30 градусов',
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
