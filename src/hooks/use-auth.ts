import { useRouter } from "next/navigation"
import { toast } from "sonner"


const useAuth = () => {
    const router = useRouter()

  const signOut = async () => { 
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    router.push("/sign-in")
    router.refresh()
    if(!res.ok) throw new Error()
        toast.success("You have been signed out.")
       

    } catch (err) {
        toast.error("Couldn't sign out, please try again.")
    }
  }

  return { signOut }
}

export default useAuth