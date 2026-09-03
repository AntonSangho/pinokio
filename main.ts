let i = 0
let leds_to_light = 0
let analog_value = 0
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
let RED = neopixel.colors(NeoPixelColors.Red)
basic.forever(function () {
    analog_value = pins.analogReadPin(AnalogPin.P0)
    leds_to_light = Math.map(analog_value, 0, 1023, 0, 9)
    leds_to_light = Math.floor(leds_to_light)
    strip.clear()
    i = 0
    while (i <= leds_to_light - 1) {
        strip.setPixelColor(i, RED)
        i += 1
    }
    strip.show()
    basic.pause(100)
})
