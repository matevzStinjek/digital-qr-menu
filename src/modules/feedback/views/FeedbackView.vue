<template>
    <div class="feedback-view">
        <div class="feedback__title feedback__title--main">{{ $t('common.feedback') }}</div>

        <panel class="feedback__panel">
            <template v-if="!isAppFeedbackSent">
                <div class="feedback__title">{{ $t('feedback.app-feedback') }}</div>

                <div class="feedback__grid">
                    <div class="feedback__label">{{ $t('feedback.rate-app') }}</div>
                    <v-rating v-model="appRating" />

                    <div class="feedback__label feedback__label--dense">{{ $t('feedback.request-app') }}</div>
                    <v-radio-group class="feedback__radio--override" v-model="appRequest" dense hide-details>
                        <v-radio v-for="option in requestFeedback" :key="option" :label="$t(`common.${option}`)" :value="option" />
                    </v-radio-group>

                    <div class="feedback__label">{{ $t('common.feedback') }}</div>
                    <v-select :items="feedbackTypes" :label="$t('feedback.type')" solo hide-details dense />
                </div>

                <v-textarea v-model="appFeedback" class="feedback__textarea" solo clearable dense no-resize hide-details rows="2" auto-grow />

                <button-element class="feedback__send" @click="onAppFeedback">{{ $t('common.send') }}</button-element>
            </template>
            <div v-else class="feedback__thanks">{{ $t('feedback.thanks') }}</div>
        </panel>

        <panel class="feedback__panel">
            <template v-if="!isRestaurantFeedbackSent">
                <div class="feedback__title">{{ $t('feedback.restaurant-feedback') }}</div>

                <div class="feedback__grid">
                    <div class="feedback__label">{{ $t('common.food') }}</div>
                    <v-rating v-model="foodRating" />

                    <div class="feedback__label">{{ $t('common.service') }}</div>
                    <v-rating v-model="serviceRating" />

                    <div class="feedback__label">{{ $t('common.feedback') }}</div>
                    <v-select :items="feedbackTypes" label="Feedback type" solo hide-details dense />
                </div>

                <v-textarea v-model="restaurantFeedback" class="feedback__textarea" solo clearable dense no-resize hide-details rows="2" auto-grow />

                <button-element class="feedback__send" @click="onRestaurantFeedback">{{ $t('common.send') }}</button-element>
            </template>
            <div v-else class="feedback__thanks">{{ $t('feedback.thanks') }}</div>
        </panel>
    </div>
</template>

<script>
import Button from 'shared/components/stateless/Button.vue'
import Panel from 'shared/components/furniture/Panel.vue'

export default {
    name: 'FeedbackView',
    components: {
        Panel,
        buttonElement: Button,
    },
    data () {
        return {
            serviceRating: 0,
            foodRating: 0,
            restaurantFeedback: '',
            isRestaurantFeedbackSent: false,

            appRating: 0,
            appRequest: null,
            appFeedback: '',
            isAppFeedbackSent: false,
        }
    },
    beforeCreate () {
        this.requestFeedback = ['yes', 'no', 'indifferent']
        this.feedbackTypes = ['problem', 'suggestion', 'compliment', 'other'].map(type => ({ value: type, text: this.$t(`common.${type}`) }))
    },
    methods: {
        onRestaurantFeedback () {
            this.isRestaurantFeedbackSent = true
        },
        onAppFeedback () {
            this.isAppFeedbackSent = true
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/common';

.feedback-view {
    padding: 8px 12px 16px;
}

.feedback {
    &__title {
        @include medium-font;
        font-size: 32px;
    }
    &__title--main {
        padding: 16px 0;
        color: $orange
    }
    &__panel {
        margin-bottom: 16px;
    }
    &__label {
        min-width: 64px;
        padding: 12px 0;
    }
    &__grid {
        display: grid;
        grid-template-columns: auto 1fr;
        column-gap: 8px;
    }
    &__textarea {
        margin-top: 8px;
    }
    &__send {
        margin: 16px auto 0;
    }
    &__thanks {
        text-align: center;
    }
    &__radio--override {
        padding-top: 12px;
        margin-top: 0;
    }
}

</style>
