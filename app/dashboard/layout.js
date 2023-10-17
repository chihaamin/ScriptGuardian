import { getServerSession } from "next-auth"
import Nav from "@/components/navbar"
export default function Layout ({ children }) {
    const session = getServerSession();
    return (
        <div className='relative w-full h-screen '>
            <Nav sess={ session } />
            <div>
                { children }
            </div>
        </div>

    )
}