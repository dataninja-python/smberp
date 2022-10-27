import useGuestStore from '../../../store/guestStore'

export default function NextButton() {
  const next = useGuestStore((state: any) => state.next)
  const page = useGuestStore((state: any) => state.currentPage)
  return (
  <>
    {page === 4 ? <span>&nbsp;</span> : <button onClick={next}>Next</button>}
  </>
  )
}