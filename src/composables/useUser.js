import { ref } from "vue";
import { auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";

const user = ref(null);

onAuthStateChanged(auth, function (_user) {
    if (_user) {
        user.value = _user;
    }
});


function getUser() {
    return { user }
}




export function useUser() {
    return { getUser }
}