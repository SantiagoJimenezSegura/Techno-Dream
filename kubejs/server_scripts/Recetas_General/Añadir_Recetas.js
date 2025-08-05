ServerEvents.recipes(event => {
  ///RECETA ASSEMBLER///  
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

///RECETAS SIN FORMA///

  event.shapeless(
  Item.of('gtceu:mud_mixture_dust', 3), // Salida de item
  [
    'minecraft:water_bucket',
    'minecraft:clay_ball',            // Entrada de items
    '3x minecraft:packed_mud'
  ]
)

  event.shapeless(
  Item.of('gtceu:invar_dust', 2), 
  [
    'gtceu:iron_dust',
    'gtceu:nickel_dust'            
  ]
)
  event.shapeless(
  Item.of('gtceu:andesite_alloy_dust', 1), 
  [
    'gtceu:tiny_iron_dust',
    '2x gtceu:small_andesite_dust'            
  ]
)
  event.shapeless(
  Item.of('gtceu:small_andesite_dust', 1), 
  [
    'minecraft:andesite',
    '#forge:tools/mortars'            
  ]
)

  

/// RECETAS CON FORMA///

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
  ).replaceIngredient('minecraft:water_bucket', Item.of('minecraft:bucket')); // Regresa vacio

  event.shaped(
    'gtceu:pyrolyse_oven',
    [
      'PCW',
      'CHC',
      'PpW'
    ],
    {
      P: 'gtceu:lv_electric_piston',
      p: 'gtceu:lv_electric_pump',
      C: '#gtceu:circuits/lv',
      H: 'gtceu:lv_machine_hull',
      W: 'gtceu:tin_quadruple_wire'
    }
  )
  
  event.shaped(
    'kubejs:rotacional_circuit',
    [
      'HCP',
      'CWC',
      'PCH'
    ],
    {
      P: 'kubejs:leather_belt',
      C: 'gtceu:small_iron_gear',
      H: 'gtceu:charred_mud_gear',
      W: '#minecraft:wooden_slabs'
    }
  )
  event.shaped(
    Item.of('kubejs:leather_belt', 2),
    [
      ' L ',
      'LNL',
      ' L '
    ],
    {
      L: 'minecraft:leather',
      N: '#forge:tools/knives'
    }
  )

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
  Item.of('minecraft:mud_bricks', 1), 
  [
    'AA',
    'AA' 
  ],
  {
    A: 'gtceu:charred_mud_ingot'

  }
)

  event.shaped(
    Item.of('gtceu:compressed_clay', 4), // Marcando 4 items
    [
      'PPP',
      'PWP',
      'PPP'
    ],
    {
      P: 'minecraft:clay_ball',
      W: 'gtceu:brick_wooden_form'
    }
  )
  
  event.shaped(
    'gtceu:fluid_cell',
    [
      'W',
      'P',
      'P'
    ],
    {
      P: 'gtceu:double_tin_plate',
      W: '#forge:tools/hammers'
    }
  )


})

// RECETAS CREATE  /// Movido a Mod/Create

//ServerEvents.recipes(event => {
    //event.recipes.create.deploying(['minecraft:diamond', Item.of('minecraft:diamond').withChance(0.5)], ['minecraft:coal_block', 'minecraft:sand'])
    //event.recipes.create.deploying('minecraft:diamond', ['minecraft:coal_block', 'minecraft:sand'])
    //event.recipes.create.item_application('minecraft:diamond', ['minecraft:coal_block', 'minecraft:sand'])
//})

// RECETAS FOGATA //

ServerEvents.recipes(event => {
event.campfireCooking('gtceu:charred_mud_ingot', 'gtceu:mud_mixture_dust', 0, 400) //Primera linea salida, segunda entrada
event.campfireCooking('minecraft:brick', 'gtceu:compressed_clay', 0, 320)
event.campfireCooking('gtceu:andesite_alloy_ingot', 'gtceu:andesite_alloy_dust', 0, 400)
event.campfireCooking('minecraft:leather', 'kubejs:compressed_raw_leather', 0, 220)

})