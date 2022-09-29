<template>
    <div class="normal-page">
        <h1>Arts & Gallery</h1>
        <div class="gallery-grid">
            <a 
                :href="image.link"  
                target="_blank" 
                class="item" 
                v-for="(image, indx) in arts" 
                :key="'art-' + indx"
                @click="clickImage(image)"
            >
                <img :src="image.img" alt="">
                <div class="img-detail">
                    <strong>{{ image.name }}</strong>
                    <p v-if="image.summary">{{ image.summary }}</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arts: [
                {
                    img: "/images/gallery/batch2011.webp",
                    name: "RLMSF Batch 2011",
                    link: "https://www.pinterest.ph/pin/768215648938820479/?nic_v3=1a3am2z8R",
                },
                {
                    img: "/images/gallery/compass.webp",
                    name: "Traveler",
                    link: "https://www.pinterest.ph/pin/768215648947867914/?nic_v3=1a3am2z8R"
                },
                {
                    img: "/images/gallery/carpe-diem.webp",
                    name: "Carpe Diem",
                    link: "https://www.pinterest.ph/pin/768215648938820381/?nic_v3=1a3am2z8R"
                },
                {
                    img: "/images/gallery/engine.webp",
                    name: "Engine T-shirt Print",
                    link: "https://www.pinterest.ph/pin/768215648944815853/?nic_v3=1a3am2z8R"
                },
                {
                    img: "/images/gallery/halaba-atop.webp",
                    name: "Halaba-Atop",
                    link: "https://www.pinterest.ph/pin/768215648944815952/?nic_v3=1a3am2z8R"
                },
                {
                    img: "/images/gallery/talkischeap.webp",
                    name: "Talk is Cheap",
                    link: "https://www.pinterest.ph/pin/768215648944815888/?nic_v3=1a3am2z8R"
                },
                {
                    img: "/images/gallery/onepiececap.webp",
                    name: "Back at it Again",
                    link: "https://www.pinterest.ph/pin/768215648953200609/?nic_v3=1a3am2z8R"
                },
            ]
        }
    },
    head() {
		return {
			title: "Gallery - Juan Marcus",
		}
	},
    methods: {
        clickImage(img) {
            this.$gtm.push({event: 'art_view', ...{
                pinterest_link: img.link,
                image_name: img.name
            }})
        }
    }
}
</script>

<style lang="scss" scoped>
.gallery-grid {
    width: 100%;
    gap: 15px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: masonry;

    //mobile
    @media(max-width: 960px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 435px) {
        grid-template-columns: repeat(2, 1fr);
    }

    .item {
        display: block;
        text-decoration: none;

        img {
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
        
        .img-detail {
            background-color: #ffffff69;
            border-radius: 10px;
            overflow: hidden;
            margin-top: 5px;
            box-sizing: border-box;
            padding: 10px;
            text-align: center;
            font-size: 0.8em;

            strong {

            }

            p {
                margin: 0px;
            }
        }
    }
}
</style>