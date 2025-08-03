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
})

