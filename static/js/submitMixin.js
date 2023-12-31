import locationMixin from '~/static/js/locationMixin.js';
export default {
    mixins: [locationMixin],

    data() {
        const defaultForm = {
            name: null,
            phone: null,
            comment: null,
        };

        const defaultFormState = {
            isLoading: false,
            errored: false,
            loaded: false,
        };

        return {
            defaultForm,
            form: { ...defaultForm },

            defaultFormState,
            formState: { ...defaultFormState },
        };
    },

    methods: {
        sendLead() {
            this.$fb.track('Lead');
        },

        async submitForm() {
            this.$v.$touch();
            if (this.$v.$invalid) return;
            console.log('submit');
            if (this.modalComment) this.form.comment = `Хочу к тренеру: ${this.modalComment}`;
            if (this.isSpb || this.pathName === '/spb') this.form.comment = 'САНКТ-ПЕТЕРБУРГ';
            if (this.isKhimki || this.pathName === '/khimki') this.form.comment = 'ХИМКИ';
            

            this.formState.isLoading = true;
            console.log(JSON.stringify(this.form))

            await fetch('https://cloud.1c.fitness/api/hs/lead/Webhook/6cdcce9e-6824-11ed-da8f-00505683b2c0', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.form),
            })
                .then(() => {
                    this.formState.loaded = true;

                    if (!window.dataLayer.find((item) => item.event === 'form')) {
                        window.dataLayer.push({
                            event: 'form',
                        });
                        this.sendLead();
                    }
                })
                .catch(() => {
                    this.formState.errored = true;
                })
                .finally(() => {
                    setTimeout(() => {
                        this.formState.isLoading = false;
                    }, 1000);
                });
        },

        onCloseFormLoad() {
            this.form = { ...this.defaultForm };
            this.formState = { ...this.defaultFormState };
            this.$v.$reset();
            this.$emit('formSubmit');

            if (this.open) this.closeModal();
        },
    },
};
