<template>

    <widget :meta="meta">

        <template
            v-slot="{ value: { currentValue, previousValue, previousValuePercentage, isPositive } }">

            <div class="flex flex-col h-full justify-between leading-none">

                <div class="text-base text-80 font-bold">
                    {{ options.title }}
                </div>

                <div class="flex flex-col text-4xl justify-center mt-2">

                    <div class="flex items-center whitespace-no-wrap">

                        {{ options.prefix }} {{ currentValue ? currentValue : options.no_current_data }}

                        <span v-if="options.suffix" class="ml-2 text-sm font-bold text-80">
                            {{ options.suffix }}
                        </span>

                    </div>

                </div>

                <div class="flex mt-2 items-center text-80 font-bold">

                    <div
                        v-if="previousValuePercentage === 0 && currentValue !== undefined && previousValue !== undefined">
                        {{ options.labels['No Increase'] }}
                    </div>

                    <template v-else-if="previousValuePercentage">

                        <tooltip trigger="hover" class="cursor-pointer">

                            <div class="flex items-center">

                                <svg v-if="isPositive" width="20" height="12"
                                     class="rotate-180 text-success fill-current mr-2">
                                    <path
                                        d="M2 3a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1h8a1 1 0 0 0 0-2H3.414L9 4.414l3.293 3.293a1 1 0 0 0 1.414 0l6-6A1 1 0 0 0 18.293.293L13 5.586 9.707 2.293a1 1 0 0 0-1.414 0L2 8.586V3z"></path>
                                </svg>

                                <svg v-else width="20" height="12" class="text-danger fill-current mr-2">
                                    <path
                                        d="M2 3a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1h8a1 1 0 0 0 0-2H3.414L9 4.414l3.293 3.293a1 1 0 0 0 1.414 0l6-6A1 1 0 0 0 18.293.293L13 5.586 9.707 2.293a1 1 0 0 0-1.414 0L2 8.586V3z"></path>
                                </svg>

                                {{ previousValuePercentage }}%
                                {{ isPositive ? options.labels['Increase'] : options.labels['Decrease'] }}

                            </div>

                            <tooltip-content slot="content">

                                <div class="flex">

                                    {{ options.labels['Previous Value'] }} {{ options.prefix }} {{ previousValue }}

                                    <span v-if="options.suffix">{{ options.suffix }}</span>

                                </div>

                            </tooltip-content>

                        </tooltip>


                    </template>

                    <div v-else-if="currentValue === undefined">
                        {{ options.labels['No Current Data'] }}
                    </div>

                    <div v-else>
                        {{ options.labels['No Prior Data'] }}
                    </div>

                </div>

            </div>

        </template>

    </widget>

</template>

<script>

    // interface Meta {
    // }

    // interface Coordinates {
    //     width: number,
    //     height: number,
    //     x: number,
    //     y: number
    // }

    export default {
        props: {
            meta: { type: Object, default: null },
            card: { type: Object, default: null },
            coordinates: { type: Object }
        },
        computed: {
            options() {
                if (this.meta) {
                    return this.meta.options
                }
                return this.card.options
            }
        }
    }

</script>
