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
      .outputFluids(Fluid.of(output, 72))
      .chancedOutput('gtceu:ash_dust', 1110, 0)
      //.chancedOutput('item_id', base_chance, chance_boost)
      .duration(300)
  }

  pcbf_potting('gtceu:iron', 'minecraft:raw_iron')
  pcbf_potting('gtceu:iron', 'gtceu:raw_magnetite')
  pcbf_potting('gtceu:iron', 'gtceu:raw_pyrite')
  pcbf_potting('gtceu:iron', 'gtceu:raw_hematite')
  pcbf_potting('gtceu:iron', 'gtceu:raw_goethite')
  pcbf_potting('gtceu:iron', 'gtceu:raw_yellow_limonite')
  pcbf_potting('gtceu:iron', 'gtceu:raw_granitic_mineral_sand')
  pcbf_potting('gtceu:copper', 'minecraft:raw_copper')
  pcbf_potting('gtceu:copper', 'gtceu:raw_chalcopyrite')
  pcbf_potting('gtceu:copper', 'gtceu:raw_tetrahedrite')
  pcbf_potting('gtceu:copper', 'gtceu:raw_bornite')
  pcbf_potting('gtceu:copper', 'gtceu:raw_malachite')
  pcbf_potting('gtceu:copper', 'gtceu:raw_chalcocite')
  pcbf_potting('gtceu:tin', 'gtceu:raw_cassiterite')
  pcbf_potting('gtceu:tin', 'gtceu:raw_cassiterite_sand')
  pcbf_potting('gtceu:gold', 'minecraft:raw_gold')
  pcbf_potting('gtceu:lead', 'gtceu:raw_galena')
  pcbf_potting('gtceu:lead', 'gtceu:raw_lead')
  pcbf_potting('gtceu:nickel', 'gtceu:raw_pentlandite')
  pcbf_potting('gtceu:nickel', 'gtceu:raw_garnierite')
  pcbf_potting('gtceu:nickel', 'gtceu:raw_nickel')



    function pcbf_potting_boosted(output, inputItem) {
    const recipeId = `pcbf_potting_boosted${inputItem.replace(/[:#\/]/g, '_')}`
    event.recipes.gtceu.primitive_clay_blast_furnace(recipeId)
      .itemInputs('3x #minecraft:coals', inputItem)
      .inputFluids(Fluid.of('minecraft:lava', 100))
      .outputFluids(Fluid.of(output, 72*4))
      .chancedOutput('gtceu:ash_dust', 1110, 0)
      //.chancedOutput('item_id', base_chance, chance_boost)
      .circuit(2)
      .duration(400)
  }

  pcbf_potting_boosted('gtceu:iron', 'minecraft:raw_iron')
  pcbf_potting_boosted('gtceu:iron', 'gtceu:raw_magnetite')
  pcbf_potting_boosted('gtceu:iron', 'gtceu:raw_pyrite')
  pcbf_potting_boosted('gtceu:iron', 'gtceu:raw_hematite')
  pcbf_potting_boosted('gtceu:iron', 'gtceu:raw_goethite')
  pcbf_potting_boosted('gtceu:iron', 'gtceu:raw_yellow_limonite')
  pcbf_potting_boosted('gtceu:iron', 'gtceu:raw_granitic_mineral_sand')
  pcbf_potting_boosted('gtceu:copper', 'minecraft:raw_copper')
  pcbf_potting_boosted('gtceu:copper', 'gtceu:raw_chalcopyrite')
  pcbf_potting_boosted('gtceu:copper', 'gtceu:raw_tetrahedrite')
  pcbf_potting_boosted('gtceu:copper', 'gtceu:raw_bornite')
  pcbf_potting_boosted('gtceu:copper', 'gtceu:raw_malachite')
  pcbf_potting_boosted('gtceu:copper', 'gtceu:raw_chalcocite')
  pcbf_potting_boosted('gtceu:tin', 'gtceu:raw_cassiterite')
  pcbf_potting_boosted('gtceu:tin', 'gtceu:raw_cassiterite_sand')
  pcbf_potting_boosted('gtceu:gold', 'minecraft:raw_gold')
  pcbf_potting_boosted('gtceu:lead', 'gtceu:raw_galena')
  pcbf_potting_boosted('gtceu:lead', 'gtceu:raw_lead')
  pcbf_potting_boosted('gtceu:nickel', 'gtceu:raw_pentlandite')
  pcbf_potting_boosted('gtceu:nickel', 'gtceu:raw_garnierite')
  pcbf_potting_boosted('gtceu:nickel', 'gtceu:raw_nickel')



    function pcf_potting(output, inputLiquid) {
    const recipeId = `pcf_potting${inputLiquid.replace(/[:#\/]/g, '_')}`
    event.recipes.gtceu.primitive_clay_solidifier(recipeId)
      .itemInputs('#tconstruct:casts/single_use/ingot')
      .inputFluids(Fluid.of(inputLiquid, 144))
      .itemOutputs(output)
      //.notConsumable() Uso con el molde de oro
      .duration(40)
  }

  pcf_potting('minecraft:iron_ingot', 'gtceu:iron')
  pcf_potting('gtceu:tin_ingot', 'gtceu:tin')
  pcf_potting('minecraft:copper_ingot', 'gtceu:copper')
  pcf_potting('minecraft:gold_ingot', 'gtceu:gold')
  pcf_potting('gtceu:nickel_ingot', 'gtceu:nickel')
  pcf_potting('gtceu:lead_ingot', 'gtceu:lead')



  function pcf_potting_nosingle(output, inputLiquid) {
    const recipeId = `pcf_potting_nosingle${inputLiquid.replace(/[:#\/]/g, '_')}`
    event.recipes.gtceu.primitive_clay_solidifier(recipeId)
      .notConsumable('#tconstruct:casts/multi_use/ingot')
      .inputFluids(Fluid.of(inputLiquid, 144))
      .itemOutputs(output)
      //.notConsumable() Uso con el molde de oro
      .duration(40)
  }

  pcf_potting_nosingle('minecraft:iron_ingot', 'gtceu:iron')
  pcf_potting_nosingle('gtceu:tin_ingot', 'gtceu:tin')
  pcf_potting_nosingle('minecraft:copper_ingot', 'gtceu:copper')
  pcf_potting_nosingle('minecraft:gold_ingot', 'gtceu:gold')
  pcf_potting_nosingle('gtceu:nickel_ingot', 'gtceu:nickel')
  pcf_potting_nosingle('gtceu:lead_ingot', 'gtceu:lead')
})