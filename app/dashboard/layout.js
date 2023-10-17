
import Nav from "@/components/navbar"
export default function Layout ({ children }) {
    return (
        
        <div className='relative w-full h-screen '>
            <Nav />
            <div>
                { children }
            </div>
        </div>

    )
}