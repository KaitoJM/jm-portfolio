<template>
    <div class="main-page">
        <div class="text-container">
            <div class="big-outline">HELLO!</div>
            <div class="rotatable">
                <div class="name">I'M JOHN MARK</div>
                <div class="role">WEB DEVELOPER</div>
            </div>
        </div>
        <div class="space" style="width: 300px"></div>
    </div>
</template>

<style lang="scss" scoped>
/// Stroke font-character
/// @param  {Integer} $stroke - Stroke width
/// @param  {Color}   $color  - Stroke color
/// @return {List}            - text-shadow list
@function stroke($stroke, $color) {
  $shadow: ();
  $from: $stroke*-1;
  @for $i from $from through $stroke {
   @for $j from $from through $stroke {
      $shadow: append($shadow, $i*1px $j*1px 0 $color, comma);
    }
  }
  @return $shadow;
}

.main-page {
    display: flex;
    align-items: center;
    height: 100vh;
    justify-content: center;
    background-image: url('~/static/images/main_bg.webp');
    background-size: 661px;
    background-position-x: 77%;
    background-position-y: 9vh;
    background-repeat: no-repeat;
    box-shadow: 0 41px 50px 1px #000;

    @media(max-width: 1845px) {background-position-x: 83%;}
    @media(max-width: 1613px) {background-position-x: 95%;}
    @media(max-width: 1421px) {background-position-x: 111%;}
    @media(max-width: 1278px) {background-position-x: 120%;}
    @media(max-width: 1207px) {background-position-x: 136%;}
    @media(max-width: 1133px) {background-position-x: 140%;}
    @media(max-width: 1048px) {background-position-x: 136%;}

    // mobile
    @media(max-width: 960px) {
        background-size: 600px;
        background-position-y: 17vh;
        background-position-x: 20vw;
        position: relative;

        .space {
            display: none
        }
    }

    @media(max-width: 608px) {
        background-size: 500px;
        background-position-x: 14vw;
    }

    .text-container {
        width: 460px;

        // mobile
        @media(max-width: 960px) {
            width: 100%;
        }

        .big-outline {
            font-weight: bold;
            font-size: 6em;
            text-shadow: stroke(3, #fff);
            color: #000;

            // mobile
            @media(max-width: 960px) {
                text-align: center;
                margin-top: -300px;
                margin-bottom: 20px;
                font-size: 4em;
                text-shadow: stroke(2, #fff);
            }
        }

        .name {
            text-align: right;
            font-weight: bold;
            font-size: 2.5em;
        }

        .role {
            text-align: right;
            font-size: 1.3em;
        }

        .rotatable {
            // mobile
            @media(max-width: 960px) {
                transform: rotate(-90deg);
                transform-origin: 0% 0%;
                margin-right: 0px;
                position: absolute;
                top: 70vh;
                left: 31vw;
            }

            @media(max-width: 608px) {
                top: 70vh;
                left: 25vw;
                width: 360px;
            }
        }
    }
}
</style>