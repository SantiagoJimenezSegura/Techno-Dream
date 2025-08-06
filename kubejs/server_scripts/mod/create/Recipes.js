ServerEvents.recipes(event => {
  
  // COMPACTING // Syntax: compacting(output[], input[])
  // Compacting uses the Mechanical Press, Basin and optionally a Blaze Burner.
  //event.recipes.create.compacting('minecraft:diamond', 'minecraft:coal_block').heated() Ejemplos, checar kubejs wiki => addons Create
  //event.recipes.create.compacting('minecraft:diamond', 'minecraft:coal_block').superheated() Ejemplos
  //event.recipes.create.compacting([Fluid.water(10), 'minecraft:dead_bush'], ['#minecraft:saplings', '#minecraft:saplings']) Ejemplos
  //event.recipes.create.compacting(['minecraft:diamond', Item.of('minecraft:diamond').withChance(0.3)], 'minecraft:coal_block') Ejemplos
  event.recipes.create.compacting(Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'), [Fluid.water(1000), 'gtceu:fluid_cell']) // 1. Resultado, 2. Entrada/s
  event.recipes.create.compacting('gtceu:wrought_iron_ingot', [Fluid.lava(80), '10x gtceu:wrought_iron_nugget'])

  // FILLING // Syntax: filling(output, input[])
  // Filling use the spout
  event.recipes.create.filling(Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'), [Fluid.water(1000), 'gtceu:fluid_cell'])
  event.recipes.create.filling('astral_dimension:large_solar_shrub', [Fluid.water(1000), 'astral_dimension:solar_shrub'])


  // MIXING // Syntax: mixing(output[], input[])
  //Mixing uses the Mechanical Mixer, Basin, and optionally a Blaze Burner
  event.recipes.create.mixing(['gtceu:andesite_alloy_dust', Item.of('gtceu:andesite_alloy_dust').withChance(0.1)], ['3x minecraft:iron_nugget', '3x minecraft:andesite'])
  event.recipes.create.mixing([Fluid.of('gtceu:drilling_fluid', 320)], ['2x gtceu:stone_dust', Fluid.of('minecraft:water', 1000), '2x minecraft:redstone'])
  event.recipes.create.mixing([Fluid.of('gtceu:glue', 80)], '2x gtceu:sticky_resin').heated()
  event.recipes.create.mixing('3x gtceu:bronze_dust', ['gtceu:tin_dust', '3x gtceu:copper_dust'])
   

  // MILLING // Syntax: milling(output[], input)
  //Milling uses the Millstone
  event.recipes.create.milling([
  Item.of('minecraft:raw_iron', 2).withChance(0.15),
  Item.of('gtceu:raw_tin', 2).withChance(0.15),
  Item.of('gtceu:raw_coal', 2).withChance(0.15),
  Item.of('minecraft:raw_copper', 2).withChance(0.15)
], 'kubejs:overworld_ore_cluster')


  // SEQUENCED ASSEMBLY // Syntax: sequenced_assembly(output[], input, sequence[]).transitionalItem(item).loops(int)
  // Output is an item or an array of items. If it is an array:
  // The first item is the real output, the remainder is scrap.
  // Only one item is chosen, with an equal chance of each.
  // You can use Item.of('create:shaft').withChance(2) to double the chance of that item being chosen.
  // Transitional Item is any item used during the intermediate stages of the assembly.
  // Sequence is an array of recipes of the following types:
  // create:cutting
  // create:pressing
  // create:deploying
  // create:filling
  // The transitional item needs to be the input and output of each of these recipes.
  // Loops is the number of times that the recipe repeats. Calling .loops() is optional and defaults to 4.

  // Mecanismo de precisión // Desabilitado hasta cambiar inputs

// event.recipes.create.sequenced_assembly([
//		Item.of('create:precision_mechanism').withChance(130.0), // this is the item that will appear in JEI as the result
//		Item.of('create:golden_sheet').withChance(8.0), // the rest of these items will be part of the scrap
//		Item.of('create:andesite_alloy').withChance(8.0),
//		Item.of('create:cogwheel').withChance(5.0),
//		Item.of('create:shaft').withChance(2.0),
//		Item.of('create:crushed_gold_ore').withChance(2.0),
//		Item.of('2x minecraft:gold_nugget').withChance(2.0),
//		'minecraft:iron_ingot',
//		'minecraft:clock'
//	], 'create:golden_sheet', [ // 'create:golden_sheet' is the input
//		// the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
//		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
//		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
//		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
//		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:iron_nugget'])
//	]).transitionalItem('create:incomplete_precision_mechanism').loops(5) // set the transitional item and the number of loops

  event.recipes.create.sequenced_assembly([
    Item.of('gtceu:basic_electronic_circuit').withChance(4.0),
    Item.of('gtceu:steel_plate')
  ], 'gtceu:resin_printed_circuit_board', [
    event.recipes.createFilling('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', Fluid.of('gtceu:glue', 320)]),	  
    event.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:steel_plate']),
    event.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', '#gtceu:resistors']),
    event.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', '#gtceu:circuits/ulv']),
    event.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:red_alloy_single_cable']),
    event.recipes.createPressing('gtceu:resin_printed_circuit_board', 'gtceu:resin_printed_circuit_board')
  ]).transitionalItem('gtceu:resin_printed_circuit_board').loops(3)

  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:compressed_raw_leather')
  ], 'minecraft:beef', [
    event.recipes.createPressing('minecraft:beef', 'minecraft:beef'),
    event.recipes.createPressing('minecraft:beef', 'minecraft:beef'),
    event.recipes.createPressing('minecraft:beef', 'minecraft:beef')
  ]).transitionalItem('minecraft:beef').loops(2)

  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:compressed_raw_leather')
  ], 'minecraft:mutton', [
    event.recipes.createPressing('minecraft:mutton', 'minecraft:mutton'),
    event.recipes.createPressing('minecraft:mutton', 'minecraft:mutton'),
    event.recipes.createPressing('minecraft:mutton', 'minecraft:mutton')
  ]).transitionalItem('minecraft:mutton').loops(2)
  
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:compressed_raw_leather')
  ], 'minecraft:rotten_flesh', [
    event.recipes.createPressing('minecraft:rotten_flesh', 'minecraft:rotten_flesh'),
    event.recipes.createPressing('minecraft:rotten_flesh', 'minecraft:rotten_flesh'),
    event.recipes.createPressing('minecraft:rotten_flesh', 'minecraft:rotten_flesh')
  ]).transitionalItem('minecraft:rotten_flesh').loops(2)

  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:compressed_raw_leather')
  ], 'minecraft:chicken', [
    event.recipes.createPressing('minecraft:chicken', 'minecraft:chicken'),
    event.recipes.createPressing('minecraft:chicken', 'minecraft:chicken'),
    event.recipes.createPressing('minecraft:chicken', 'minecraft:chicken')
  ]).transitionalItem('minecraft:chicken').loops(2)

  event.recipes.create.sequenced_assembly([
    Item.of('gtceu:treated_wood_planks')
  ], '#minecraft:planks', [
    event.recipes.createFilling('kubejs:unprocessed_treated_plank', ['kubejs:unprocessed_treated_plank', Fluid.of('gtceu:creosote', 200)]),
    event.recipes.createPressing('kubejs:unprocessed_treated_plank', 'kubejs:unprocessed_treated_plank'),
    event.recipes.createPressing('kubejs:unprocessed_treated_plank', 'kubejs:unprocessed_treated_plank')
  ]).transitionalItem('kubejs:unprocessed_treated_plank').loops(1)
})