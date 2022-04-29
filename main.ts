let distancia = 0
basic.showLeds(`
    . . # . .
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    `)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    if (distancia < 20) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        basic.pause(1000)
    }
})
