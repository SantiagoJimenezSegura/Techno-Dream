//GTCEuServerEvents.oreVeins(event => {
//    event.add('kubejs:test_vein', vein => {
//        // Basic vein generation properties
//        vein.weight(40)
//        vein.clusterSize(40)
//        vein.density(0.25)
//        // Define where the vein can generate
//        vein.layer("stone")
//        vein.dimensions("minecraft:overworld")
//        // Define a height range:
//        vein.heightRangeUniform(30, 50)
//        // Define the vein's generator:
//        vein.layeredVeinGenerator(generator => generator
//            .buildLayerPattern(pattern => pattern
//        .layer(l => l.weight(3).mat(GTMaterials.Silver).size(2, 4))
//        .layer(l => l.weight(2).mat(GTMaterials.Gold).size(1, 1))
//        .layer(l => l.weight(1).block(() => Block.getBlock('minecraft:oak_log')).size(1, 1))
//        .layer(l => l.weight(1).state(() => Block.getBlock('minecraft:oak_planks').defaultBlockState()).size(1, 1))
//    ))
//})
//
//
//})