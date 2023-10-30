import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl, callback) => {
    const [infoApi, setInfoApi] = useState()
    
    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
            .then(response => setInfoApi(response.data))
            .catch(error => console.log(error))
    }
    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
            .then(response => {
                setInfoApi([...infoApi, response.data])
                callback(true)        
            })
            .catch(error => console.log(error))
    }
    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
            .then(response => {
                setInfoApi(infoApi.filter(element => id !== element.id) 
                )})
            .catch(error => console.log(error))
    }
    const updateApi = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.patch(url, data)
            .then(response => {
                setInfoApi(infoApi.map(element => id === element.id ? response.data : element) )
                callback(true)
                
            })
            .catch(error => console.log(error))
    }
    return[infoApi, getApi, postApi, deleteApi, updateApi]
}

export default useFetch