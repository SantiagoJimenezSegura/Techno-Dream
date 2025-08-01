priority: 300

ServerEvents.recipes(event => {

//TYPE
event.remove({ type: 'minecraft:blasting'})
event.remove({ type: 'bloodmagic:arcfurnace'})
event.remove({ type: 'twilightforest:uncrafting'})

//ID
event.remove({ id: 'tconstruct:common/basalt_blast_furnace'})
event.remove({ id: 'jei:/tconstruct/smeltery/melting/metal/iron/ingot_5'})
event.remove({ id: 'minecraft:packed_mud' })
event.remove({ id: 'minecraft:mud_bricks' })
event.remove({ id: 'gtceu:smelting/smelt_dust_mud_mixture_to_ingot' })
event.remove({ id: 'gtceu:smelting/coke_oven_brick' })
event.remove({ id: 'gtceu:alloy_smelter/coke_oven_brick' })
event.remove({ id: 'gtceu:smelting/brick_from_compressed_clay' })
event.remove({ id: 'gtceu:alloy_smelter/form_brick' })
event.remove({ id: 'gtceu:smelting/smelt_dust_charred_mud_to_ingot' })
event.remove({ id: 'gtceu:smelting/smelt_dust_bronze_to_ingot'})
event.remove({ id: 'forestry:ingot_bronze_alloying'})
event.remove({ id: 'gtceu:shaped/steam_pressurizer' })
event.remove({ id: 'gtceu:steam_pressurizer/hp_steam' })
event.remove({ id: 'twilightforest:uncrafting_table' })
event.remove({ id: 'gtceu:shapeless/compressed_clay' })

//SALIDA
event.remove({ output: 'create:encased_fan' })

//MOD
event.remove({ mod: 'laserio' })
event.remove({ mod: 'megacells' })
event.remove({ mod: 'buildinggadgets2' })
event.remove({ mod: 'functionalstorage' })
event.remove({ mod: 'toms_storage' })
event.remove({ mod: 'gtse' })
event.remove({ id: 'gtceu:shaped/processing_array' })

})

