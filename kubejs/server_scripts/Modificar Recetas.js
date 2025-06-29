ServerEvents.recipes(event => {
    event.replaceInput({ type: 'gtceu:primitive_blast_furnace' }, '#forge:dust/coal', 'gtceu:coal_dust') 
})

ServerEvents.recipes(event => {
    event.replaceInput({ type: 'gtceu:primitive_blast_furnace' }, '#forge:storage_block/charcoal', 'gtceu:charcoal_block') 
})