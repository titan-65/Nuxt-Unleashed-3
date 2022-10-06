<template>
    <div>
        <div class="bg-gray-100">
            <div class="site-wrapper">
                <MainNavbar />
                <div>
                    <slot />
                </div>
                <div>
                    <MainFooter />
                </div>
            </div>
        </div>
        
    </div>
</template>
<style scoped>
.site-wrapper {
    max-width: 1440px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
}
</style>