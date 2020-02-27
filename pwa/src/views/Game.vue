<template>
    <div class="container">

        <loading :active.sync="isLoading" :is-full-page="true"></loading>

        <div v-if="! isLoading">
            <!-- result-->
            <DiceResultList ref="resultList"/>
            <!-- delete link-->
            <div class="text-right mt-5">
                <b-btn v-on:click="deleteGame" class="btn btn-secondary btn-sm"
                >
                    <b-icon-trash></b-icon-trash>
                </b-btn>
            </div>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    import DiceResultList from '@/components/DiceResultList.vue'
    import Loading from "vue-loading-overlay";

    export default {
        name: 'diceResultList',
        components: {
            DiceResultList,
            Loading
        },
        created () {
            this.$store.dispatch('game/load', this.$route.params.gameId)
                .then(() => {
                   this.$refs.resultList.updateStat()
                })
        },
        computed: {
            isLoading() {
                return this.$store.getters['game/isLoading']
            }
        },
        methods: {
            deleteGame: function () {
                let currentGame = this.$store.getters['game/currentGame']
                this.$store.dispatch('game/deleteGame', currentGame)
                    .then(() => {
                        this.$router.push({ name: 'gameList'})
                    })
            }
        }
    }
</script>
