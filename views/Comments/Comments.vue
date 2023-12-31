<template>
    <div class="bg-grey" id="comments">
        <div class="container comments">
            <h2 class="text-header" data-aos="fade-right">Отзывы о <span class="blue">Swim Shot</span></h2>

            <h3 class="text-subheader" data-aos="fade-right">
                Читайте отзывы реальных учеников нашей школы. Под каждым из них есть <span class="blue">ссылка</span>,
                чтобы ты мог спросить лично о всех тонкостях плавания со <span class="blue">Swim Shot</span>, если
                хочешь. Они не против :)
            </h3>

            <p class="text-subheader text-subheader--note" data-aos="fade-right">
                * также не стесняйся делиться опытом плавания в <b>Swim Shot</b> на
                <a href="https://yandex.ru/maps/org/shkola_plavaniya_swim_shot/39769031923/" target="_blank">
                    Яндекс Картах
                </a>
            </p>

            <swiper ref="mySwiper" :options="swiperOptions" data-aos="fade-up">
                <swiper-slide v-for="(comment, index) in commentsArr" :key="index">
                    <div class="comments__item">
                        <p
                            title="Читать полностью"
                            class="comments__item-comment comments__item-comment--slide"
                            @click="showModal(index)"
                        >
                            <span>{{ comment.text }}</span>
                        </p>
                        <div class="comments__item-text-wrap">
                            <img class="comments__item-pic" :src="comment.pic" alt="Отзыв о Swim shot" />
                            <div class="comments__item-text">
                                <p class="comments__item-name">{{ comment.name }} — {{ comment.relation }}</p>
                                <a
                                    target="_blank"
                                    class="comments__item-inst"
                                    :href="`https://www.instagram.com/${comment.inst}`"
                                    >@{{ comment.inst }}</a
                                >
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>

            <client-only>
                <comments-modal :comment="commentToShow" @closeModal="onModalClose" :open="modalOpen"></comments-modal>
            </client-only>

            <div class="comments__yandex-wrap">
                <div class="comments__yandex">
                    <iframe
                        class="comments__yandex-iframe"
                        src="https://yandex.ru/maps-reviews-widget/39769031923?comments"
                    />

                    <a
                        class="comments__yandex-link"
                        href="https://yandex.ru/maps/org/shkola_plavaniya_swim_shot/39769031923/"
                        target="_blank"
                    >
                        Школа плавания Swim Shot на карте Зеленограда — Яндекс Карты
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

import CommentsModal from './CommentsModal.vue';
import './styles.css';

import suter from '~/assets/jpg/comments/suter.jpg';
import fedorova from '~/assets/jpg/comments/fedorova.jpg';
import kuvardina from '~/assets/jpg/comments/kuvardina.jpg';
import prokhorova from '~/assets/jpg/comments/prokhorova.jpg';
import tarasova from '~/assets/jpg/comments/tarasova.jpg';
import astanina from '~/assets/jpg/comments/astanina.jpg';
import sakharova from '~/assets/jpg/comments/sakharova.jpg';

const commentsArr = [
    {
        text: 'Прекрасная школа! Горящие своим делом тренеры сумели расположить и привить ребёнку любовь к плаванию. На занятия в бассейн только с удовольствием',
        name: 'Элеонора Сутер',
        relation: 'мама пятилетней дочери, которая занималась в Swim Shot с нулевого уровня в Зеленограде',
        inst: 'eleonorasuter',
        pic: suter,
    },
    {
        text: 'Я люблю школу Swim Shot за то, что они добрые. У меня даже получается плавать! Вчера (спустя чуть меньше двух месяцев тренировок) я поплыла реальным кролем без всяких поплавков и я счастлива!!!',
        name: 'Ирина Федорова',
        relation: '43 года, занимается два месяца с нуля',
        inst: 'irinazimvate',
        pic: fedorova,
    },
    {
        text: 'Уже после первого занятия сын (6 лет, не плавающий) возвращался домой с горящими глазами и желанием прямо сейчас вернуться на следующую тренировку. Это очень важный показатель!\nНа тот момент у него был опыт индивидуальных занятий в бассейне, с которым он справился на отлично, но огонёк не зажёгся.\nА ребятам это удалось! Удалось заразить азартом, благодаря игровому подходу, свободному плаванию, наградной системе и, конечно же, печенькам))).\nСын поплыл довольно быстро.  Уже через несколько недель он уверенно прыгал с бортика под воду за игрушками и самостоятельно возвращался обратно. Сейчас он (занимается немного больше полугода) чувствует себя уверенно в любом водоеме, легко переплывает несколько бассейнов подряд без подручных средств, совершенствует технику и набирает скорость.\nСпасибо основателям за то, что меняете скучную систему и вдохновляете детей!',
        name: 'Юлия Кувардина',
        relation: 'мама шестилетнего пловца в Солнечногорске',
        inst: 'julikuvardina',
        pic: kuvardina,
    },
    {
        text: 'Хочу сказать спасибо всей команде Swim Shot и особенно тренеру Александре Георгиевой. Сын (5лет) недавно начал заниматься плаванием. Очень хотелось с детства привить ребёнку любовь к спорту. Но первые попытки завершились провалом, слезами и категоричным отказом ребёнка от занятий. Рада,  что в Swim Shot мы нашли своего тренера. Теперь сын ждет тренировок с нетерпением, в бассейн бежит с радостью. Внутренняя мотивация ребёнка не сравнится ни с чем. Спасибо тренеру Александре за индивидуальный подход ❤️',
        name: 'Ольга Прохорова',
        relation: 'мама пятилетнего ребёнка, занимающегося персонально в нашей школе в Зеленограде',
        inst: 'bcba_olga_prokhorova',
        pic: prokhorova,
    },
    {
        text: 'Занимаюсь в Swim Shot 8 месяцев. Как же я обрадовалась, когда увидела, что в Зеленограде появилась новая школа, в которой есть взрослые группы, да ещё и с удобным временем! На первой тренировке ребята сказали, что надо бы в соревнованиях участвовать, а я ведь думала, что плохо плаваю. В итоге соревнования случились. А потом случилась открытая вода и первые в жизни 5 км на тренировке, и участие в трёх заплывах! Сама в шоке 😁 \n Для меня Swim Shot - это не просто школа плавания. Это тренировки в кайф! Это подготовка к заплывам, поддержка на них и разбор полетов после! Это когда тренер меняет тренировку под тебя, если ты её не вывозишь! Это классные видосы с тренировок! Это стильно, модно, молодежно! Это дружеская тусовка, где хороши все - и пловцы, и тренеры!\nСпасибо, Swim Shot, что вы есть!',
        name: 'Ольга Тарасова',
        relation: 'взрослая ученица, которая пришла к нам, чтобы совершенствовать уже имеющиеся плавательные навыки',
        inst: 'banzai444474217',
        pic: tarasova,
    },
    {
        text: 'Я люблю Swim Shot за самоотдачу, искренность, заинтересованность в результате и за любовь к своей работе!',
        name: 'Анна Астанина',
        relation:
            'мама шестилетней дочери, которая ходит в бассейн Swim Shot с самого основания. Также Анна с мужем начали заниматься у нас персонально',
        inst: 'ah4uta',
        pic: astanina,
    },
    {
        text: 'Ребята, хочу сказать, что вы просто волшебники. Лиса [дочь – прим. Swim Shot] боялась воды, было страшно плыть и нырять.\nНа первом занятии, 8 марта(!)) (Ребята даже в праздники тренируют) Лиса уже проплыла под водой и перестала ее бояться. Готова была все дополнительные занятия заменить плаванием. Тренеры активные, добрые,  поддерживат ребят от и до.\nВселяют уверенность в детей и влюбляют в спорт ❤️❤️\nСпасибо огромное Вам!',
        name: 'Юлия Сахарова',
        relation: 'мама семилетней ученицы в Зеленограде',
        inst: 'cherryshappy',
        pic: sakharova,
    },
];

export default {
    name: 'Comments',
    components: {
        Swiper,
        SwiperSlide,
        CommentsModal,
    },
    directives: {
        swiper: directive,
    },
    data() {
        return {
            modalOpen: false,
            commentsArr,
            commentToShow: {},
            swiperOptions: {
                slidesPerView: 'auto',
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
        };
    },
    computed: {
        isTablet() {
            return this.$mq === 'tablet';
        },
    },
    methods: {
        onModalClose(data) {
            this.modalOpen = data;
        },
        showModal(index) {
            this.commentToShow = this.commentsArr[index];
            this.modalOpen = true;
        },
    },
};
</script>
