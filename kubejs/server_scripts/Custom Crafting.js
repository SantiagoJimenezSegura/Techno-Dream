ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('atf')
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

    //RECETAS MAQUINAS

ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_clay_blast_furnace('atf')
        .itemInputs(
            '64x minecraft:dirt',
            '32x minecraft:diamond',
            '1x minecraft:coal'
            )
        .inputFluids(
            Fluid.of('minecraft:lava', 1500)
        )
        .itemOutputs(
            'minecraft:stick'
        )
        .duration(100) // Duración en Ticks, 20 tiks = 1 segundo
})

    //RECETAS CRAFTING TABLE

ServerEvents.recipes(event => {
event.shapeless(
  Item.of('kubejs:mud_mixture', 3), // arg 1: output
  [
    'minecraft:water_bucket',
    'minecraft:clay_ball',            // arg 2: the array of inputs
    '3x minecraft:packed_mud'
  ]
)

event.shapeless(
  Item.of('minecraft:mud', 1),
  [
    'minecraft:dirt',
    'minecraft:water_bucket'
  ]
)

event.shaped(
  'gtceu:primitive_clay_blast_furnace',
  [
    'MMM',
    'M M',
    'MMM'
  ],
  {
    M: 'minecraft:mud_bricks'
  }
);

})