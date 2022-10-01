import { useRouter } from 'next/router'

export const useAssetPath = (path: string) => {
  const { basePath } = useRouter()
  return `${basePath ? basePath : ''}/${path}`
}
