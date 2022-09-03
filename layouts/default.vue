<template>
    <div>
        <div class="page-container">
            <div class="page-bg" :style="backgroundProperties"></div>
            <Nuxt class="page-navigation"></Nuxt>
        </div>
        <div class="navs">
            <ul>
                <li>
                    <nuxt-link to="/"><fa :icon="['fas', 'home']" /></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/resume"><fa :icon="['fas', 'file-contract']" /></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/gallery"><fa :icon="['fas', 'images']" /></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/contact"><fa :icon="['fas', 'phone-flip']" /></nuxt-link>
                </li>
            </ul>
        </div>
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