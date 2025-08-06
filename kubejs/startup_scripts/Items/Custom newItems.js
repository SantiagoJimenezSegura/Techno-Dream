
    /// OBJETOS ///

StartupEvents.registry('item', technodream => {
	technodream.create('lunar_miner_i')
    .displayName('Minero Lunar')
    .tooltip('§9Objeto de Tipo:§r Tecnología desconocida')
    .tooltip('Quizás puedas usar esto en alguna máquina')
    .maxStackSize('4')

    technodream.create('unknown_device')
    .displayName('Aparato Desconocido')
    .tooltip('§9Objeto de Tipo:§r Tecnología desconocida')
    .tooltip('Quizás puedas usar esto en alguna máquina')
    .tooltip('§4¡CUIDADO CON ESTE APARATO!')
    .maxStackSize('4')

    technodream.create('overworld_ore_cluster')
    .displayName('Cúmulo de Minerales del Supramundo')
    .tooltip('§9Objeto de Tipo:§r Catalizador')
    .tooltip('§6Catalizador Primitivo')
    .tooltip('¿Quizás puedas obtener minerales de esto?')
    .maxStackSize('64')

    technodream.create('rotacional_circuit')
    .displayName('Circuito Rotacional')
    .tooltip('§6Este aparato mueve sus engranajes para hacer funcionar maquinaria rotacional')
    .tooltip('§7Tu primer circuito verdaderamente')
    .tooltip('§7Stone-Tier Circuit')
    .maxStackSize('64')

    technodream.create('leather_belt')
    .displayName('Correa de Cuero')
    .tooltip('§6Usado para unir los engranajes rotacionales de un circuito')
    .maxStackSize('64')

    technodream.create('raw_primitive_circuit')
    .displayName('Circuito Primitivo sin Procesar')
    .tooltip('§6Tu segundo circuito verdaderamente, de nuevo')
    .tooltip('§6Steam-Tier Circuit')
    .maxStackSize('64')

    technodream.create('compressed_raw_leather')
    .displayName('Cuero Crudo Comprimido')
    .tooltip('§cQue asco, ¿Esto está hecho de carne?')
    .maxStackSize('64')

    technodream.create('triode')
    .displayName('Triodo')
    .tooltip('§cLa Revolución del Diodo')
    .maxStackSize('64')
})

    /// BLOQUES ///

StartupEvents.registry('block', technodream => {
  technodream.create('unprocessed_treated_plank') // Create a new block with ID 'kubejs:unprocessed_treated_plank'
  .displayName('Madera Tratada sin Procesar')
  .textureAll('kubejs:block/unprocessed_treated_plank')
  .soundType('wood')
})