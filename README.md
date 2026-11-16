# metaclear

A browser-only tool that shows the hidden metadata in your photos and removes it. Nothing is uploaded; everything happens on your device.

Live: https://metaclear-three.vercel.app/

## How it works

- You pick an image with a file input, and the browser reads it locally without sending it anywhere.
- The exifr library reads the hidden data inside the file (camera model, timestamps, GPS location) and the page displays it.
- The image is redrawn onto an HTML canvas, which holds only pixels, and exporting the canvas creates a new PNG with none of that data.

## Built with

HTML, CSS, JavaScript, exifr

## Limitations

- The cleaned file is always a PNG, so it can be larger than the original JPEG.

