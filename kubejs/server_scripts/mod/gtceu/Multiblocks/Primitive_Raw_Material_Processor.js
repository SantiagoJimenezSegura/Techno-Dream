ServerEvents.recipes(event => {
    
  event.recipes.gtceu.primitive_raw_material_processor('ores_from_unprocessed_crude_ore_overworld_copper')
        .itemInputs('kubejs:unknown_device')
        .itemInputs(Item.of('kubejs:overworld_ore_cluster'))
        .inputFluids([
      Fluid.of('gtceu:unprocessed_crude_ore', 4640),
      Fluid.of('minecraft:water', 8000)
])
        .outputFluids(Fluid.of("gtceu:debrominated_water", 180))
        .itemOutputs([
  Item.of('minecraft:raw_iron', 48),
  Item.of('gtceu:raw_chalcopyrite', 64),
  Item.of('gtceu:raw_pyrite', 48),
  Item.of('minecraft:raw_copper', 64)
])
        .itemOutputs(Item.of('kubejs:unknown_device'))
        .duration(1200)
        .circuit(1)
        //.EUt(30) No consume energía, esto será para la versión electrica

  event.recipes.gtceu.primitive_raw_material_processor('ores_from_unprocessed_crude_ore_overworld_copper2')
        .itemInputs('kubejs:unknown_device')
        .itemInputs(Item.of('kubejs:overworld_ore_cluster'))
        .inputFluids([
      Fluid.of('gtceu:unprocessed_crude_ore', 6960),
      Fluid.of('minecraft:water', 8000)
])
        .outputFluids(Fluid.of("gtceu:debrominated_water", 270))
        .itemOutputs([
  Item.of('minecraft:raw_iron', 48*1.5),
  Item.of('gtceu:raw_chalcopyrite', 64*1.5),
  Item.of('gtceu:raw_pyrite', 48*1.5),
  Item.of('minecraft:raw_copper', 64*1.5)
])
        .itemOutputs(Item.of('kubejs:unknown_device'))
        .duration(1800)
        .circuit(2)
})