GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('unprocessed_crude_ore')
        .fluid()
        .color(0x666633)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})