ServerEvents.recipes(event => {
    event.replaceInput({ mod: 'create' }, 'create:andesite_alloy', 'gtceu:andesite_alloy_ingot')
    event.replaceOutput({ mod: 'create' }, 'create:andesite_alloy', 'gtceu:andesite_alloy_ingot')
    event.replaceInput({ mod: 'create' }, 'gtceu:iron_plate', 'gtceu:wrought_iron_plate')
    event.replaceInput({ mod: 'tconstruct' }, 'create:andesite_alloy', 'gtceu:andesite_alloy_ingot')
    event.replaceOutput({ mod: 'tconstruct' }, 'create:andesite_alloy', 'gtceu:andesite_alloy_ingot')

    //event.replaceOutput({ type: 'gtceu:arc_furnace' }, 'gtceu:wrought_iron_ingot', 'minecraft:dirt') // 



    event.replaceInput(
  { input: '#forge:plates/iron' }, // Arg 1: the filter
  '#forge:plates/iron',            // Arg 2: the item to replace
  'gtceu:iron_plate'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)
    event.replaceInput({ input: '#forge:ingots/bronze' }, '#forge:ingots/bronze', 'gtceu:bronze_ingot')
    event.replaceInput({ input: '#forge:ingots/tin' }, '#forge:ingots/bronze', 'gtceu:tin_ingot')
    event.replaceInput({ input: '#forge:dusts/copper' }, '#forge:dusts/copper', 'gtceu:copper_dust')
    event.replaceInput({ input: '#forge:nuggets/copper' }, '#forge:nuggets/copper', 'gtceu:copper_nugget')
    event.replaceInput({ input: '#forge:plates/copper' }, '#forge:plates/copper', 'gtceu:copper_plate')
    event.replaceInput({ input: 'create:andesite_alloy' }, 'create:andesite_alloy', 'gtceu:andesite_alloy_ingot')
    event.replaceInput({ output: 'create:andesite_alloy' }, 'create:andesite_alloy', 'gtceu:andesite_alloy_ingot')
    event.replaceInput({ input: '#forge:rods/iron' }, '#forge:rods/iron', 'gtceu:iron_rod')
    event.replaceInput({ input: '#forge:plates/steel' }, '#forge:plates/steel', 'gtceu:steel_plate')
    event.replaceInput({ input: '#forge:rods/steel' }, '#forge:rods/steel', 'gtceu:steel_rod')
    event.replaceInput({ input: '#forge:dusts/iron' }, '#forge:dusts/iron', 'gtceu:iron_dust')
    event.replaceInput({ input: '#forge:plates/iron' }, '#forge:plates/iron', 'gtceu:iron_plate')
    event.replaceInput({ input: '#forge:gold' }, '#forge:gold', 'gtceu:gold')
    event.replaceInput({ input: '#forge:chlorine' }, '#forge:chlorine', 'gtceu:chlorine')
    event.replaceInput({ input: '#forge:dusts/gold' }, '#forge:dusts/gold', 'gtceu:gold_dust')
    event.replaceInput({ input: '#forge:nuggets/lead' }, '#forge:nuggets/lead', 'gtceu:lead_nugget')
    event.replaceInput({ input: '#forge:storage_blocks/lead' }, '#forge:storage_blocks/lead', 'gtceu:lead_block')
    event.replaceInput({ input: '#forge:ingots/lead' }, '#forge:ingots/lead', 'gtceu:lead_ingot')
    event.replaceInput({ input: '#forge:nuggets/tin' }, '#forge:nuggets/tin', 'gtceu:tin_nugget')
    event.replaceInput({ input: '#forge:plates/bronze' }, '#forge:plates/bronze', 'gtceu:bronze_plate')
    event.replaceInput({ input: '#forge:plates/lead' }, '#forge:plates/lead', 'gtceu:lead_plate')
    event.replaceInput({ input: '#forge:storage_blocks/tin' }, '#forge:storage_blocks/tin', 'gtceu:tin_block')
    event.replaceInput({ input: '#forge:ingots/silver' }, '#forge:ingots/silver', 'gtceu:silver_ingot')
    event.replaceInput({ input: '#forge:dusts/silver' }, '#forge:dusts/silver', 'gtceu:silver_dust')
    event.replaceInput({ input: '#forge:iron' }, '#forge:iron', 'gtceu:iron')
    event.replaceInput({ input: '#forge:bronze' }, '#forge:bronze', 'gtceu:bronze')
    event.replaceInput({ input: '#forge:storage_blocks/bronze' }, '#forge:storage_blocks/bronze', 'gtceu:bronze_block')
    event.replaceInput({ input: '#forge:dusts/tin' }, '#forge:dusts/tin', 'gtceu:tin_dust')
    event.replaceInput({ input: '#forge:nuggets/bronze' }, '#forge:nuggets/bronze', 'gtceu:bronze_nugget')

    
})