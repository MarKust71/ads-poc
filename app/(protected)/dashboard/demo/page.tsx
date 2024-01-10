import { auth, signOut } from '@/auth'
import { Mstr } from '@/components/mstr'

const DashboardDemoPage = async () => {
  const session = await auth()

  return (
    <>
      <div className={'mb-4'}>{JSON.stringify(session)}</div>

      <form
        action={async () => {
          'use server'

          await signOut()
        }}
      >
        <button type={'submit'} className={'mb-5'}>
          Sign out
        </button>
      </form>

      <div className={'mt-5'} id={'embedding-container'}></div>

      <div className={'mt-5'} id={'embedding-dossier-container'}></div>

      <Mstr />
    </>
  )
}

export default DashboardDemoPage
