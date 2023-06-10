import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"

const useClass = ()=>{
    const {user} =  useContext(AuthContext)
    const { refetch,  data : addedClass =[] } = useQuery({
        queryKey: ['booking' , user?.email],
        queryFn: async()=>{
            const response = await fetch(`http://localhost:5000/booking?email=${user?.email}`)
            return response.json()
        }
      })
      return [addedClass,refetch]

}
export default useClass;