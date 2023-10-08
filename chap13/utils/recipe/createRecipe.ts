export const createRecipe = (params, credentials, recipe) => {
    try {
        return $fetch('/api/recipes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${credentials?.token}`,
            },
            body: recipe
        })
    } catch (e) {
        console.error(e)
    }
}