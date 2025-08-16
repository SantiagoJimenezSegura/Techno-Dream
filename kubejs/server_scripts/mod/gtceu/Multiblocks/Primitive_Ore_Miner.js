ServerEvents.recipes(event => {
    
  event.recipes.gtceu.primitive_ore_miner('unprocessed_crude_ore_from_miner')
        .itemInputs('kubejs:unknown_device')
        .perTick(true)
        .inputFluids([
      Fluid.of('minecraft:lava', 10),
      Fluid.of('gtceu:drilling_fluid', 20)])
        .perTick(false)
        .outputFluids(Fluid.of("gtceu:unprocessed_crude_ore", 580))
        .itemOutputs(Item.of('kubejs:overworld_ore_cluster'))
        .itemOutputs(Item.of('kubejs:unknown_device'))
        .duration(400)
        //.EUt(30) No consume energía, esto será para la versión electrica
        .dimension('minecraft:overworld')



})
