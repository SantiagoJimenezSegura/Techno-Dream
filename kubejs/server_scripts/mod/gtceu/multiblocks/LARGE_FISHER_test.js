ServerEvents.recipes(event => {
    event.recipes.gtceu.large_fisher('test')
        .notConsumable('minecraft:fishing_rod')
        .chancedOutput(
            'minecraft:cod', 1000, 0)
        .circuit(3)
        .duration(100)
        .EUt(128)

})