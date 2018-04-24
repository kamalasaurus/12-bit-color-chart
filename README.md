# 12-bit-color-chart
[source for color swatches](http://rangevoting.org/ColorCode.html)

Yo, I found a source for 12-bit colors.  These are often expressed as
3-digit hexadecimal.  I went ahead and converted them to an array of
arrays from 0-255 and then again to Processing syntax.  I'm including
the conversion I did here for your benefit:

```javascript

let colorArrays = Array.from(document.querySelectorAll('td'))
  .map((_) => {
    return _
      .getAttribute('bgcolor')
      .replace('#', '')
      .split('')
      .map(hex => parseInt(hex, 16) * 17);
      // 17 instead of 16... this was the fencepost issue I ran into at
      // BabyCastles.  Whoops.
  });

JSON.stringify(colorArrays);

```

And then to convert the array-of-arrays into Processing syntax in node:

```javascript

const fs = require('fs');

let colorArrays = fs.readFileSync('colorArrays.json', 'utf-8');
let processingArrays = colorArrays.replace(/\[/g, '{').replace(/\]/g, '}');

fs.writeFileSync('./processingArrays.txt', processingArrays);

```

I used javascript for simplicity, but you can do this kind of stuff in
any language you prefer.  I do need to clarify though:

This is not in the right order.  You need to sort these codes from most
saturated-red to most dark-violet I believe.  But this is just an
example.  You really need to get the gamut of your chromavision thing
and split that 4096-ways.

