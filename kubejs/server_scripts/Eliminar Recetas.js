priority: 300

ServerEvents.recipes(event => {	

event.remove({id: 'forestry:oak_door'})

})

ServerEvents.recipes(event => {
event.remove({ type: 'minecraft:blasting' })

event.remove({id: 'tconstruct:common/basalt_blast_furnace'})

event.remove({id: 'jei:/tconstruct/smeltery/melting/metal/iron/ingot_5'})

event.remove({output: 'minecraft:iron_ingot', type: 'minecraft:smelting'})
})