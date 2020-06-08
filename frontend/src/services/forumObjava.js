import Service from '../services/axiosInit'


let Forum = {
    async DodajObjavu(body){
        try {
            return await Service.post('/forum/objava', body)
        } catch (error) {
            throw error.response
        }
    },
    async SveObjave(){
        try {
            return await Service.get('/forum')
        } catch (error) {
            throw error.response
        }
    },
    async JednaObjava(id){
        try {
            return await Service.get(`/forum/objava/${id}`)
        } catch (error) {
            throw error.response
        }
    },
    async Obrisi(id){
        try {
            return await Service.delete(`/forum/objava/${id}`)
        } catch (error) {
            throw error.response
        }
    },
    async Komentari(id){
        try {
            return await Service.get(`forum/objava/${id}/komentari`)
        } catch (error) {
            throw error.response
        }
    },
}



export default Forum