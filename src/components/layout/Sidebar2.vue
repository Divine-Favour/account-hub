<template>
    <div class="sidebar">
        <router-link to="/">
            <div class="home flex">
                <img src="../../assets/home.png" alt="">
            </div>
        </router-link>
       
        <div class="back flex">
            <img src="../../assets/transaction.svg" alt="">
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>

<style scoped>
    .sidebar {
        width: 72px;
        height: 1180px;
        background-color: #ffffff;
        float: left;
        margin-left: 0px;
    }
    img {
        height: 20px;
        width: 20px;
        margin: 12px auto;
    }
    .back {
        width: 72px;
        height: 48px;
        
    }
    .back:hover {
        background-color: #ececec;
        border-right: 3px #6964d9 solid;
    }
    .home {
        width: 72px;
        height: 48px;
        background-color: #ffffff;
    }
    .home:hover {
        background-color: #ececec;
        border-right: 3px #6964d9 solid;
    }
</style>