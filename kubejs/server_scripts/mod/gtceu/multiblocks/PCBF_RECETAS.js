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
  
  ///RECETA CONTROLADOR///
      event.shaped(
  Item.of('gtceu:primitive_clay_blast_furnace', 1), 
  [
    'ADA',
    'ABA', 
    'CCC'
  ],
  {
    A: 'minecraft:mud_bricks',
    B: '#forge:tools/mallets',
    C: 'minecraft:bricks',
    D: 'gtceu:charred_mud_gear'
  }
)
  
    function pcbf_potting(output, inputItem) {
    const recipeId = `pcbf_potting${inputItem.replace(/[:#\/]/g, '_')}`
    event.recipes.gtceu.primitive_clay_blast_furnace(recipeId)
      .itemInputs('2x #minecraft:coals', inputItem)
      .itemOutputs(output)
      .chancedOutput('gtceu:small_iron_dust', 2500, 0)
      .chancedOutput('gtceu:ash_dust', 1110, 0)
      //.chancedOutput('item_id', base_chance, chance_boost)
      .duration(200)
  }

  pcbf_potting('minecraft:iron_ingot', '#forge:ores/iron')
  pcbf_potting('minecraft:iron_ingot', 'minecraft:raw_iron')
  pcbf_potting('minecraft:iron_ingot', '#forge:ores/magnetite')
  pcbf_potting('minecraft:iron_ingot', 'gtceu:raw_magnetite')
  pcbf_potting('minecraft:iron_ingot', '#forge:ores/pyrite')
  pcbf_potting('minecraft:iron_ingot', 'gtceu:raw_pyrite')



    function pcbf_potting_boosted(output, inputItem, fluid) {
    const recipeId = `pcbf_potting_boosted${inputItem.replace(/[:#\/]/g, '_')}`
    event.recipes.gtceu.primitive_clay_blast_furnace(recipeId)
      .itemInputs('3x #minecraft:coals', inputItem)
      .inputFluids(Fluid.of('minecraft:lava', fluid))
      .itemOutputs(output)
      .chancedOutput('minecraft:iron_ingot', 1500, 0)
      .chancedOutput('gtceu:ash_dust', 1110, 0)
      //.chancedOutput('item_id', base_chance, chance_boost)
      .circuit(3)
      .duration(300)
  }

  pcbf_potting_boosted('2x minecraft:iron_ingot', '#forge:ores/iron', 100)
  
})