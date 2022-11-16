
const { createApp } = Vue;

createApp({
    data() {
        return {
        message: 'Hello Vue!',
        Emails:[]
        }
    },
    created(){
        for (let index = 0; index <10; index++) {    
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=>{
                const result=response.data;
                console.log(result.response);
                this.Emails.push(result.response);    
            })
        }
    }
}).mount('#app')
