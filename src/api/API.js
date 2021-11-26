import { URL } from './constant'

export const API = {
    get(path) {
        return fetch(URL + path).then(res => res.json())
    }
}
