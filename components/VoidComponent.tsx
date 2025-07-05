import React from 'react'
import { Button } from './ui/button'
import { Loader } from 'lucide-react'
import  Link  from 'next/link';


export default function VoidComponent() {
  return (
    <div className='h-[400px] flex flex-col items-center justify-center gap-6'>
        <p className='text-lg'>Pour le moment l&apos;application n&apos;a aucune donnée</p>
        <Link href="/">
        <Button className="flex p-4">
            <Loader/>
            <p> Veuillew recharger cette page</p>
        </Button>
        </Link>
    </div>
  )
}