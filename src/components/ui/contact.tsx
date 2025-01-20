'use client'

import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export default function Example() {

  return (
    <div className="isolate bg-transparent px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >

      </div>


      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-card-foreground sm:text-5xl">Contact Me</h2>
        <p className="mt-2 text-lg/8 text-cyberblue">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <Input type="text" placeholder="First Name"></Input>
            <Input type="text" placeholder="Last Name"></Input>
            <Input type="email" placeholder="Email" className='w-full sm:col-span-2'></Input>

            {/* This is for the phone number label with the country selector */}
            <div className='flex space-x-4 w-full sm:col-span-2'>
                <select className="flex h-9 w-20 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                    <option className='option'>US</option>
                    <option className='option'>CA</option>
                    <option className='option'>EU</option>
                    <ChevronDownIcon aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"/>
                    
                </select>
                <Input type="text" placeholder="Phone #" className='w-full'></Input>
            </div>
            
            {/* Message Window */}
            <div className="grid w-full items-center gap-1.5 sm:col-span-2">
                <Label htmlFor="email">Message</Label>
                <Input type="text" placeholder="" className='w-full h-40' />
            </div>

            <div className="flex items-center space-x-2 sm:col-span-2">
                <Switch id="privacy" />
                <Label htmlFor="privacy">By selecting this, you agree to our privacy policy.</Label>
            </div>

            <Button type='submit' className='sm:col-span-2 bg-slate-700'>Let's Talk!</Button>
        </div>
      </form>
    </div>
  )
}
