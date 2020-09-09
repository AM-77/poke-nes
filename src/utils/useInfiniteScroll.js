import { useState, useEffect } from "react"

const useInfiniteScroll = (refEl) => {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const el = refEl.current
    const onScroll = () => {
      if ( ( (el.firstElementChild.offsetHeight - el.offsetHeight) <= el.scrollTop ) && !isLoading ) setIsLoading(true)
    }
    if (el !== null) el.addEventListener("scroll", onScroll)
    return () => el.removeEventListener("scroll", onScroll)
  }, [isLoading, refEl])

  return [isLoading, setIsLoading]
}

export default useInfiniteScroll
