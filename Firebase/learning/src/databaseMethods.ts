import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { App } from "../server/setup";

const db = getFirestore(App);
const auth = getAuth();

function getTaskInfo(event: SubmitEvent): string[] {
    let title: string;
    let description: string;
    let user_name: string;
    if (auth.currentUser) {
        user_name = auth.currentUser.displayName ?? "No Name";
    } else {
        console.error("User is not signed in");
        return ["", "", ""];
    }
    if (event.target) {
        const addTaskForm = event.target as HTMLFormElement;
        const title_input = addTaskForm.children.namedItem("title") as HTMLInputElement;
        const description_input = addTaskForm.children.namedItem("description") as HTMLInputElement;
        if (title_input.value && description_input.value) {
            title = title_input.value;
            description = description_input.value;
        } else {
            console.error("Title or description does not exist");
            return ["", "", ""];
        }
    } else {
        console.error("Addtask function called with on no task form");
        return ["", "", ""];
    }
    return [title, description, user_name];
}

async function addTask(event: SubmitEvent) {
    event.preventDefault();
    let [title, description, user] = getTaskInfo(event);
    if (!(title && description)) {
        return;
    }
    try {
        const doc = await addDoc(collection(db, "tasks"), {
            task_title: title,
            task_details: description,
            user: user,
            task_created_on: new Date(),
        });
        console.log("Document written with id, ", doc.id);
    } catch (e) {
        console.error("Error adding document", e);
    }
}

export { addTask };
