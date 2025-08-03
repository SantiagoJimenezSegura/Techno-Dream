GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("redstone_alloy")
        .ingot()
        .components('1x carbon', '1x redstone')
        .color(0xff0000).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)
})
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("charred_mud")
        .ingot()
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .color(0x5a320c).iconSet(GTMaterialIconSet.DULL)
})