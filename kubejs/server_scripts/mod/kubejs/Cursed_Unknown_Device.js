const CURSED_ITEM = 'kubejs:unknown_device'
const DAMAGE_INTERVAL = 30  // 3 segundos
const DAMAGE_AMOUNT = 2     // 1 corazón

let cursedItemTimers = {}

ServerEvents.tick(event => {
  const server = event.server
  if (!server) return

  for (const player of server.players) {
    let playerId = player.uuid
    let hasCursed = player.inventory.allItems.some(item => item.id === CURSED_ITEM)

    if (!(playerId in cursedItemTimers)) {
      cursedItemTimers[playerId] = 0
    }

    if (hasCursed) {
      cursedItemTimers[playerId]++

      if (cursedItemTimers[playerId] >= DAMAGE_INTERVAL) {
        // Aplica daño usando attack (puede variar según versión)
        player.attack(DAMAGE_AMOUNT)
        cursedItemTimers[playerId] = 0
      }
    } else {
      cursedItemTimers[playerId] = 0
    }
  }
})


