GTCEuServerEvents.bedrockOreVeins(event => {
    event.add('kubejs:overworld_bedrock_ore_vein_iron', vein => {
        vein.weight(120)
            .size(3)
            .yield(10, 20)
            .material(GTMaterials.Goethite, 5)
            .material(GTMaterials.YellowLimonite, 2)
            .material(GTMaterials.Hematite, 2)
            .material(GTMaterials.Malachite, 1)
            .dimensions('minecraft:overworld') 
    })
})

GTCEuServerEvents.bedrockOreVeins(event => {
    event.add('kubejs:overworld_bedrock_ore_vein_sapphire', vein => {
        vein.weight(65)
            .size(2.5)
            .yield(10, 20)
            .material(GTMaterials.Almandine, 2)
            .material(GTMaterials.Pyrope, 2)
            .material(GTMaterials.Sapphire, 2)
            .material(GTMaterials.GreenSapphire, 1)
            .dimensions('minecraft:overworld') 
    })
})

GTCEuServerEvents.bedrockOreVeins(event => {
    event.add('kubejs:nether_bedrock_ore_vein_tetrahedrite', vein => {
        vein.weight(75)
            .size(2.5)
            .yield(10, 20)
            .material(GTMaterials.Tetrahedrite, 4)
            .material(GTMaterials.Copper, 2)
            .material(GTMaterials.Stibnite, 1)
            .dimensions('minecraft:the_nether') 
    })
})

GTCEuServerEvents.bedrockOreVeins(event => {
    event.add('kubejs:nether_bedrock_ore_vein_sulfur', vein => {
        vein.weight(100)
            .size(2.5)
            .yield(10, 20)
            .material(GTMaterials.Sulfur, 3)
            .material(GTMaterials.Pyrite, 2)
            .material(GTMaterials.Sphalerite, 1)
            .dimensions('minecraft:the_nether') 
    })
})

GTCEuServerEvents.bedrockOreVeins(event => {
    event.add('kubejs:overworld_bedrock_ore_vein_nickel', vein => {
        vein.weight(45)
            .size(2.5)
            .yield(10, 20)
            .material(GTMaterials.Garnierite, 3)
            .material(GTMaterials.Nickel, 2)
            .material(GTMaterials.Cobaltite, 2.5)
            .material(GTMaterials.Pentlandite, 1)
            .dimensions('minecraft:overworld') 
    })
})

GTCEuServerEvents.bedrockOreVeins(event => {
    event.add('kubejs:overworld_bedrock_ore_vein_diamond', vein => {
        vein.weight(45)
            .size(2.5)
            .yield(10, 20)
            .material(GTMaterials.Graphite, 4)
            .material(GTMaterials.Graphite, 2)
            .material(GTMaterials.Diamond, 3)
            .material(GTMaterials.Coal, 1)
            .dimensions('minecraft:overworld') 
    })
})

GTCEuServerEvents.bedrockOreVeins(event => {
    event.add('kubejs:overworld_bedrock_ore_vein_redstone', vein => {
        vein.weight(65)
            .size(2.5)
            .yield(10, 20)
            .material(GTMaterials.Redstone, 3)
            .material(GTMaterials.Ruby, 2.5)
            .material(GTMaterials.Cinnabar, 1)
            .dimensions('minecraft:overworld') 
    })
})

GTCEuServerEvents.bedrockOreVeins(event => {
    event.add('kubejs:nether_bedrock_ore_vein_redstone', vein => {
        vein.weight(65)
            .size(2.5)
            .yield(10, 20)
            .material(GTMaterials.Redstone, 3)
            .material(GTMaterials.Ruby, 2.5)
            .material(GTMaterials.Cinnabar, 1)
            .dimensions('minecraft:the_nether') 
    })
})