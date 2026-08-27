Neopixel = 0
strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
color = neopixel.colors(NeoPixelColors.RED)

def on_forever():
    global Neopixel
    Neopixel = Math.floor(Math.map(pins.analog_read_pin(AnalogPin.P0), 0, 1023, 0, 7))
    strip.clear()
    index = 0
    while index <= Neopixel - 1:
        strip.set_pixel_color(index, color)
        index += 1
    strip.show()
    basic.pause(100)
basic.forever(on_forever)
