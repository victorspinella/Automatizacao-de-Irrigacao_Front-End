<template>
    <h1>Sign In to an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMSG">{{ errMSG }}</p>
    <p><button> @click="register">Submit</button></p>
    <p><button> @click="signInWithGoogle">Sign In With Google</button></p>
</template>

<script setup>
    import { ref } from "vue";
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    import { useRouter } from 'vue-router' 
    const email = ref("");
    const password = ref("");
    const errMSG = ref()
    const router = useRouter(); 
    const register = () => {
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                console.log("Successfully signed in!");
                router.push('/')
            })
            .catch((error) => {
                console.log(error.code);
                switch (error.code) {
                    case "auth/invalid-email":
                        errMSG.value = "Invalid email";
                        break;
                    case "auth/user-not-found":
                        errMSG.value = "No account with that email was found";
                        break;
                    case "auth/wrong-password":
                        errMSG.value = "Incorrect password";
                        break;
                    default:
                        errMSG.value = "Email or password was incorrect";
                        break; 
                }
                alert(error.message);
            });
    };

    const signInWithGoogle = () => {

    };
</script>