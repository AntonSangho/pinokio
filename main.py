leds_to_light = 0
analog_value = 0
# 네오픽셀 스트립 초기화 (P1핀에 8개 LED 연결)
strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
# 선택할 색상 정의 (RGB 형식: 빨간색)
RED = 16711680
# MakeCode에서는 색상을 16진수로 표현함
# 메인 루프 설정

def on_forever():
    global analog_value, leds_to_light
    # P0핀에서 아날로그 값 읽기 (0-1023 범위)
    analog_value = pins.analog_read_pin(AnalogPin.P0)
    # 아날로그 값을 0-8 범위로 매핑
    leds_to_light = Math.map(analog_value, 0, 1023, 0, 8)
    leds_to_light = Math.floor(leds_to_light)
    # 소수점 이하 버림
    # 모든 LED 끄기
    strip.clear()
    # 계산된 개수만큼 LED 켜기
    i = 0
    while i <= leds_to_light - 1:
        strip.set_pixel_color(i, RED)
        i += 1
    # 네오픽셀 표시 업데이트
    strip.show()
    # 짧은 대기시간
    basic.pause(100)
basic.forever(on_forever)
