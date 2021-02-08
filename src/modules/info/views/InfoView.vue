<template>
    <div class="info-view">
        <!-- <div class="info-view__title info__title">{{ $t('common.info') }}</div> -->

        <svg class="info-view__logo" viewBox="0 0 337.83 144.02" xmlns="http://www.w3.org/2000/svg">
            <path d="M217.65 75.4c-8.51 2.83-14.23 1.5-17.62-4.1-2.97-4.91-2.23-11.58 1.73-15.54 4.54-4.53 10.84-4.74 17.56-.55 2.52-3.31 5.88-3.58 9.56-2.48 1.58.47 2.26 1.5 1.8 3.16-.16.57-.27 1.15-.41 1.73-.7 2.99-.7 2.99-3.88 2.75-.05.69-.15 1.38-.16 2.07-.02 4.42.02 8.83-.02 13.25-.07 8.13-4.57 12.99-12.71 13.75-5.04.47-9.72-.44-13.75-3.7-1.94-1.57-2-2.48-.42-4.46 2.2-2.75 2.72-2.9 4.89-1.24 2.22 1.69 4.69 2.66 7.51 2.58 4.59-.12 6.64-2.64 5.92-7.22zm-4.87-16.49c-3.21.04-5.48 2.42-5.46 5.73.02 3.38 2.42 5.81 5.69 5.74 3.18-.07 5.51-2.51 5.49-5.76-.02-3.37-2.4-5.76-5.72-5.71zM142.4 78.51c0 2.54.01 5.03 0 7.52-.02 2.79-.6 3.36-3.36 3.38-5.9.05-5.9.05-5.9-5.8V62.64c0-.76-.07-1.52-.1-2.29-3.22.3-3.22.3-3.93-2.94-.84-3.85-.01-4.94 3.98-5.21 3-.21 4.66.53 7.22 3.21 6.93-4.37 13.07-4.26 17.87.31 4.58 4.37 5.58 12.01 2.34 17.71-3.48 6.08-9.03 7.67-18.12 5.08zm10.9-12.34c.03-3.54-2.26-6.08-5.56-6.14-3.41-.07-5.82 2.46-5.81 6.08.02 3.54 2.36 6.06 5.65 6.07 3.29.02 5.69-2.5 5.72-6.01zM180.26 80.02c-10.91-.03-17.76-9.89-13.61-19.56 3.15-7.32 12.72-10.48 20.63-6.81 7.04 3.27 9.92 11.76 6.37 18.79-2.4 4.75-7.42 7.59-13.39 7.58zm-5.7-13.88c.02 3.47 2.4 6 5.68 6.05 3.33.05 5.82-2.59 5.8-6.14-.02-3.48-2.41-6-5.69-6.02-3.38-.02-5.8 2.54-5.79 6.11zM258.97 68.05c.14 2.57 1.61 4.36 4.09 5.09 2.93.86 5.58.2 8.09-1.43 1.87-1.22 3.19-.65 5 2.03 1.09 1.63-.16 2.44-1.17 3.24-8.27 6.49-21.86 2.68-24.57-6.86-2.14-7.53 1.68-14.92 8.92-17.24 7.68-2.46 15.48.99 17.88 7.99.48 1.41.7 2.95.78 4.45.12 2.17-.45 2.7-2.63 2.71-4.81.03-9.62.01-14.44.01-.65.01-1.3.01-1.95.01zm9.96-5.16c-.66-3.11-2.6-4.59-5.5-4.39-2.56.18-4.19 1.77-4.41 4.39h9.91zM243.4 72.2c3-1.38 3.4.51 3.9 2.32 1.09 3.94.35 5.03-3.77 5.42-6.13.59-9.38-2.27-9.42-8.47-.06-8.63.01-17.26-.04-25.89-.01-2 .77-3.09 2.78-3.34 1.11-.14 2.19-.45 3.3-.63 2.29-.38 3.15.34 3.25 2.69.02.53.01 1.05.01 1.58V69.4c-.01.78-.01 1.56-.01 2.8zM284.29 59.41c-3.52-.35-3.97-.67-4.09-2.8-.19-3.41.4-4.02 3.86-4.03 2.24 0 4.48.02 6.72 0 1.79-.02 2.7.78 2.69 2.61-.04 7.57.04 15.15-.15 22.72-.14 5.6-3.34 9.54-8.65 11.28-.25.08-.51.2-.76.18-2.85-.22-2.84-2.95-3.95-4.65-.76-1.16-.28-2.38.94-3.01 2.76-1.4 3.43-3.74 3.4-6.58-.05-5.19-.01-10.38-.01-15.72zM288.32 37.51c3.12 0 5.51 2.42 5.48 5.53-.03 2.97-2.44 5.41-5.41 5.47-2.98.06-5.59-2.5-5.61-5.5-.02-3.04 2.46-5.5 5.54-5.5zM285.18 95.81c.93-.42 1.77-.95 2.68-1.17 3.16-.77 5.76 1.09 5.98 4.33.14 2.04.07 4.1.03 6.15-.02 1.01-.41 1.15-2.58 1.1-1.05-.02-1.35-.26-1.36-1.2-.02-1.74.01-3.47-.02-5.21-.02-1.13-.48-1.75-1.33-1.93-1.23-.25-2.16.5-2.19 1.84-.03 1.68-.01 3.36-.01 5.04 0 1.18-.28 1.44-1.46 1.46-2.49.03-2.49.03-2.49-2.47 0-1.34.03-2.68-.01-4.01-.04-1.39-.92-2.11-2.16-1.85-.86.18-1.35.83-1.36 1.9-.02 1.68 0 3.36-.01 5.04-.01 1.09-.29 1.37-1.36 1.39-2.6.06-2.6.06-2.6-2.53 0-1.65-.01-3.3.01-4.95 0-.55-.05-.92-.75-.66-.49.18-.75-.11-.86-.56-.09-.33-.15-.67-.22-1-.29-1.36-.08-1.73 1.32-1.96 1.57-.26 2.9.1 3.65 1.67 2.7-2.29 4.67-2.37 7.1-.42zM266.23 106.5c-5.28.03-8.3-4.42-6.31-8.62 1.45-3.05 5.51-4.32 8.84-2.75 2.98 1.4 4.25 4.97 2.79 7.97-1.17 2.37-3.24 3.31-5.32 3.4zm1.97-6.02c0-1.52-1.01-2.6-2.44-2.61-1.46-.01-2.53 1.1-2.52 2.63.01 1.51 1.11 2.65 2.54 2.62 1.41-.03 2.42-1.13 2.42-2.64zM253.6 106.5c-2.96.01-5.32-1.69-6.05-4.34-.73-2.66.32-5.41 2.57-6.76 2.44-1.46 5.84-1.16 7.81.67.56.52.62.98.04 1.5-.13.11-.24.24-.36.36-1.08 1.08-1.08 1.08-2.42.31-1.14-.66-2.57-.45-3.34.49-.83 1.01-.79 2.67.08 3.63.83.91 2.22 1.02 3.37.32.4-.24 1.08-.64 1.3-.49.68.47 1.24 1.15 1.76 1.81.09.12-.17.64-.39.84-1.23 1.16-2.71 1.67-4.37 1.66zM245.96 104.13c-.01 1.33-1.08 2.36-2.41 2.34a2.367 2.367 0 01-2.33-2.43c.04-1.28 1.1-2.31 2.38-2.31 1.31 0 2.37 1.08 2.36 2.4zM102.89 48.41c-10.34 0-18.72 8.38-18.72 18.72v18.72h18.72c10.34 0 18.72-8.38 18.72-18.72.01-10.34-8.38-18.72-18.72-18.72zM62.63 48.41c-10.34 0-18.72 8.38-18.72 18.72 0 10.34 8.38 18.72 18.72 18.72h18.72V67.13c.01-10.34-8.38-18.72-18.72-18.72z" />
            <path fill="#fff" d="M73.33 68.13c0 5.84-4.62 10.43-10.47 10.43-5.9 0-10.45-4.64-10.44-10.62.01-5.8 4.68-10.38 10.55-10.34 5.82.03 10.37 4.65 10.36 10.53zM113.35 68.13c0 5.84-4.62 10.43-10.47 10.43-5.9 0-10.45-4.64-10.44-10.62.01-5.8 4.68-10.38 10.55-10.34 5.82.03 10.36 4.65 10.36 10.53z" />
            <path fill="#1c1c1b" d="M68.11 67.6c0 2.44-1.51 4.47-3.77 5.06-2.48.65-4.92-.37-6.1-2.55-1.1-2.01-.69-4.72.94-6.3.55-.53.92-.88 1.57.07 1.07 1.55 3.18 1.56 4.25.02.64-.93 1-.65 1.57-.1 1 .98 1.54 2.27 1.54 3.8zM108.12 67.6c0 2.44-1.51 4.47-3.77 5.06-2.48.65-4.92-.37-6.1-2.55-1.1-2.01-.69-4.72.94-6.3.55-.53.92-.88 1.57.07 1.07 1.55 3.18 1.56 4.25.02.64-.93 1-.65 1.57-.1 1.01.98 1.54 2.27 1.54 3.8z" />
        </svg>

        <panel class="about">
            <div class="about__title">{{ $t('common.about-us') }}</div>
            <div class="about__description">
                Poglej.com je skupina posameznikov, ki so našli način, da QR digitalen meni postane orodje,
                kjer bo gostinski obrat lahko uporabljal stare stvari na nove načine in tako uporabil
                inovativnejši pristop interakcije z gostom “njihova zabava, vaš dodaten čas". <br>
                S to tehnologijo se bodo postavljali novi standardi v gostinstvu,
                mi želimo pomagati vam, da postanete bolj učinkoviti in kreativni!
            </div>
        </panel>

        <div class="info-view__title">Spoznaj ekipo</div>
        <member-card v-for="member in team" :key="member.id" :name="member.name" :description="member.description" :role="member.role" :image-src="member.imageSrc" :is-reversed="member.isReversed" />

        <panel class="conclusion">
            <div class="conclusion__title">Kaj nam je skupnega?</div>
            <div class="conclusion__seperator" />
            <div class="conclusion__description">
                Vsi smo delali v gostinstvu in dobro poznamo prednosti in slabosti s katerim se soočajo naše
                stranke “gostinci” in tudi njihove stranke “gosti”, zato razvijamo orodja, ki bodo zmanjšale
                te vrzeli in omogočile večjo interakcijo in zabavo gostov, a hkrati dali gostincem novo orodje
                za dvig kreativnosti in več časa za kakovostno opravitev postrežbe.
            </div>
        </panel>

        <div class="info-view__title">Primer nalepke</div>
        <img class="sample__img" src="https://imgur.com/4DhwDE3.png">
        <div class="info-view__title">Primer postavka</div>
        <img class="sample__img" src="https://imgur.com/DZHWR7g.png">
    </div>
</template>

<script>
import MemberCard from 'info/components/MemberCard.vue'
import Panel from 'shared/components/furniture/Panel.vue'

export default {
    name: 'InfoView',
    components: {
        MemberCard,
        Panel,
    },
    beforeCreate () {
        this.team = [
            { id: 0, name: 'Matevž Štinjek', role: 'developer', imageSrc: 'https://i.imgur.com/YAo6Cih.jpg', description: 'Matevž Štinjek “IT freak nr. Junior” ...zakaj? Ker je pač najmlajši! Biti najmlajši pa ne govori, da je junior v programiranju, ker je začel po očetovih sledeh, a zdaj že močno utrjuje svojo pot, kot da je na tem področju veteran.' },
            { id: 1, name: 'Boštjan Čečelič', role: 'developer', imageSrc: 'https://i.imgur.com/BB9H4Yd.jpg', description: '“IT freak nr. Zeleni” ...zakaj? Ker je samouk in se je v programiranju našel v poznih letih ampak njegove programerske veščine pa izven tega sveta. Pravi da ga je potegnila neustavljiva želja po premagovanju inženirskih ugank' },
            { id: 2, name: 'Benjamin Herman', role: 'sales', imageSrc: 'https://i.imgur.com/jNUd41m.jpg', description: '“wannabe salesman” ...zakaj? Ker ne zna programirati! ' },
            { id: 3, name: 'Goran Krajnc', role: 'developer', imageSrc: 'https://i.imgur.com/RxEzH3Q.jpg', description: '“IT freak nr. Očka”...zakaj? Ker je očka dveh prekrasnih otrok, punčke Ote in fantka Urha, ki je v programerske vode padel tudi v poznih letih preko napredovanja v službi, kjer so mu zaradi njegove izjemne nadarjenosti ponudili plačali kar vse skupaj 9 let šolanja programiranja.' },
        ]
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/common';

.info-view {
    padding: 8px 12px 16px;

    &__title {
        @include medium-font;
        padding-top: 16px;
        font-size: 32px;
    }
    &__logo {
        color: $orange;
    }
}

.about {
    margin: -16px 0 16px;

    &__title {
        @include medium-font;
        font-size: 20px;
        margin-bottom: 8px;
    }
    &__description {
        @include medium-font;
        font-size: 14px;
    }
}

.conclusion {
    margin: 16px 0;

    &__title {
        @include medium-font;
        text-align: center;
    }
    &__seperator {
        height: 1px;
        margin: 8px 0;
        background-color: $cement;
    }
    &__description {
        font-size: 14px;
    }
}

.sample__img {
    width: 100%;
    object-fit: cover;
    margin-top: 16px;
    border-radius: 16px;
}
</style>
