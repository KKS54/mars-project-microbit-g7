input.onButtonPressed(Button.A, function () {
    basic.showString("transmitter")
})
radio.setGroup(383)
basic.forever(function () {
    radio.sendNumber(input.temperature())
})
