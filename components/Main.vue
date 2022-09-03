<template>
    <div class="main-page">
        <div class="text-container">
            <div class="big-outline">HELLO!</div>
            <div class="name">I'M JOHN MARK</div>
            <div class="role">WEB DEVELOPER</div>
        </div>
        <div class="space" style="width: 300px"></div>
    </div>
</template>

.<style lang="scss" scoped>
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
    height: 100%;
    justify-content: center;

    .text-container {
        width: 460px;

        .big-outline {
            font-weight: bold;
            font-size: 6em;
            // text-shadow:  -3px 0 #fff, 0 3px #fff, 3px 0 #fff, 0 -3px #fff;
            text-shadow: stroke(3, #fff);
            color: #000;
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
    }
}
</style>