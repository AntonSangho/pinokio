# 코드

## 알고리즘 설명

이 프로젝트는 이렇게 작동해요:

1. 계속 반복해서 센서의 값을 확인해요
2. 가변저항(또는 슬라이더)의 값을 읽어요 (0부터 1023 사이의 숫자가 나와요)
3. 이 값을 0부터 8 사이의 숫자로 바꿔요 (LED 8개를 켜기 위해)
4. 모든 LED를 일단 꺼요
5. 계산한 숫자만큼 LED를 빨간색으로 켜요
6. 이 과정을 계속 반복해서 가변저항을 돌리거나 밀면 LED 개수가 바뀌도록 해요

## 블록코딩

이 그림처럼 블록을 연결하면 돼요:

![code](/img/blockcode.png)

## 텍스트코딩 (Python)

```python
from microbit import *
import neopixel

# 네오픽셀 스트립 초기화 (P1핀에 8개 LED 연결)
strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)

# 선택할 색상 정의 (RGB 형식: 빨간색)
RED = 0xff0000  # MakeCode에서는 색상을 16진수로 표현함

def on_forever():
    # P0핀에서 아날로그 값 읽기 (0-1023 범위)
    analog_value = pins.analog_read_pin(AnalogPin.P0)
    
    # 아날로그 값을 0-8 범위로 매핑
    leds_to_light = Math.map(analog_value, 0, 1023, 0, 8)
    leds_to_light = Math.floor(leds_to_light)  # 소수점 이하 버림
    
    # 모든 LED 끄기
    strip.clear()
    
    # 계산된 개수만큼 LED 켜기
    for i in range(leds_to_light):
        strip.set_pixel_color(i, RED)
    
    # 네오픽셀 표시 업데이트
    strip.show()
    
    # 짧은 대기시간
    basic.pause(100)

# 메인 루프 설정
basic.forever(on_forever)
```

## 코드 업로드하는 방법

1. 컴퓨터에서 [MakeCode 편집기](https://makecode.microbit.org/)를 열어요.
2. "새 프로젝트" 버튼을 눌러요.
3. 왼쪽 메뉴에서 "고급"을 클릭한 다음 "확장기능"을 선택해요.
4. "neopixel"을 검색하고 선택해요.
5. 블록을 그림처럼 연결해요.
6. 프로젝트 이름을 넣고 저장해요.
7. "다운로드" 버튼을 눌러서 파일을 컴퓨터에 저장해요.
8. USB 케이블로 마이크로비트를 컴퓨터에 연결해요.
9. 다운로드한 파일을 마이크로비트 드라이브에 복사해요.
10. 코드가 마이크로비트에 올라가면 자동으로 실행돼요.

## 코드 바꿔보기

1. **다른 색상 사용하기**:
   - 빨간색(RED) 대신 다른 색을 사용해보세요.
   
2. **LED 순서 바꾸기**:
   - LED가 반대 방향으로 켜지게 해보세요.

3. **속도 바꾸기**:
   - LED업데이트 속도를 조절해보세요.

4. **색상 변화 추가하기**:
   - 값이 커질수록 색상이 빨간색에서 파란색으로 변하게 해보세요.

## 문제 해결하기

- **LED가 전혀 안 켜져요**: 
  - 네오픽셀 확장기능이 추가되었는지 확인하세요.
  - 전선이 P1 핀에 제대로 연결되었는지 확인하세요.
  
- **값이 제대로 읽히지 않아요**:
  - P0 핀에 가변저항이 제대로 연결되었는지 확인하세요.
  - 코드에서 `analog_read_pin`이 P0을 읽고 있는지 확인하세요.
  
- **LED가 깜빡이거나 불안정해요**:
  - 전선 연결이 느슨하지 않은지 확인하세요.
  - 건전지가 충분히 충전되어 있는지 확인하세요.
