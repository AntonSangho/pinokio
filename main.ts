let Neopixel = 0
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
let color = neopixel.colors(NeoPixelColors.Red)
basic.forever(function () {
    Neopixel = Math.floor(Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 7))
    strip.clear()
    for (let index = 0; index <= Neopixel - 1; index++) {
        strip.setPixelColor(index, color)
    }
    strip.show()
    basic.pause(100)
})
