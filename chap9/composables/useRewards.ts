import { ref } from "vue"

interface Rewards {
    reward: number
}
export const useRewards = () => {
    const currentRewards = 5400
    const loading = ref(false)

    function calculateRewards(rewards: number): number {
        return rewards + currentRewards

    }
    return {
        calculateRewards
    }
}