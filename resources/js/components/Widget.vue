<template>

    <Card class="value-widget flex justify-center py-4 overflow-hidden"
          :style="{
            '--background-color-dark': card.backgroundColorDark,
            '--text-color-dark': card.textColorDark,
            '--background-color-light': card.backgroundColorLight,
            '--text-color-light': card.textColorLight,
          }">

        <LoadingView :loading="isLoading" class="flex flex-col justify-center items-center text-center">

            <template v-if="card.icon.trim().startsWith('<svg')">
                <div v-html="card.icon"/>
            </template>

            <Icon v-else :type="card.icon"/>

            <div class="text-xl value-widget__title">{{ card.title }}</div>
            <div class="text-2xl font-bold value-widget__value">{{ card.value }}</div>

        </LoadingView>

    </Card>

</template>

<script>

    export default {
        props: { card: Object },
    }

</script>

<style lang="scss">

    .dark .value-widget {
        background-color: var(--background-color-dark, rgb(var(--colors-gray-800)));
        color: var(--text-color-dark);
    }

    .value-widget {
        background-color: var(--background-color-light, white);
        color: var(--text-color-light);

        svg {
            @apply w-14 h-14 mb-1;
        }
    }

</style>
