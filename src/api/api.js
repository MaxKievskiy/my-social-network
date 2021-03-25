import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2464a914-0f3c-4f8f-b4af-1b90a52d8689"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getUsers2(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },
    getProfile(userID) {
        return profileAPI.getProfile(userID);
    }
}
export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/` + userID)
            .then(response => response.data)
    },
    getStatus(userID) {
        return instance.get('profile/status/' + userID)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },

    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}


