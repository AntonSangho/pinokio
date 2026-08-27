let leds_to_light = 0
let Neopixel = 0
let analog_value = 0
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
let RED = 16711680
basic.forever(function () {
    analog_value = pins.analogReadPin(DigitalPin.P0)
    Neopixel = Math.floor(Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 8))
    leds_to_light = Math.floor(leds_to_light)
    strip.clear()
    for (let i = 0; i <= leds_to_light - 1; i++) {
        strip.setPixelColor(i, RED)
    }
    strip.show()
    basic.pause(100)
})
