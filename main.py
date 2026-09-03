leds_to_light = 0
analog_value = 0
strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
RED = 16711680

def on_forever():
    global analog_value, leds_to_light
    analog_value = pins.analog_read_pin(AnalogPin.P0)
    leds_to_light = Math.map(analog_value, 0, 1023, 0, 9)
    leds_to_light = Math.floor(leds_to_light)
    strip.clear()
    i = 0
    while i <= leds_to_light - 1:
        strip.set_pixel_color(i, RED)
        i += 1
    strip.show()
    basic.pause(100)
basic.forever(on_forever)
