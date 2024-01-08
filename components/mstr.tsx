'use client'

import { useEffect } from 'react'
import { runCode } from '@/lib/mstr'

export const Mstr = () => {
  useEffect(() => {
    const run = async () => {
      try {
        await runCode()
      } catch (error) {
        console.log(
          '%c runCode error: ',
          'color: black; background-color: yellow',
          {
            error,
          }
        )
      }
    }
    run()
  }, [])

  return <></>
}
