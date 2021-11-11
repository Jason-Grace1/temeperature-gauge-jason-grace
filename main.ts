let temperature = 0
basic.forever(function () {
    temperature = input.temperature()
    if (temperature < 20) {
        temperature = 20
    } else if (temperature > 35) {
        temperature = 35
    }
    pins.servoWritePin(AnalogPin.P0, pins.map(
    temperature,
    20,
    35,
    0,
    180
    ))
})
