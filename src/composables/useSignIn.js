import { ref } from "vue";
import { app, auth } from "@/config/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth'




const error = ref(null);
const isPending = ref(false);




async function signIn(email, password) {
    error.value = null;
    isPending.value = true;
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
       // console.log(response);
        return response;
    } catch (err) {
        console.log(err);
        error.value = err.message
    } finally {

        isPending.value = false;
    }
}

export function useIsLogin() {
    return { error, isPending, signIn }
}