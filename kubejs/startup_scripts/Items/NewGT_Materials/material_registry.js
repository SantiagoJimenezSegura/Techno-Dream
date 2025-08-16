GTCEuStartupEvents.registry('gtceu:material', event => {
    /// ITEMS ///

    event.create('mud_mixture')
        .dust()
        .color(0xc36309) .iconSet(GTMaterialIconSet.DULL)

    event.create('unprocessed_solar')
        .dust()
        .color(0xffcc80) .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("charred_mud")
        .ingot()
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .color(0x5a320c).iconSet(GTMaterialIconSet.DULL)

    event.create("redstone_alloy")
        .ingot()
        .fluid()
        .components('1x carbon', '1x redstone')
        .color(0xff0000).iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.DISABLE_DECOMPOSITION)

    ///  LIQUID  /// Catalogado solo para liquidos, no items con estado liquido.

    event.create('unprocessed_crude_ore')
        .fluid()
        .color(0x666633)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

})