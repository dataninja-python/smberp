import useGuestStore from '../../../store/guestStore'

export default function Counter() {
    const page = useGuestStore((state: any) => state.currentPage)
    const max = useGuestStore((state: any) => state.maxPageNum);
    return (
      <>
      <p>{page} of {max}</p>
      </>
    )
  }