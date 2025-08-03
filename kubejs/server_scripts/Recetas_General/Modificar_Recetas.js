ServerEvents.recipes(event => {
    event.replaceInput({ mod: 'create' }, 'create:andesite_alloy', 'gtceu:andesite_alloy_ingot')
    event.replaceOutput({ mod: 'create' }, 'create:andesite_alloy', 'gtceu:andesite_alloy_ingot')
    event.replaceInput({ mod: 'tconstruct' }, 'create:andesite_alloy', 'gtceu:andesite_alloy_ingot')
    event.replaceOutput({ mod: 'tconstruct' }, 'create:andesite_alloy', 'gtceu:andesite_alloy_ingot')
    
    event.replaceInput({ mod: 'gtceu' }, '#forge:plates/iron', 'gtceu:iron_plate')
    event.replaceInput({ mod: 'create' }, '#forge:plates/iron', 'gtceu:iron_plate')
    event.replaceInput({ mod: 'bloodmagic' }, '#forge:plates/iron', 'gtceu:iron_plate')
    //event.replaceOutput({ type: 'gtceu:arc_furnace' }, 'gtceu:wrought_iron_ingot', 'minecraft:dirt') // 
    event.replaceInput({ mod: 'gtceu' }, '#forge:plates/copper', 'gtceu:copper_plate')
    event.replaceInput({ mod: 'create' }, '#forge:plates/copper', 'gtceu:copper_plate')
    event.replaceInput({ mod: 'bloodmagic' }, '#forge:plates/copper', 'gtceu:copper_plate')

    event.replaceInput({ mod: 'gtceu' }, '#forge:nuggets/copper', 'gtceu:copper_nugget')
    event.replaceInput({ mod: 'create' }, '#forge:nuggets/copper', 'gtceu:copper_nugget')
    event.replaceInput({ mod: 'bloodmagic' }, '#forge:nuggets/copper', 'gtceu:copper_nugget')

    event.replaceInput({ mod: 'gtceu' }, '#forge:dusts/copper', 'gtceu:copper_dust')
    event.replaceInput({ mod: 'create' }, '#forge:dusts/copper', 'gtceu:copper_dust')
    event.replaceInput({ mod: 'bloodmagic' }, '#forge:dusts/copper', 'gtceu:copper_dust')

    event.replaceInput({ mod: 'gtceu' }, '#forge:ingots/tin', 'gtceu:tin_ingot')
    event.replaceInput({ mod: 'create' }, '#forge:ingots/tin', 'gtceu:tin_ingot')
    event.replaceInput({ mod: 'bloodmagic' }, '#forge:ingots/tin', 'gtceu:tin_ingot')
    event.replaceInput({ mod: 'gendustry' }, '#forge:ingots/tin', 'gtceu:tin_ingot')
    event.replaceInput({ mod: 'forestry' }, '#forge:ingots/tin', 'gtceu:tin_ingot')

    event.replaceInput({ mod: 'gtceu' }, '#forge:ingots/bronze', 'gtceu:bronze_ingot')
    event.replaceInput({ mod: 'create' }, '#forge:ingots/bronze', 'gtceu:bronze_ingot')
    event.replaceInput({ mod: 'bloodmagic' }, '#forge:ingots/bronze', 'gtceu:bronze_ingot')
    event.replaceInput({ mod: 'gendustry' }, '#forge:ingots/bronze', 'gtceu:bronze_ingot')
    event.replaceInput({ mod: 'forestry' }, '#forge:ingots/bronze', 'gtceu:bronze_ingot')
})