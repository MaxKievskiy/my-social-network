import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "089084e0-1fba-4122-9cc2-ab4560410117"
    }
})

export const UsersAPI = {
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
    }
}
export const ProfileAPI = {
    getProfile(userID) {
        return instance.get(`profile/` + userID)
            .then(response => response.data)
    }
}
export const HeaderAPI = {
    getLogin() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}


