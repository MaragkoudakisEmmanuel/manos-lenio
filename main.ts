input.onGesture(Gesture.Shake, function () {
    basic.showString("leVIO")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Angry)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0)
})
input.onPinPressed(TouchPin.P1, function () {
    music.playMelody("A F B C5 F A E F ", 120)
})
basic.showLeds(`
    # . . # .
    # . . # .
    # # # # .
    # # # # .
    # # # # .
    `)
