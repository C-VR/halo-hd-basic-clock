kitronik_halo_hd.listenForClap(1, 2, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(5000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    kitronik_halo_hd.setTime(18, 7, 0)
})
let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.setBrightness(32)
kitronik_halo_hd.setBuzzerPin()
kitronik_halo_hd.setClapSensitivity(100)
basic.forever(function () {
    haloDisplay.clear()
    haloDisplay.setZipLedColor(kitronik_halo_hd.readTimeForZip(TimeParameter.Seconds), kitronik_halo_hd.colors(ZipLedColors.Red))
    haloDisplay.setZipLedColor(kitronik_halo_hd.readTimeForZip(TimeParameter.Minutes), kitronik_halo_hd.colors(ZipLedColors.Green))
    haloDisplay.setZipLedColor(kitronik_halo_hd.readTimeForZip(TimeParameter.Hours), kitronik_halo_hd.colors(ZipLedColors.Blue))
    haloDisplay.show()
    if (kitronik_halo_hd.readTimeForZip(TimeParameter.Minutes) == 0 && kitronik_halo_hd.readTimeForZip(TimeParameter.Seconds) == 0) {
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    }
})
