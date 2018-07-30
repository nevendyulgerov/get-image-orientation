<!-- Name -->
<h1>
  <a href="https://github.com/nevendyulgerov/get-image-orientation">Get Image Orientation</a>
</h1>

<p>Utility for determining image orientation</p>


## Installation

Run `npm install get-image-orientation --save`

## Usage

```javascript
const getImageOrientation = require('get-image-orientation');
const image = {
    width: 320,
    height: 240
};
const {
    isPortrait, // boolean
    isLandscape, // boolean
    isSquare, // boolean
    widthIncrease, // number/int
    heightIncrease, // number/int
    isSquareLikePortrait, // boolean
    isSquareLikeLandscape // boolean
} = getImageOrientation(image.width, image.height, 10);
```

## Syntax

```javascript
getImageOrientation(320, 240, 10);
```

### Parameters

- width - image width, REQUIRED

- height - image height, REQUIRED

- maxIncrease - max width/height increase in percentage, default = 15

## API
`getImageOrientation` returns the following fields:

### isPortrait

Returns a boolean value. Determines if the image has a portrait orientation. An image has a portrait orientation, when `image.width` > `image.height`.

### isLandscape

Returns a boolean value. Determines if the image has a landscape orientation. An image has a landscape orientation, when `image.width` < `image.height`.

### isSquare

Returns a boolean value. Determines if the image has a square orientation. An image has a square orientation, when `image.width` === `image.height`.

### widthIncrease

Returns a number value (int). The value represents the width increase, compared to `image.height` in percentage, eg `((width - height) * 100) / width`. Width increase is calculated when `isLandscape` is `true`. Otherwise, it returns `0`.

### heightIncrease

Returns a number value (int). The value represents the height increase, compared to `image.width` in percentage, eg `((height - width) * 100) / height`. Height increase is calculated when `isPortrait` is `true`. Otherwise, it returns `0`.

### isSquareLikePortrait

Returns a boolean value. Determines if the image has a square-like portrait orientation. An image has a square-like portrait orientation, when that image `isPortrait` and its `heightIncrease` is less than `maxIncrease`. In other words, this check returns true for near-square portrait images, with height just a bit bigger than its width. This check is useful for differentiating standard portrait images from square-like images.

### isSquareLikeLandscape

Returns a boolean value. Determines if the image has a square-like landscape orientation. An image has a square-like landscape orientation, when that image `isLandscape` and its `widthIncrease` is less than `maxIncrease`. This check returns true for near-square landscape images, with width just a bit bigger than its height. This check is useful for differentiating standard landscape images from square-like images.

## Tests


```javascript
const orientation = getImageOrientation(1600, 900);

// orientation contains:
{
    isPortrait: false
    isLandscape: true
    isSquare: false
    isSquareLikPortrait: false
    isSquareLikeLandscape: false
    widthIncrease: 43
    heightIncrease: 0
}
```

```javascript
const orientation = getImageOrientation(322, 480);

// orientation contains:
{
    isPortrait: true
    isLandscape: false
    isSquare: false
    isSquareLikPortrait: false
    isSquareLikeLandscape: false
    widthIncrease: 0
    heightIncrease: 32
}
```

```javascript
const orientation = getImageOrientation(555, 480);

// orientation contains:
{
    isPortrait: false
    isLandscape: true
    isSquare: false
    isSquareLikPortrait: false
    isSquareLikeLandscape: true
    widthIncrease: 13
    heightIncrease: 0
}
```

```javascript
const orientation = getImageOrientation(413, 480);

// orientation contains:
{
    isPortrait: true
    isLandscape: false
    isSquare: false
    isSquareLikPortrait: true
    isSquareLikeLandscape: false
    widthIncrease: 0
    heightIncrease: 13
}
```

```javascript
const orientation = getImageOrientation(480, 480);

// orientation contains:
{
    isPortrait: false
    isLandscape: false
    isSquare: true
    isSquareLikPortrait: false
    isSquareLikeLandscape: false
    widthIncrease: 0
    heightIncrease: 0
}
```


