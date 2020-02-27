<template>
    <div class="sidebar">
        <router-link to="/">
            <div class="home flex">
                <img class="image1" src="../../assets/home.png" alt="">
            </div>
        </router-link>
        <router-link to="/transfers">
            <div class="back flex">
                <img src="../../assets/transaction.svg" alt="">
            </div>
        </router-link>
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
        margin-top: -30px;
    }
    img {
        height: 20px;
        width: 20px;
        margin: 12px auto;
    }
    .image1 {
        filter: grayscale(100%);   
        -webkit-filter: grayscale(100%); 
    }
    .image1:hover {
        filter: saturate(100%);   
        -webkit-filter: saturate(100%); 
    }
    .home {
        width: 72px;
        height: 48px;
    }
    .home:hover {
        background-color: #ececec;
        border-right: 3px #6964d9 solid;
    }
    .back {
        width: 72px;
        height: 48px;
        background-color: #ffffff;
    }
    .back:hover {
        background-color: #ececec;
        border-right: 3px #6964d9 solid;
    }
</style>