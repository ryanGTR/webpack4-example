import Vue from "vue"

export default Vue.component("Profile", {
    data:() => ({
        name: "Clay"
    }),
    template: `
    <div class="profile">
    <img src="./images/link.jpg" alt="">
    <h1>{{ name }}</h1>
    </div>` 
})