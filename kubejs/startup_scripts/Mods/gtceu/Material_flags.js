GTCEuStartupEvents.registry('gtceu:material', event => {

        GTMaterials.Invar.addFlags(GTMaterialFlags.GENERATE_RING) // This is for materials already in GTCEU
        //GTMaterials.get('custom_material_name').addFlags(GTMaterialFlags.GENERATE_FOIL); // This only works for materials added by GTCEU addons

})