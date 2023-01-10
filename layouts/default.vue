<template>
    <div>
        <div class="page-container">
            <div class="page-bg" :style="backgroundProperties"></div>
            <Nuxt class="page-navigation"></Nuxt>
        </div>
        <div class="copyright">
            Copyright © 2022 JuanMarcus Portfolio
        </div>
        <div class="navs">
            <ul>
                <li>
                    <nuxt-link to="/">
                        <fa :icon="['fas', 'home']" />
                        <span>Home</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/resume">
                        <fa :icon="['fas', 'file-contract']" />
                        <span>My Résumé</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/gallery">
                        <fa :icon="['fas', 'images']" />
                        <span>Arts & Gallery</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/contact">
                        <fa :icon="['fas', 'phone-flip']" />
                        <span>Contact me</span>
                    </nuxt-link>
                </li>
            </ul>
        </div>
        <div class="shadower"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('global', [
            "backgroundProperties",
        ]),
    }
}
</script>

<style lang="scss" scoped>
@media print {
    .copyright, .navs, .shadower {
        display: none;
    }
}
</style>