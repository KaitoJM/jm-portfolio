<template>
    <div>
        <div class="page-container">
            <Nuxt></Nuxt>
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