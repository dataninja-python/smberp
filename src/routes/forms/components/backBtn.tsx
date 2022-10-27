import useGuestStore from '../../../store/guestStore'

export default function BackButton() {
  const back = useGuestStore((state: any) => state.back)
  const page = useGuestStore((state: any) => state.currentPage)
  return (
  <>
    {page === 1 ? <span>&nbsp;</span> : <button onClick={back}>Back</button>}
  </>
  )
}