'use client'

import { PlusIcon } from 'lucide-react'
import { Button } from '../primitives/button'
import { useState } from 'react'

export function ButtonWithStates() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Button
      className={
        'group size-9 bg-gray-elevation-1 flex items-center justify-center border rounded-full hover:bg-gray-elevation-2'
      }
      onPress={() => setOpen((prevState) => !prevState)}
      aria-expanded={open}
      aria-label={open ? 'Close menu' : 'Open menu'}
    >
      <PlusIcon
        className="group-aria-expanded:rotate-[135deg] transition-transform duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)]"
        size={16}
        aria-hidden="true"
      />
    </Button>
  )
}
