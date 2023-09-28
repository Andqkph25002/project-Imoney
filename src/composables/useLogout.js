import { ref } from "vue";
import { app, auth } from "@/config/firebase";
import { signOut } from 'firebase/auth'


const error = ref(null);
async function logout() {
    error.value = null;
    try {
        const response = await signOut(auth);
        return response;
    } catch (err) {
        console.log(err);
        error.value = err.message;
    }
}

export function useLogout() {
    return { error, logout }
}