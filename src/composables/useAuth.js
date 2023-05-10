import { ref } from 'vue'

const dbUsers = [
    {
        username: 'admin',
        password: 'admin',
        user: {
            name: 'Admin',
            role: 'admin',
            email: 'admin@coolcompany.com',
        },
    },
    {
        username: 'user',
        password: 'user',
        user: {
            name: 'User',
            role: 'user',
            email: 'user@coolcompany.com',
        },
    },
]

const isAuthernticated = ref(false)
const user = ref({})

const getUser = (username, password) => { }

export const useAuth = () => {
    const login = (username, password) => {
        const user = dbusers.find((u) => u.username === username && u.password === password)
        if (user) {
            const { name, role, email, username } = user
            isAuthernticated.value = true
            user.value = {name, role, email, username }
        }
    }
    return { isAuthernticated, user, login }
}