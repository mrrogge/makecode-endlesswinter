controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    handleShovel()
})
function handleShovel () {
    if (hero.tileKindAt(TileDirection.Center, assets.tile`myTile0`)) {
        tiles.setTileAt(tiles.getTileLocation(hero.x / 16, hero.y / 16), assets.tile`myTile1`)
        if (faceDir == 0) {
            tiles.setTileAt(tiles.getTileLocation(hero.x / 16, hero.y / 16 - 1), assets.tile`myTile2`)
            tiles.setWallAt(tiles.getTileLocation(hero.x / 16, hero.y / 16 - 1), true)
        } else if (faceDir == 1) {
            tiles.setTileAt(tiles.getTileLocation(hero.x / 16 + 1, hero.y / 16), assets.tile`myTile2`)
            tiles.setWallAt(tiles.getTileLocation(hero.x / 16 + 1, hero.y / 16), true)
        } else if (faceDir == 2) {
            tiles.setTileAt(tiles.getTileLocation(hero.x / 16, hero.y / 16 + 1), assets.tile`myTile2`)
            tiles.setWallAt(tiles.getTileLocation(hero.x / 16, hero.y / 16 + 1), true)
        } else if (faceDir == 3) {
            tiles.setTileAt(tiles.getTileLocation(hero.x / 16 - 1, hero.y / 16), assets.tile`myTile2`)
            tiles.setWallAt(tiles.getTileLocation(hero.x / 16 - 1, hero.y / 16), true)
        } else {
        	
        }
    } else {
    	
    }
}
let faceDir = 0
let hero: Sprite = null
tiles.setTilemap(tilemap`level1`)
hero = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
faceDir = 2
controller.moveSprite(hero)
scene.cameraFollowSprite(hero)
game.onUpdate(function () {
    if (controller.dx() < 0) {
        faceDir = 3
    } else if (controller.dx() > 0) {
        faceDir = 1
    } else if (controller.dy() < 0) {
        faceDir = 0
    } else if (controller.dy() > 0) {
        faceDir = 2
    } else {
    	
    }
})
