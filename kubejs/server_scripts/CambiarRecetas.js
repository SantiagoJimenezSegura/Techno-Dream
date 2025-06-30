ServerEvents.recipes(event => {	
  // Shaped mud recipe (returns empty bucket)
  event.shaped(
    Item.of('minecraft:mud', 8),
    [
      'DDD',
      'DWD',
      'DDD'
    ],
    {
      D: 'minecraft:dirt',
      W: 'minecraft:water_bucket'
    }
  ).replaceIngredient('minecraft:water_bucket', Item.of('minecraft:bucket')); // returns empty

  // Remove default packed mud recipe
  event.remove({ id: 'minecraft:packed_mud' });

  // Add custom packed mud recipe using mallet
  event.shaped(
    'minecraft:packed_mud',
    [
      'PW',
    ],
    {
      P: 'minecraft:mud',
      W: '#forge:tools/mallets'
    }
  );

  // Remove old steam pressurizer recipe
  event.remove({ id: 'gtceu:shaped/steam_pressurizer' });

  // Add new steam pressurizer recipe
  event.shaped(
    'gtca:steam_pressurizer',
    [
      'BPB',
      'CTC',
      'WHW'
    ],
    {
      B: 'gtceu:lv_electric_pump',
      P: 'gtceu:lv_electric_piston',
      C: '#gtceu:circuits/lv',
      T: 'gtceu:steel_large_fluid_pipe',
      W: 'gtceu:tin_single_cable',
      H: 'gtceu:lv_machine_hull'
    }
  );

  // Remove old high pressure steam recipe
  event.remove({ id: 'gtceu:steam_pressurizer/hp_steam' });

  // Add new high pressure steam recipe
  event.recipes.gtceu.steam_pressurizer('hp_steam')
    .inputFluids(Fluid.of('gtceu:steam', 6400))
    .outputFluids(Fluid.of('gtca:high_pressure_steam', 640))
    .duration(150)
    .EUt(32);
});