EntityEvents.death('minecraft:villager', event => {
    let killer = event.entity.lastHurtByMob
    if (!killer.isPlayer()) return
    if (Math.random() > 0.05) return
    let warp = killer.persistentData.getInt(warpCount)
    if (warp > 20) return
    updateWarpCount(killer, warp + 1)
    killer.tell(Text.darkPurple({ "translate": "kubejs.msg.village.killed.1" }))
})