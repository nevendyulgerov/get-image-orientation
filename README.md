<!-- Name -->
<a href="https://github.com/nevendyulgerov/get-image-orientation">
    <h1>
        Get Image Orientation
    </h1>
</a>

<p>Utility for determining image orientation and aspect ratio.</p>


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
    aspect, // number/int/float
    isPortrait, // boolean
    isLandscape, // boolean
    isSquare, // boolean
    widthIncrease, // number/int
    heightIncrease, // number/int
    isSquareLikePortrait, // boolean
    isSquareLikeLandscape // boolean
    ratio // string
} = getImageOrientation(image.width, image.height, 10);
```

## Syntax

```javascript
getImageOrientation(320, 240, 10);
```

### Parameters

- width - image width, REQUIRED

- height - image height, REQUIRED

- maxIncrease - max width/height increase in percentage, default = 15. `maxIncrease` is used for determining `isSquareLikePortrait` and `isSquareLikeLandscape` flags.

## API
`getImageOrientation` returns the following fields:

### aspect
`Number (int/float)`. This value represents the aspect of the image. It refers to the image height, when that image has a landscape orientation. When the image has a portrait orientation, it refers to its height. Aspect is calculated by the formula `image.width / image.height`.

### ratio
`String`. Represents the closest matching aspect ratio for the image. Available ratios are `2/3`, `1/1`, `4/3`, `16/10`, `5/3`, `16/9`, `21/9`.

### isPortrait

`Boolean`. Determines if the image has a portrait orientation. An image has a portrait orientation, when `image.width` > `image.height`.

### isLandscape

`Boolean`. Determines if the image has a landscape orientation. An image has a landscape orientation, when `image.width` < `image.height`.

### isSquare

`Boolean`. Determines if the image has a square orientation. An image has a square orientation, when `image.width` === `image.height`.

### widthIncrease

`Number (int)`. This value represents the width increase, compared to `image.height` in percentage, eg `((width - height) * 100) / width`. Width increase is calculated when `isLandscape` is `true`. Otherwise, it returns `0`.

### heightIncrease

`Number (int)`. This value represents the height increase, compared to `image.width` in percentage, eg `((height - width) * 100) / height`. Height increase is calculated when `isPortrait` is `true`. Otherwise, it returns `0`.

### isSquareLikePortrait

`Boolean`. Determines if the image has a square-like portrait orientation. An image has a square-like portrait orientation, when that image `isPortrait` and its `heightIncrease` is less than or equal to `maxIncrease`. In other words, this check returns true for near-square portrait images, with height just a bit bigger than their width. This check is useful for differentiating standard portrait images from square-like images.

### isSquareLikeLandscape

`Boolean`. Determines if the image has a square-like landscape orientation. An image has a square-like landscape orientation, when that image `isLandscape` and its `widthIncrease` is less than or equal to `maxIncrease`. This check returns true for near-square landscape images, with width just a bit bigger than their height. This check is useful for differentiating standard landscape images from square-like images.

## Tests


```javascript
const orientation = getImageOrientation(1600, 900);

// orientation contains:
{
    aspect: 1.78,
    isPortrait: false,
    isLandscape: true,
    isSquare: false,
    isSquareLikePortrait: false,
    isSquareLikeLandscape: false,
    widthIncrease: 43,
    heightIncrease: 0,
    ratio: '16/9'
}
```

```javascript
const orientation = getImageOrientation(322, 480);

// orientation contains:
{
    aspect: 0.67,
    isPortrait: true,
    isLandscape: false,
    isSquare: false,
    isSquareLikePortrait: false,
    isSquareLikeLandscape: false,
    widthIncrease: 0,
    heightIncrease: 32,
    ratio: '2/3'
}
```

```javascript
const orientation = getImageOrientation(555, 480);

// orientation contains:
{
    aspect: 1.16,
    isPortrait: false,
    isLandscape: true,
    isSquare: false,
    isSquareLikePortrait: false,
    isSquareLikeLandscape: true,
    widthIncrease: 13,
    heightIncrease: 0,
    ratio: '1/1'
}
```

```javascript
const orientation = getImageOrientation(413, 480);

// orientation contains:
{
    aspect: 0.86,
    isPortrait: true,
    isLandscape: false,
    isSquare: false,
    isSquareLikePortrait: true,
    isSquareLikeLandscape: false,
    widthIncrease: 0,
    heightIncrease: 13,
    ratio: '1/1'
}
```

```javascript
const orientation = getImageOrientation(480, 480);

// orientation contains:
{
    aspect: 1,
    isPortrait: false,
    isLandscape: false,
    isSquare: true,
    isSquareLikePortrait: false,
    isSquareLikeLandscape: false,
    widthIncrease: 0
    heightIncrease: 0,
    ratio: '1/1'
}
```


