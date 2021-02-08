<template>
    <v-dialog v-model="isDishDetailOpen" fullscreen hide-overlay transition="scale-transition" origin="center center">
        <div v-if="isLoaded" class="dish">
            <div class="dish__header">
                <carousel class="dish__carousel" :items="dish.gallery" />
                <div class="dish__back">
                    <icon name="back" @click="onBackClick" />
                </div>
            </div>

            <div class="dish__details">
                <div class="dish__details-header">
                    <div class="dish__name">{{ dish.name }}</div>
                    <button-element class="dish__video" role="cta-secondary" @click="onWatchClick">
                        <span class="mdi mdi-play-circle-outline" />
                        {{ $t('common.watch') }}
                    </button-element>
                </div>

                <div class="dish__subsection">
                    <div class="dish__description">{{ dish.description }}</div>
                    <dish-price class="dish__price" :price="dish.price" :variations="dish.variations" />
                </div>

                <div class="dish__subtitle">{{ $t('common.ingredients') }}</div>
                <div class="dish__ingredients">{{ ingredientsString }}</div>

                <div class="dish__subtitle">{{ $t('common.allergens') }}</div>
                <div class="dish__allergens">
                    <div v-for="{ id, icon, label } in dish.allergens" :key="id" class="dish__allergen">
                        <icon class="dish__allergen-icon" :name="icon" />
                        <div class="dish__allergen-label">{{ label }}</div>
                    </div>
                </div>
            </div>

            <v-dialog v-model="isVideoDialogOpen">
                <video ref="video" autoplay controls>
                    <source :src="dish.videoSrc" type="video/mp4">
                </video>
            </v-dialog>
        </div>

        <div v-else class="dish">
            <icon class="dish__loading" name="loading" />
        </div>
    </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DishPrice from 'shared/components/domain/DishPrice.vue'
import Icon from 'shared/components/stateless/Icon.vue'
import Button from 'shared/components/stateless/Button.vue'
import Carousel from 'shared/components/stateless/Carousel.vue'

export default {
    components: {
        DishPrice,
        Icon,
        Carousel,
        buttonElement: Button,
    },
    data () {
        return {
            isVideoDialogOpenData: false,
        }
    },
    computed: {
        ...mapGetters('menu', [
            'isLoaded',
            'dish',
        ]),
        ...mapGetters('menu', {
            isDishDetailOpenValue: 'isDishDetailOpen',
        }),
        ingredientsString () {
            return this.dish.ingredients.join(', ')
        },
        isDishDetailOpen: {
            get: function ()  {
                return this.isDishDetailOpenValue
            },
            set: function () {
                this.closeDishDetailView()
            },
        },
        isVideoDialogOpen: {
            get: function () {
                return this.isVideoDialogOpenData
            },
            set: async function (isOpen) {
                this.isVideoDialogOpenData = isOpen

                await this.$nextTick()
                const video = this.$refs.video
                isOpen ? play() : pause()

                function play () {
                    video.currentTime = 0
                    video.play()
                }
                function pause () {
                    video.pause()
                }
            },
        },
    },
    methods: {
        ...mapActions('menu', [
            'closeDishDetailView',
        ]),
        onBackClick () {
            this.closeDishDetailView()
        },
        onWatchClick () {
            this.isVideoDialogOpen = true
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/common';

.dish {
    height: 100%;
    background-color: $white;
    display: flex;
    flex-direction: column;

    &__header {
        position: relative;
        height: 256px;
        margin-top: -1px; // fix phantom top padding in ios safari
    }
    &__back {
        @include center-content;
        position: absolute;
        top: 24px;
        left: 8px;
        height: 32px;
        width: 32px;
        color: $white;
    }
    &__carousel {
        height: 100%;
    }
    &__details {
        flex: 1 1 0;
        z-index: 1;
        position: relative;
        margin-top: -16px;
        padding: 16px;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        background-color: $white;
        overflow: auto;
    }
    &__details-header {
        display: flex;
    }
    &__name {
        @include medium-font;
        font-size: 32px;
        flex: 1 1 0;
    }
    &__subtitle {
        @include medium-font;
        margin: 16px 0 8px;
    }
    &__video {
        width: fit-content;
        margin-top: 8px;
    }
    &__subsection {
        display: flex;
        margin-top: 8px;
    }
    &__description {
        flex: 1 1 0;
    }
    &__price {
        font-size: 14px;
    }
    // &__ingredients {}
    &__allergens {
        display: flex;
        margin: 0 -8px;
    }
    &__allergen {
        margin: 0 8px;
    }
    &__allergen-icon {
        width: 48px;
        height: 48px;
    }
    &__allergen-label {
        text-align: center;
        margin-top: -6px;
        font-size: 14px;
    }
    &__loading {
        @include center;
        color: $cement;
    }
}
</style>

<style lang="scss">
//  Overrides

.v-carousel__controls {
    bottom: 8px;
}
</style>
