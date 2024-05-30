info.onCountdownEnd(function () {
    info.stopCountdown()
    game.gameOver(false)
})
info.onLifeZero(function () {
    info.stopCountdown()
    game.gameOver(false)
})
info.player2.onLifeZero(function () {
    game.gameOver(true)
})
music.stopAllSounds()
music.setVolume(82)
music.ringTone(175)
music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
game.setGameOverPlayable(false, music.melodyPlayable(music.jumpDown), false)
game.setGameOverEffect(true, effects.bubbles)
game.setGameOverScoringType(game.ScoringType.HighScore)
game.onUpdate(function () {
    game.reset()
})
forever(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.blizzard, 400)
})
