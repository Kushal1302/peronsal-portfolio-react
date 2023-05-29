import axios from 'axios'

export const getRepo = async () => {
    return await axios.get('https://api.github.com/users/Kushal1302/repos')
} 