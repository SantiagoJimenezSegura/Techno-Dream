GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('primitive_clay_blast_furnace')
        .category('haruk0')
        .setMaxIOSize(3, 3, 3, 3)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('primitive_clay_blast_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('primitive_clay_blast_furnace')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#MMM#', '#GGG#', '#GGG#', '#GGG#', '##G##', '#####', '#####', '#####')
            .aisle('MMMMM', 'G###G', 'G###G', 'G###G', '#G#G#', '#GGG#', '##G##', '##G##')
            .aisle('MMMMM', 'G###G', 'G###G', 'G###G', 'G###G', '#G#G#', '#G#G#', '#G#G#')
            .aisle('MMMMM', 'G###G', 'G###G', 'G###G', '#G#G#', '#GGG#', '##G##', '##G##')
            .aisle('#MMM#', '#GKG#', '#GGG#', '#GGG#', '##G##', '#####', '#####', '#####')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.blocks('minecraft:bricks')
                .or(Predicates.blocks('minecraft:stone_bricks')))
            .where('G', Predicates.blocks('minecraft:mud_bricks').setMinGlobalLimited(48)
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer('minecraft:block/mud_bricks', 'gtceu:block/multiblock/primitive_blast_furnace', true);
    })

