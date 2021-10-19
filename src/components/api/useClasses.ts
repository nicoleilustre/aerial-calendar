import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export const useClasses = () => {
  const { data, error } = useSWR('/classes', fetcher)
  const isLoading = !error && !data
  return {
    data,
    isLoading
  }
}