ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_clay_blast_furnace('pcbf_coke_oven_brick_planks')
        .itemInputs(
            '3x gtceu:compressed_coke_clay',
            '12x #minecraft:planks'
            )
        .itemOutputs(
            '3x gtceu:coke_oven_brick'
        )
        .duration(600)
    event.recipes.gtceu.primitive_clay_blast_furnace('pcbf_coke_oven_brick_coals')
        .itemInputs(
            '3x gtceu:compressed_coke_clay',
            '6x #minecraft:coals'
            )
        .itemOutputs(
            '3x gtceu:coke_oven_brick'
        )
        .duration(500)
    event.recipes.gtceu.primitive_clay_blast_furnace('pcbf_coke_oven_brick_coke')
        .itemInputs(
            '6x gtceu:compressed_coke_clay',
            '6x gtceu:coke_gem'
            )
        .itemOutputs(
            '6x gtceu:coke_oven_brick'
        )
        .duration(420)
    
})

ServerEvents.recipes(event => {
  function pcbf_potting(output, inputItem) {
    const recipeId = `pcbf_potting${inputItem.replace(/[:#\/]/g, '_')}`
    event.recipes.gtceu.primitive_clay_blast_furnace(recipeId)
      .itemInputs('2x #minecraft:coals', inputItem)
      .itemOutputs(output)
      .duration(100)
  }

  pcbf_potting('minecraft:iron_ingot', '#forge:ores/iron')
  pcbf_potting('minecraft:iron_ingot', 'minecraft:raw_iron')
  pcbf_potting('minecraft:iron_ingot', '#forge:ores/magnetite')
  pcbf_potting('minecraft:iron_ingot', 'gtceu:raw_magnetite')
  pcbf_potting('minecraft:iron_ingot', '#forge:ores/pyrite')
  pcbf_potting('minecraft:iron_ingot', 'gtceu:raw_pyrite')
  
})