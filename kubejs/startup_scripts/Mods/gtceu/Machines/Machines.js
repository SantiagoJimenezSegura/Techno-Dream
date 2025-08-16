
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    
    /// VULCANIZER ///
    event.create('steam_vulcanizer')
        .category('Haruk0')
        .setMaxIOSize(4, 4, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BOILER)
    event.create('electric_vulcanizer')
        .category('Haruk0')
        .setMaxIOSize(4, 4, 2, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BOILER)
    
    /// VACCUM CHAMBER ///
    event.create('steam_vaccum_chamber')
        .category('Haruk0')
        .setMaxIOSize(4, 4, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)
    event.create('electric_vaccum_chamber')
        .category('Haruk0')
        .setMaxIOSize(4, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)

    /// TOASTER OVEN ///
    event.create('steam_toaster_oven')
        .category('Haruk0')
        .setMaxIOSize(4, 4, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE)
    event.create('electric_toaster_oven')
        .category('Haruk0')
        .setMaxIOSize(4, 4, 2, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE)

})

    // ELECTRIC MACHINES //

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('electric_vulcanizer', 'simple')
        .tiers(GTValues.MV, GTValues.HV, GTValues.EV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Electric Vulcanizer")
                .recipeType('electric_vulcanizer')
                .workableTieredHullModel('gtceu:block/machines/fluid_heater')
        )
    event.create('electric_vaccum_chamber', 'simple')
        .tiers(GTValues.MV, GTValues.HV, GTValues.EV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Electric Vaccum Chamber")
                .recipeType('electric_vaccum_chamber')
                .workableTieredHullModel('gtceu:block/machines/air_scrubber')
        )
    event.create('electric_toaster_oven', 'simple')
        .tiers(GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Electric Toaster Oven")
                .recipeType('electric_toaster_oven')
                .workableTieredHullModel('gtceu:block/machines/electric_oven')
        )
})

    // STEAM MACHINES //

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('steam_vulcanizer', 'steam')
        .hasHighPressure(true)
        .definition((hp, builder) => (
            builder
                .recipeType("steam_vulcanizer")
                .workableSteamHullModel(hp, 'gtceu:block/machines/fluid_heater')
        ))
    event.create('steam_vaccum_chamber', 'steam')
        .hasHighPressure(true)
        .definition((hp, builder) => (
            builder
                .recipeType("steam_vaccum_chamber")
                .workableSteamHullModel(hp, 'gtceu:block/machines/air_scrubber')
        ))
    event.create('steam_toaster_oven', 'steam')
        .hasHighPressure(true)
        .definition((hp, builder) => (
            builder
                .recipeType("steam_toaster_oven")
                .workableSteamHullModel(hp, 'gtceu:block/machines/electric_oven')
        ))


})