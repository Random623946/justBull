def on_button_pressed_a():
    global Posisjon
    if Posisjon > -1:
        Posisjon += -1
        basic.clear_screen()
        led.plot(Posisjon, 4)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Posisjon
    if Posisjon < 5:
        Posisjon += 1
        basic.clear_screen()
        led.plot(Posisjon, 4)
input.on_button_pressed(Button.B, on_button_pressed_b)

Posisjon = 0
Posisjon = 2
DråpePos = randint(0, 4)
Dråpe0 = -1
Dråpe1 = -1
Dråpe2 = -1
Dråpe3 = -1
Dråpe4 = -1

def on_every_interval():
    global Dråpe0, DråpePos, Dråpe1, Dråpe2, Dråpe3, Dråpe4
    basic.clear_screen()
    led.plot(Posisjon, 4)
    if DråpePos == 0:
        Dråpe0 += 1
        led.plot(DråpePos, Dråpe0)
        if Dråpe0 == 4:
            if Posisjon == DråpePos:
                soundExpression.giggle.play()
            else:
                soundExpression.sad.play()
            DråpePos = randint(0, 4)
            Dråpe0 = -1
    if DråpePos == 1:
        Dråpe1 += 1
        led.plot(DråpePos, Dråpe1)
        if Dråpe1 == 4:
            if Posisjon == DråpePos:
                soundExpression.giggle.play()
            else:
                soundExpression.sad.play()
            DråpePos = randint(0, 4)
            Dråpe1 = -1
    if DråpePos == 2:
        Dråpe2 += 1
        led.plot(DråpePos, Dråpe2)
        if Dråpe2 == 4:
            if Posisjon == DråpePos:
                soundExpression.giggle.play()
            else:
                soundExpression.sad.play()
            DråpePos = randint(0, 4)
            Dråpe2 = -1
    if DråpePos == 3:
        Dråpe3 += 1
        led.plot(DråpePos, Dråpe3)
        if Dråpe3 == 4:
            if Posisjon == DråpePos:
                soundExpression.giggle.play()
            else:
                soundExpression.sad.play()
            DråpePos = randint(0, 4)
            Dråpe3 = -1
    if DråpePos == 4:
        Dråpe4 += 1
        led.plot(DråpePos, Dråpe4)
        if Dråpe4 == 4:
            if Posisjon == DråpePos:
                soundExpression.giggle.play()
            else:
                soundExpression.sad.play()
            DråpePos = randint(0, 4)
            Dråpe4 = -1
loops.every_interval(500, on_every_interval)
