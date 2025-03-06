let leds_to_light = 0
let analog_value = 0
// 네오픽셀 스트립 초기화 (P1핀에 8개 LED 연결)
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
// 선택할 색상 정의 (RGB 형식: 빨간색)
let RED = 16711680
// MakeCode에서는 색상을 16진수로 표현함
// 메인 루프 설정
basic.forever(function () {
    // P0핀에서 아날로그 값 읽기 (0-1023 범위)
    analog_value = pins.analogReadPin(AnalogPin.P0)
    // 아날로그 값을 0-8 범위로 매핑
    leds_to_light = Math.map(analog_value, 0, 1023, 0, 8)
    leds_to_light = Math.floor(leds_to_light)
    // 소수점 이하 버림
    // 모든 LED 끄기
    strip.clear()
    // 계산된 개수만큼 LED 켜기
    for (let i = 0; i <= leds_to_light - 1; i++) {
        strip.setPixelColor(i, RED)
    }
    // 네오픽셀 표시 업데이트
    strip.show()
    // 짧은 대기시간
    basic.pause(100)
})
