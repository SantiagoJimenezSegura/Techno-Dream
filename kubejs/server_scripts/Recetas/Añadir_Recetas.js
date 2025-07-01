ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('mv_bedrock_ore_miner')
        .itemInputs(
            '2x gtceu:hv_machine_hull',
            '8x gtceu:stainless_steel_frame',
            '8x #gtceu:circuits/ev',
            '6x gtceu:hv_electric_motor',
            '6x gtceu:hv_electric_pump',
            '6x gtceu:hv_conveyor_module',
            '4x gtceu:titanium_gear',
            '4x gtceu:lv_miner'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2304)
        )
        .itemOutputs(
            'gtceu:mv_bedrock_ore_miner'
        )
        .duration(800)
        .EUt(512)
})

    //RECETAS MULTIBLOCK
ServerEvents.recipes(event => { 
  event.recipes.gtceu.steam_pressurizer('hp_steam')
    .inputFluids(Fluid.of('gtceu:steam', 6400))
    .outputFluids(Fluid.of('gtca:high_pressure_steam', 256))
    .duration(1)
    .EUt(32)
})

    //RECETAS CRAFTING TABLE

ServerEvents.recipes(event => {
event.shapeless(
  Item.of('gtceu:mud_mixture_dust', 3), // arg 1: output
  [
    'minecraft:water_bucket',
    'minecraft:clay_ball',            // arg 2: the array of inputs
    '3x minecraft:packed_mud'
  ]
)
  event.shaped(
    Item.of('minecraft:mud', 8),
    [
      'DDD',
      'DWD',
      'DDD'
    ],
    {
      D: 'minecraft:dirt',
      W: 'minecraft:water_bucket'
    }
  ).replaceIngredient('minecraft:water_bucket', Item.of('minecraft:bucket')); // returns empty

  // Add custom packed mud recipe using mallet
  event.shaped(
    'minecraft:packed_mud',
    [
      'PW',
    ],
    {
      P: 'minecraft:mud',
      W: '#forge:tools/mallets'
    }
  )

    event.shaped(
    'gtca:steam_pressurizer',
    [
      'BPB',
      'CTC',
      'WHW'
    ],
    {
      B: 'gtceu:lv_electric_pump',
      P: 'gtceu:lv_electric_piston',
      C: '#gtceu:circuits/lv',
      T: 'gtceu:steel_large_fluid_pipe',
      W: 'gtceu:tin_single_cable',
      H: 'gtceu:lv_machine_hull'
    }
  )
})

ServerEvents.recipes(event => {
event.shaped(
  Item.of('minecraft:mud_bricks', 1), // arg 1: output
  [
    'AA',
    'AA' // arg 2: the shape (array of strings)
  ],
  {
    A: 'gtceu:charred_mud_ingot'

  }
)
event.shaped(
  Item.of('gtceu:primitive_clay_blast_furnace', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'CCC'
  ],
  {
    A: 'minecraft:mud_bricks',
    B: '#forge:tools/mallets',
    C: 'minecraft:bricks'
    //D: 'gtceu:charred_mud_ingot'

  }
)
})

// RECETAS CREATE

//ServerEvents.recipes(event => {
    //event.recipes.create.deploying(['minecraft:diamond', Item.of('minecraft:diamond').withChance(0.5)], ['minecraft:coal_block', 'minecraft:sand'])
    //event.recipes.create.deploying('minecraft:diamond', ['minecraft:coal_block', 'minecraft:sand'])
    //event.recipes.create.item_application('minecraft:diamond', ['minecraft:coal_block', 'minecraft:sand'])
//})

// RECETAS FOGATA
ServerEvents.recipes(event => {
event.campfireCooking('gtceu:charred_mud_ingot', 'gtceu:mud_mixture_dust', 0, 400)
event.campfireCooking('gtceu:wrought_iron_ingot', 'minecraft:iron_ingot', 0, 300)

})