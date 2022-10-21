import { defineStore } from 'pinia'

export const usePaginationStore = defineStore('pagination', () => {
    const totalCount = ref(null)
    const pageSize = ref(null)
    const siblingCount = ref(1)
    const currentPage = ref()

    const paginationRange = () => {

    }

    return {
        totalCount,
        pageSize,
        siblingCount,
        currentPage,
        paginationRange
    }
})