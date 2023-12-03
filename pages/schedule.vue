<template>
    <div>
        <Schedule @trainerClick="onTrainerClick" />

        <div class="schedule-info-message">Мы готовы предложить вам занятия почти в любое время. Чтобы подобрать максимально удобное для вас, оставьте заявку в <a href="form">форме</a></div>

        <ScheduleSales id="sales" />

        <div class="bg-grey">
            <Team :currentTrainer="currentTrainer" @modalOpen="onModalContactOpen" />
        </div>
    </div>
</template>

<script>
import Schedule from '~/views/Schedule/Schedule.vue';
import ScheduleSales from '~/views/Schedule/ScheduleSales/ScheduleSales.vue';
import Team from '~/views/Team/Team.vue';

export default {
    layout: 'default',

    components: {
        Team,
        Schedule,
        ScheduleSales,
    },

    data() {
        return {
            currentTrainer: null,
        };
    },

    methods: {
        onTrainerClick(name) {
            this.currentTrainer = name;
        },

        onModalContactOpen(name = null) {
            this.$parent.$emit('modalOpen', name);
        },
    },
};
</script>
