//ServerEvents.recipes(event => {

    ////// PCBF RECETA CONTROLADOR //////
    


    ////// PCBF RECETAS //////

    //function PCBF_IRON_INGOT(id, input, output, fluid, boosted) {
    //    if (boosted) {
    //        event.recipes.gtceu.primitive_clay_blast_furnace(id)
    //           .circuit(2)
    //            .itemInputs(input) //.notConsumable(InputItem.of(input)) Se usa para que puedras tener diferentes items aceptables en la misma entrada
    //            .inputFluids(Fluid.of('minecraft:lava', fluid)) 
    //            .itemOutputs(output)
    //            .chancedOutput('minecraft:iron_ingot', 1500, 100)
    //            .duration(340)
    //    } else {
    //        event.recipes.gtceu.primitive_clay_blast_furnace(id)
    //            .circuit(1)
    //            .itemInputs(input)
    //            //.inputFluids(Fluid.of('minecraft:water', fluid)) No se requieren fluidos en esta receta del PCBF, dejado para ejemplos futuros
    //            .itemOutputs(output)
    //            .duration(200)
    //    }
    //}

    //PCBF_IRON_INGOT('magnetite_to_iron', ['gtceu:raw_magnetite' , '2x #minecraft:coals'], 'minecraft:iron_ingot', false)
    //PCBF_IRON_INGOT('magnetite_to_iron_boosted', ['gtceu:raw_magnetite' , '3x #minecraft:coals'], '2x minecraft:iron_ingot', 100, true)


    ////// EJEMPLOS DE CODIGO  //////

    // Rubber
    //Greenhouse('rubber_sapling', 'gtceu:rubber_sapling', 1000, ['32x gtceu:rubber_log', '8x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], false)
    //Greenhouse('rubber_sapling_boosted', 'gtceu:rubber_sapling', 1000, ['64x gtceu:rubber_log', '16x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], true)

    // Oak
    //Greenhouse('oak_sapling', 'minecraft:oak_sapling', 1000, ['64x minecraft:oak_log', '4x minecraft:oak_sapling'], false)
    //Greenhouse('oak_sapling_boosted', 'minecraft:oak_sapling', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:oak_sapling'], true)


    //    function PCBF(id, input, fluid, output, boosted) {
    //    if (boosted) {
    //        event.recipes.gtceu.primitive_clay_blast_furnace(id)
    //            .circuit(2)
    //            .notConsumable(InputItem.of(input))
    //            .itemInputs('4x gtceu:fertilizer')
    //            .inputFluids(Fluid.of('minecraft:water', fluid))
    //            .itemOutputs(output)
    //            .duration(320)
    //            .EUt(MV) //MV no está definido, usar en cambio la cifra ejemplos: MV = 128
    //    } else {
    //        event.recipes.gtceu.primitive_clay_blast_furnace(id)
    //            .circuit(1)
    //            .notConsumable(InputItem.of(input))
    //            .inputFluids(Fluid.of('minecraft:water', fluid))
    //            .itemOutputs(output)
    //            .duration(640)
    //            .EUt(MV)
    //    }
    //}
//})