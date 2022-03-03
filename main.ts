input.onButtonPressed(Button.A, function () {
    if (Posisjon > -1) {
        Posisjon += -1
        basic.clearScreen()
        led.plot(Posisjon, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Posisjon < 5) {
        Posisjon += 1
        basic.clearScreen()
        led.plot(Posisjon, 4)
    }
})
let Posisjon = 0
Posisjon = 2
let DråpePos = randint(2, 2)
let Dråpe0 = -1
let Dråpe1 = -1
let Dråpe2 = -1
let Dråpe3 = -1
let Dråpe4 = -1
let syklus = 500
basic.forever(function () {
    basic.pause(syklus)
    syklus += -2
    basic.clearScreen()
    led.plot(Posisjon, 4)
    if (DråpePos == 0) {
        Dråpe0 += 1
        led.plot(DråpePos, Dråpe0)
        if (Dråpe0 == 4) {
            if (Posisjon == DråpePos) {
                soundExpression.hello.play()
            } else {
                soundExpression.sad.play()
            }
            DråpePos = randint(0, 4)
            Dråpe0 = -1
        }
    }
    if (DråpePos == 1) {
        Dråpe1 += 1
        led.plot(DråpePos, Dråpe1)
        if (Dråpe1 == 4) {
            if (Posisjon == DråpePos) {
                soundExpression.hello.play()
            } else {
                soundExpression.sad.play()
            }
            DråpePos = randint(0, 4)
            Dråpe1 = -1
        }
    }
    if (DråpePos == 2) {
        Dråpe2 += 1
        led.plot(DråpePos, Dråpe2)
        if (Dråpe2 == 4) {
            if (Posisjon == DråpePos) {
                soundExpression.hello.play()
            } else {
                soundExpression.sad.play()
            }
            DråpePos = randint(0, 4)
            Dråpe2 = -1
        }
    }
    if (DråpePos == 3) {
        Dråpe3 += 1
        led.plot(DråpePos, Dråpe3)
        if (Dråpe3 == 4) {
            if (Posisjon == DråpePos) {
                soundExpression.hello.play()
            } else {
                soundExpression.sad.play()
            }
            DråpePos = randint(0, 4)
            Dråpe3 = -1
        }
    }
    if (DråpePos == 4) {
        Dråpe4 += 1
        led.plot(DråpePos, Dråpe4)
        if (Dråpe4 == 4) {
            if (Posisjon == DråpePos) {
                soundExpression.giggle.play()
            } else {
                soundExpression.sad.play()
            }
            DråpePos = randint(0, 4)
            Dråpe4 = -1
        }
    }
})
