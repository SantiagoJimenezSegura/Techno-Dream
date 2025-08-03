ServerEvents.recipes(event => {

        // Fluid Drawers
    event.replaceInput({ output: /fluid/, mod: "functionalstorage" }, "#minecraft:planks", "#forge:plates/iron")
    event.replaceInput({ output: /fluid/, mod: "functionalstorage" }, "minecraft:bucket", "gtceu:lv_hermetic_casing")

let upgradeTiers = [
        ["copper", "lead", "bronze"],
        ["gold", "tin", "steel"],
        ["diamond", "copper", "aluminium"],
        ["netherite", "gold", "stainless_steel"]
    ]
    upgradeTiers.forEach((tier, tierIndex) => {
        event.remove({ id: `functionalstorage:${tier[0]}_upgrade` })
        event.shaped(`2x functionalstorage:${tier[0]}_upgrade`, [
            "PUP",
            "PGP",
            "PUP"
        ], {
            P: `#forge:plates/${tier[2]}`,
            G: `#forge:double_plates/${tier[1]}`,
            U: tierIndex == 0 ? "#functionalstorage:drawer" : (`functionalstorage:${upgradeTiers[tierIndex - 1][0]}_upgrade`),
        }).id(`functionalstorage:${tier[2]}_upgrade`)
    })

    // Backpack upgrading
    const sophBackpacksMaterials = [
        ["", null, null],
        ["copper_", "bronze", "lead"],
        ["iron_", "steel", "invar"],
        ["gold_", "aluminium", "electrum"],
        ["diamond_", "stainless_steel", "signalum"],
        ["netherite_", "tungsten_steel", "enderium"]
    ]
    sophBackpacksMaterials.forEach((material, index) => {
        if (index == 0) return;

        // Works for upgrades as the recipe type implies, but doesn't work for making new backpacks from scratch
        let outputBackpack = `sophisticatedbackpacks:${material[0]}backpack`
        let inputBackpack = `sophisticatedbackpacks:${sophBackpacksMaterials[index - 1][0]}backpack`
        event.remove({ mod: "sophisticatedbackpacks", output: outputBackpack })
        event.custom({
            "type": "sophisticatedbackpacks:backpack_upgrade",
            "conditions": [
                {
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": outputBackpack
                }
            ],
            "pattern": [
                " N ",
                "ICI",
                "N N"
            ],
            "key": {
                "N": {
                    "tag": (`forge:nuggets/${material[1]}`)
                },
                "I": {
                    "tag": (`forge:ingots/${material[2]}`),
                },
                "C": {
                    "item": inputBackpack
                }
            },
            "result": {
                "item": outputBackpack
            }
        });
    })

    event.remove({ id: "functionalstorage:storage_controller" })
    const controllerCore = ["#forge:storage_blocks/diamond", "#forge:storage_blocks/emerald"]
    controllerCore.forEach(coreBlock => {
        event.shaped("functionalstorage:storage_controller", [
            "III",
            "CDC",
            "IEI"
        ], {
            I: "gtceu:iron_plate",
            C: "#gtceu:circuits/lv",
            D: "#functionalstorage:drawer",
            E: coreBlock
        })
    })

})