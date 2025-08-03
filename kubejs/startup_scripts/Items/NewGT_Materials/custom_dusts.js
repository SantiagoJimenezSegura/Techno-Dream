GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('mud_mixture')
        .dust()
        .color(0xc36309) .iconSet(GTMaterialIconSet.DULL)

    event.create('unprocessed_solar')
        .dust()
        .color(0xffcc80) .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)


})