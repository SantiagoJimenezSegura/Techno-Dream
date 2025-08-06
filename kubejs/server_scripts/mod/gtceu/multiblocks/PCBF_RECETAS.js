ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_clay_blast_furnace('pcbf_coke_oven_brick_planks')
        .itemInputs('3x gtceu:compressed_coke_clay', '12x #minecraft:planks')
        .itemOutputs('3x gtceu:coke_oven_brick')
        .duration(600)
    event.recipes.gtceu.primitive_clay_blast_furnace('pcbf_coke_oven_brick_coals')
        .itemInputs('3x gtceu:compressed_coke_clay', '6x #minecraft:coals')
        .itemOutputs('3x gtceu:coke_oven_brick')
        .duration(500)
    event.recipes.gtceu.primitive_clay_blast_furnace('pcbf_coke_oven_brick_coke')
        .itemInputs('6x gtceu:compressed_coke_clay', '6x gtceu:coke_gem')
        .itemOutputs('6x gtceu:coke_oven_brick')
        .duration(420)
    event.recipes.gtceu.primitive_clay_blast_furnace('pcbf_bronze_ingot')
        .itemInputs('gtceu:bronze_dust', '2x #minecraft:coals')
        .itemOutputs('gtceu:bronze_ingot')
        .duration(200)
    
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
      .chancedOutput('gtceu:ash_dust', 1110, 0)
      //.chancedOutput('item_id', base_chance, chance_boost)
      .duration(200)
  }

  pcbf_potting('minecraft:iron_ingot', 'minecraft:raw_iron')
  pcbf_potting('minecraft:iron_ingot', 'gtceu:raw_magnetite')
  pcbf_potting('minecraft:iron_ingot', 'gtceu:raw_pyrite')
  pcbf_potting('minecraft:iron_ingot', 'gtceu:raw_hematite')
  pcbf_potting('minecraft:iron_ingot', 'gtceu:raw_goethite')
  pcbf_potting('minecraft:iron_ingot', 'gtceu:raw_yellow_limonite')
  pcbf_potting('minecraft:iron_ingot', 'gtceu:raw_granitic_mineral_sand')
  pcbf_potting('minecraft:copper_ingot', 'minecraft:raw_copper')
  pcbf_potting('minecraft:copper_ingot', 'gtceu:raw_chalcopyrite')
  pcbf_potting('minecraft:copper_ingot', 'gtceu:raw_tetrahedrite')
  pcbf_potting('minecraft:copper_ingot', 'gtceu:raw_bornite')
  pcbf_potting('minecraft:copper_ingot', 'gtceu:raw_malachite')
  pcbf_potting('minecraft:copper_ingot', 'gtceu:raw_chalcocite')
  pcbf_potting('2x gtceu:tin_ingot', 'gtceu:raw_cassiterite')
  pcbf_potting('2x gtceu:tin_ingot', 'gtceu:raw_cassiterite_sand')
  pcbf_potting('minecraft:gold_ingot', 'minecraft:raw_gold')
  pcbf_potting('gtceu:lead_ingot', 'gtceu:raw_galena')
  pcbf_potting('gtceu:lead_ingot', 'gtceu:raw_lead')
  pcbf_potting('gtceu:nickel_ingot', 'gtceu:raw_pentlandite')
  pcbf_potting('gtceu:nickel_ingot', 'gtceu:raw_garnierite')
  pcbf_potting('gtceu:nickel_ingot', 'gtceu:raw_nickel')



    function pcbf_potting_boosted(output, inputItem, fluid, chancedOut) {
    const recipeId = `pcbf_potting_boosted${inputItem.replace(/[:#\/]/g, '_')}`
    event.recipes.gtceu.primitive_clay_blast_furnace(recipeId)
      .itemInputs('3x #minecraft:coals', inputItem)
      .inputFluids(Fluid.of('minecraft:lava', fluid))
      .itemOutputs(output)
      .chancedOutput(chancedOut, 1500, 0)
      .chancedOutput('gtceu:ash_dust', 1110, 0)
      //.chancedOutput('item_id', base_chance, chance_boost)
      .circuit(2)
      .duration(300)
  }

  pcbf_potting_boosted('2x minecraft:iron_ingot', 'minecraft:raw_iron', 100, 'minecraft:iron_ingot')
  pcbf_potting_boosted('2x minecraft:iron_ingot', 'gtceu:raw_magnetite', 100, 'minecraft:iron_ingot')
  pcbf_potting_boosted('2x minecraft:iron_ingot', 'gtceu:raw_pyrite', 100, 'minecraft:iron_ingot')
  pcbf_potting_boosted('2x minecraft:iron_ingot', 'gtceu:raw_hematite', 100, 'minecraft:iron_ingot')
  pcbf_potting_boosted('2x minecraft:iron_ingot', 'gtceu:raw_goethite', 100, 'minecraft:iron_ingot')
  pcbf_potting_boosted('2x minecraft:iron_ingot', 'gtceu:raw_yellow_limonite', 100, 'minecraft:iron_ingot')
  pcbf_potting_boosted('2x minecraft:iron_ingot', 'gtceu:raw_granitic_mineral_sand', 100, 'minecraft:iron_ingot')
  pcbf_potting_boosted('minecraft:copper_ingot', 'minecraft:raw_copper', 100, 'minecraft:copper_ingot')
  pcbf_potting_boosted('minecraft:copper_ingot', 'gtceu:raw_chalcopyrite', 100, 'minecraft:copper_ingot')
  pcbf_potting_boosted('minecraft:copper_ingot', 'gtceu:raw_tetrahedrite', 100, 'minecraft:copper_ingot')
  pcbf_potting_boosted('minecraft:copper_ingot', 'gtceu:raw_bornite', 100, 'minecraft:copper_ingot')
  pcbf_potting_boosted('minecraft:copper_ingot', 'gtceu:raw_malachite', 100, 'minecraft:copper_ingot')
  pcbf_potting_boosted('minecraft:copper_ingot', 'gtceu:raw_chalcocite', 100, 'minecraft:copper_ingot')
  pcbf_potting_boosted('2x gtceu:tin_ingot', 'gtceu:raw_cassiterite', 100, 'gtceu:tin_ingot')
  pcbf_potting_boosted('2x gtceu:tin_ingot', 'gtceu:raw_cassiterite_sand', 100, 'gtceu:tin_ingot')
  pcbf_potting_boosted('minecraft:gold_ingot', 'minecraft:raw_gold', 100, 'minecraft:gold_ingot')
  pcbf_potting_boosted('gtceu:lead_ingot', 'gtceu:raw_galena', 100, 'gtceu:lead_ingot')
  pcbf_potting_boosted('gtceu:lead_ingot', 'gtceu:raw_lead', 100, 'gtceu:lead_ingot')
  pcbf_potting_boosted('gtceu:nickel_ingot', 'gtceu:raw_pentlandite', 100, 'gtceu:nickel_ingot')
  pcbf_potting_boosted('gtceu:nickel_ingot', 'gtceu:raw_garnierite', 100, 'gtceu:nickel_ingot')
  pcbf_potting_boosted('gtceu:nickel_ingot', 'gtceu:raw_nickel', 100, 'gtceu:nickel_ingot')

  
})