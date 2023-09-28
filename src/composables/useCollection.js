import { app, auth } from "@/config/firebase";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { ref } from "vue";

const useCollection = (name) => {
    const error = ref(null);
    async function addRecord(record) {
        error.value = null;
        try {
            const response = await addDoc(collection(getFirestore(app), name), record);
            return response;
        } catch (err) {
            error.value = err.message
        }
    }

    return { error, addRecord }
}

export default useCollection;
