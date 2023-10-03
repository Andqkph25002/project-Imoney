import { app, auth } from "@/config/firebase";
import { FieldPath, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { reactive } from "vue";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useUser } from "./useUser";

const { getUser } = useUser();
const { user } = getUser();

const useStorage = (name) => {  

    var filePath = reactive("");


    async function uploadFile(file) {
        const storage = getStorage();
        filePath = `${name}/${user.value.uid}/${file.name}`;
        const fileRef = ref(storage, filePath);
        await uploadBytes(fileRef, file);
    }


    return { filePath, uploadFile };
}

export default useStorage;

