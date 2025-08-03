ServerEvents.recipes(event => {
  
  ///RECETA ASSEMBLER/// 
   
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
})