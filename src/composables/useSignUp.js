import { ref } from "vue";
import { app, auth } from "@/config/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth'

const error = ref(null);
const isPending = ref(false);
async function signUp(email, password, fullname) {
    isPending.value = true;
    error.value = null;
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        if (!response) throw new Error("Could not create a new user");
        response.user.displayName = fullname;
        console.log(response);
        return response;
    } catch (err) {
        //  error.value = err.message;
        console.log(err);
        error.value = err.message;
    } finally {
        error.value = null;
        isPending.value = false;
    }

}
export function useSignUp() {
    return { error, isPending, signUp }
}