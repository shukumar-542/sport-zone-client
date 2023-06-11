import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"


const useClass = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    // const token = localStorage.getItem('access-token')
    const { refetch, data: addedClass = [] } = useQuery({
        queryKey: ['booking', user?.email],
        enabled : !!localStorage.getItem('access-token'),
        queryFn: async () => {
           const res = await axiosSecure(`/booking?email=${user?.email}`)
           return res.data
        }


    })
    return [addedClass, refetch]

}
export default useClass;