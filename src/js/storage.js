const save = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error("Set name error: ", error.name);
        console.error("Get state error: ", error.message);
    }
};

const load = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error("Set name error: ", error.name);
        console.error("Get state error: ", error.message);
    }
};

const remove = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return localStorage.removeItem(serializedState);
    } catch (error) {
        console.error("Set name error: ", error.name);
        console.error("Get state error: ", error.message);
    }
};

/* named export przy imporcie dajemy np.
import { square, diag } from "./path/to/my-module.js";
default export przy imporcie dajemy np.
import storage from "./storage.js";*/

export default {
    save,
    load,
    remove
};