'use client';
'use client';
import { useRouter } from 'next/navigation';

export default function NavBar()
{
    const router = useRouter()
    return (
        <>

  <div className="navbar bg-base-300">
  <button className="btn btn-ghost text-xl" onClick={()=>{router.push("/")}}>Quotetly</button>
  </div>
        </>
    )
}