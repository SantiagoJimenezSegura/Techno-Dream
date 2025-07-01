const $SteamMulti = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine');

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_steam_compressor', 'multiblock')
        .machine((holder) => new $SteamMulti(holder, 4))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('compressor')
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("BCCCB", "BBCBB", "BBCBB", "BBBBB", "BBBBB")
        .aisle("CDDDC", "BDBDB", "BDEDB", "BBDBB", "BBBBB")
        .aisle("CDDDC", "CBBBC", "CEFEC", "BDDDB", "BBGBB")
        .aisle("CDDDC", "BDBDB", "BDEDB", "BBDBB", "BBBBB")
        .aisle("BCCCB", "BBHBB", "BBCBB", "BBBBB", "BBBBB")
   .where('B', Predicates.any())
   .where('C', Predicates.blocks('gtceu:steam_machine_casing').setMinGlobalLimited(10) // Corrected line
   .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setMaxGlobalLimited(1))
   .or(Predicates.abilities(PartAbility.STEAM).setMaxGlobalLimited(1))
   .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setMaxGlobalLimited(1)))
   .where("D", Predicates.blocks("gtceu:industrial_steam_casing"))
   .where("E", Predicates.blocks("gtceu:bronze_brick_casing"))
   .where("F", Predicates.blocks("gtceu:bronze_firebox_casing"))
   .where("G", Predicates.blocks("gtceu:bronze_machine_casing"))
   .where('H', Predicates.controller(Predicates.blocks(definition.get())))
        .build())
    .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_bronze_plated_bricks", "gtceu:block/machines/compressor", false)
  }); 