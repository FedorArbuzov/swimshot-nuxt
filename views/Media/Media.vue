<template>
    <div class="bg-grey" id="media">
        <div class="container media">
            <h2 class="text-header" data-aos="fade-right">Swim shot в <span class="blue">СМИ</span></h2>

            <h3 class="text-subheader" data-aos="fade-right">
                Говорим и пишем о плавании и нашей школе <br />Слушай и читай по ссылкам ниже
            </h3>

            <p class="text-subheader text-subheader--note" data-aos="fade-right">
                * расписание, цены и пр информация об услугах может отличаться от указанных по ссылкам ниже из-за
                прошествия времени
            </p>

            <div class="media__list" data-aos="fade-up">
                <div class="media__list-item">
                    <div class="media__list-item-img">
                        <img :src="kaleki" alt="Swim shot на sports.ru" />
                    </div>
                    <div class="media__list-item-text-wrap">
                        <p class="media__list-item-text-title">Мы в подкасте Sports.ru</p>
                        <p class="media__list-item-text">
                            Провели тренировку и поделились секретами плавания на главной спортивной площадке страны
                        </p>
                        <a href="https://www.sports.ru/tribuna/blogs/podcasts/2865303.html" target="_blank">
                            <VButton sm text="Слушать" />
                        </a>
                    </div>
                </div>
                <div class="media__list-item">
                    <div class="media__list-item-img">
                        <img :src="zelenru" alt="Swim shot в сататьях Zelenograd.ru" />
                    </div>
                    <div class="media__list-item-text-wrap">
                        <p class="media__list-item-text-title">Swim Shot в статьях Zelenograd.ru</p>
                        <p class="media__list-item-text">
                            Рассказываем про личности, структуру школы и ценности в обучении плаванию крупному изданию
                            Зеленорада
                        </p>
                        <a
                            href="https://www.zelenograd.ru/reklama/novyy-basseyn-dlya-svobodnogo-plavaniya-i-zanyatiy-poyavilsya-v-zelenograde/"
                            target="_blank"
                        >
                            <VButton sm text="Читать" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VButton from '~/components/VButton/VButton.vue';
import zelenru from '~/assets/jpg/zelen_ru.jpg';
import kaleki from '~/assets/jpg/kaleki.jpg';
import './styles.css';

export default {
    components: { VButton },
    data() {
        return {
            zelenru,
            kaleki,
        };
    },
};
</script>

<style></style>
