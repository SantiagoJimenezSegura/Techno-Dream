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

});