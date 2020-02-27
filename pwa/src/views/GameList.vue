<template>
    <div class="container">

        <h1>Parties</h1>

        <div class="col-12 mb-4 ">
            <router-link
                    :to="{ name: 'new-game'}"
                    class="btn btn-success"
            >
                Démarrer une nouvelle partie
            </router-link>
        </div>

        <div v-if="! isLoading">
            <div v-if="games && games.length > 0">
                <p>ou charger une des <span>{{games.length}}</span> parties enregistrées</p>
                <b-list-group>
                    <b-list-group-item href="#" class="flex-column align-items-start text-left" v-for="game in games"
                                       :key="'game-'+game.id">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{{game.name }}</h5>
                            <router-link
                                    :to="{ name: 'game', params: { gameId: game.id }}"
                                    class="btn btn-primary"
                            >
                                Voir
                            </router-link>

                        </div>
                        <small>{{game.createdAt | formatDate }}</small>
                    </b-list-group-item>
                </b-list-group>

                <!--<b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>-->
                <nav aria-label="Page navigation" v-if="view">

                    <b-btn v-on:click="switchPage(view['hydra:first'] ? view['hydra:first'] : null)"
                           :class="{ disabled: !view['hydra:previous'] }"
                           v-bind:disabled="!view['hydra:previous']"
                           class="btn btn-primary">
                        <span aria-hidden="true">&lArr;</span> First
                    </b-btn>

                    &nbsp;<b-btn
                        v-on:click="switchPage(!view['hydra:previous'] || view['hydra:previous'] === view['hydra:first'] ? view['hydra:first'] : view['hydra:previous'])"
                        :class="{ disabled: !view['hydra:previous'] }"
                        v-bind:disabled="!view['hydra:previous']"
                        class="btn btn-primary">
                    <span aria-hidden="true">&larr;</span> Previous
                    </b-btn>


                    <b-btn v-on:click="switchPage(view['hydra:next'] ? view['hydra:next'] : '#')"
                           :class="{ disabled: !view['hydra:next'] }"
                           v-bind:disabled="!view['hydra:next']"
                           class="btn btn-primary">
                        Next <span aria-hidden="true">&rarr;</span>
                    </b-btn>

                    <b-btn v-on:click="switchPage(view['hydra:last'] ? view['hydra:last'] : '#')"
                           :class="{ disabled: !view['hydra:next'] }"
                           v-bind:disabled="!view['hydra:next']"
                           class="btn btn-primary">
                        Last <span aria-hidden="true">&rArr;</span>
                    </b-btn>

                </nav>
            </div>
            <div v-else>
                <p>
                    Aucune partie sauvegardée
                </p>
            </div>
        </div>
        <div v-else>
            <loading :active.sync="isLoading" :is-full-page="true"></loading>
        </div>


    </div>
</template>

<script>

    import Loading from "vue-loading-overlay";

    export default {
        name: 'gameList',
        components: {Loading},
        props: {
            perPage: {
                type: Number,
                default: 5
            }
        },
        data: () => {
            return {
                currentPage: 1,
            }
        },
        mounted() {
            this.$store.dispatch('game/loadAll')
        },
        computed: {
            isLoading() {
                return this.$store.getters['game/isLoading']
            },
            games() {
                const games = this.$store.getters['game/games'];
                return games['hydra:member']
            },
            totalRows: function () {
                const games = this.$store.getters['game/games'];
                return games['hydra:totalItems']
            },
            view() {
                const games = this.$store.getters['game/games'];
                return games['hydra:view']
            }
        },
        methods: {
            switchPage: function (page) {
                console.log(page)
                this.$store.dispatch('game/loadAll', page)
            }
        }
    }
</script>
