ServerEvents.recipes(event => {
  
  /// RECETA ASSEMBLER /// 
   
    event.recipes.gtceu.alloy_smelter('brick_in_alloy_smelter')
        .itemInputs(
            'minecraft:clay_ball'
        )
        .notConsumable('gtceu:ingot_casting_mold')
        .itemOutputs(
            'minecraft:brick'
        )
        .duration(100)
        .EUt(18)
    event.recipes.gtceu.alloy_smelter('andesite_alloy_from_alloy_smelter')
        .itemInputs(
            '2x minecraft:iron_nugget',
            '2x minecraft:andesite'
        )
        .itemOutputs(
            'gtceu:andesite_alloy_ingot'
        )
        .duration(80)
        .EUt(24)    

    // MIXER //
    event.recipes.gtceu.mixer('andesite_alloy_from_mixer')
        .itemInputs(
            'minecraft:iron_nugget',
            'minecraft:andesite'
        )
        .itemOutputs(
            '2x gtceu:andesite_alloy_dust'
        )
        .duration(80)
        .EUt(24)

})