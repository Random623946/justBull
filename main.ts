input.onButtonPressed(Button.A, function () {
    if (Posisjon > -1) {
        syklus += -5
        Posisjon += -1
        basic.clearScreen()
        led.plot(Posisjon, 4)
    }
})
input.onButtonPressed(Button.AB, function () {
    Miss = 0
    Score = 0
})
input.onButtonPressed(Button.B, function () {
    if (Posisjon < 5) {
        Posisjon += 1
        basic.clearScreen()
        led.plot(Posisjon, 4)
    }
})
let DråpeXMidlertidig = 0
let Score = 0
let Miss = 0
let Posisjon = 0
radio.setGroup(1)
Posisjon = 2
let DråpePos = randint(2, 2)
let DråpeX = -1
let syklus = 500
Miss = 0
Score = 0
basic.forever(function () {
    while (Miss <= 2) {
        basic.pause(syklus)
        basic.clearScreen()
        led.plot(Posisjon, 4)
        DråpeX += 1
        led.plot(DråpePos, DråpeX)
        if (DråpeX == 4) {
            if (Posisjon == DråpePos) {
                soundExpression.hello.play()
                Score += 1
            } else {
                soundExpression.sad.play()
                Miss += 1
            }
            DråpeX = -1
            DråpeXMidlertidig = DråpePos
            while (DråpeXMidlertidig == DråpePos) {
                DråpePos = randint(0, 4)
            }
        }
    }
    basic.showNumber(Score)
})
