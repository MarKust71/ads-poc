'use client'

import { useEffect } from 'react'
import { runCodeLibrary } from '@/lib/mstr/library'
import { runCodeDossier } from '@/lib/mstr/dossier'
import { runCodeLibraryDemo } from '@/lib/mstr/library-demo'

export const Mstr = ({ demo }: { demo?: boolean }) => {
  useEffect(() => {
    const run = async () => {
      try {
        if (demo) {
          await runCodeLibraryDemo()
        } else {
          await runCodeLibrary()
        }
      } catch (error) {
        console.log(
          '%c runCodeLibrary error: ',
          'color: black; background-color: yellow',
          {
            error,
          }
        )
      }

      try {
        await runCodeDossier()
      } catch (error) {
        console.log(
          '%c runCodeDossier error: ',
          'color: black; background-color: yellow',
          {
            error,
          }
        )
      }
    }
    run()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return false
}
