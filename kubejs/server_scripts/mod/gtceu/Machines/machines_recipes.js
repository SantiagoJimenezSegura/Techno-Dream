ServerEvents.recipes(event => {
  
  /// ASSEMBLER /// 
    


  /// ALLOY SMELTER /// 
   
    event.recipes.gtceu.alloy_smelter('brick_in_alloy_smelter')
        .itemInputs('minecraft:clay_ball')
        .notConsumable('gtceu:ingot_casting_mold')
        .itemOutputs('minecraft:brick')
        .duration(100)
        .EUt(GTValues.VH[GTValues.LV])  
    event.recipes.gtceu.alloy_smelter('andesite_alloy_from_alloy_smelter')
        .itemInputs('2x minecraft:iron_nugget', '2x minecraft:andesite')
        .itemOutputs('gtceu:andesite_alloy_ingot')
        .duration(80)
        .EUt(GTValues.VA[GTValues.LV])   

    // MIXER //

    event.recipes.gtceu.mixer('andesite_alloy_from_mixer')
        .itemInputs('minecraft:iron_nugget', 'minecraft:andesite')
        .itemOutputs('2x gtceu:andesite_alloy_dust')
        .duration(80)
        .EUt(GTValues.VA[GTValues.LV])


    // STEAM TEST //

    event.recipes.gtceu.steam_vulcanizer('rubber_ingot')
        .itemInputs('minecraft:dirt')
        .itemOutputs('2x gtceu:andesite_alloy_dust')
        .duration(40)
        .EUt(GTValues.VA[GTValues.LV])
})