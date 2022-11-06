import { defineStore } from 'pinia'

export const usePointStore = defineStore('points', () => {

    /* -------------------------------------------------------------------------- */
    /*                                    State                                   */
    /* -------------------------------------------------------------------------- */
    const earnedRewardPoint = ref(1)
    const totalRewardPoints = ref(null)
    const visitPoints = ref(0)
    const nuxtinReward = ref([])
    const offersAndDeals = ref(null)
    const rewardsToEarn = ref(null)

    /* -------------------------------------------------------------------------- */
    /*                                   Getters                                  */
    /* -------------------------------------------------------------------------- */

    const getRewardPoints = computed(() => {
        return rewardPoints.value
    })
    const getPoints = computed(() => rewardPoints.value)
    const getVistPoints = computed(() => visitPoints.value)
    const getRewards = computed(() => {
        return nuxtinReward
    })
    const getOfferandDeals = computed(() => offersAndDeals.value)
    const getRewardsToEarn = computed(() => rewardsToEarn.value)

    /* -------------------------------------------------------------------------- */
    /*                                   Actions                                  */
    /* -------------------------------------------------------------------------- */
    const calculatePoints = (credit) => {
        const currentPoints = earnedRewardPoint.value = credit * 10 

        if (currentPoints) {
            return currentPoints * 2
        }

    }

    return {
        calculatePoints,
        earnedRewardPoint

    }
})