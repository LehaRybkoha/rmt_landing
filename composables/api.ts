// import type { JwtPayload } from 'jwt-decode'
// import jwtDecode from 'jwt-decode'
// import { storeToRefs } from 'pinia'
// import { useGlobalStore } from '~/stores/global'
// import type { City } from '~/types/global'

// type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

// interface Options {
//   method?: Method
//   baseURL?: string
//   headers?: Headers
//   body?: any
//   params?: any
//   watch?: any
// }

// interface Headers {
//   [key: string]: string
// }

// function getFetchOptions(options: Options, isRefreshToken: boolean) {
//   const globalStore = useGlobalStore()
//   const { currentCity } = storeToRefs(globalStore)
//   const config = useRuntimeConfig()
//   const baseURL = options.baseURL || config.public.BASE_API_URL
//   const headers: Headers = {
//     Accept: 'application/json',
//     ...options.headers,
//   }

//   const token = useToken()
//   if (token.value && !isRefreshToken)
//     headers.authorization = `Bearer ${token.value}`

//   const fuserToken = useCookie('fuserToken')
//   if (fuserToken.value)
//     headers['Fuser-Token'] = fuserToken.value

//   const userLocation = useCookie<City>('userLocation')
//   const location = currentCity.value || userLocation.value
//   if (location)
//     headers['User-Location-Id'] = String(location.id)

//   const deviceUUID = useCookie('mindboxDeviceUUID')
//   if (deviceUUID.value)
//     headers.deviceUUID = deviceUUID.value

//   options.baseURL = baseURL
//   options.headers = headers
//   options.watch = false

//   return options
// }

// export async function useApi<T>(url: string, options: Options = {}) {
//   const token = useToken()
//   const isRefreshTokenRequest = url === '/api/token/refresh'

//   if (token.value && !isRefreshTokenRequest) {
//     const tokenExp = jwtDecode<JwtPayload>(token.value).exp
//     const currentTime = new Date().getTime()
//     const tokenTime = new Date(tokenExp! * 1000).getTime()

//     if (currentTime + 10 * 1000 >= tokenTime) {
//       const { data } = await useRefreshToken()

//       if (data.value)
//         useSetTokens(data.value)
//     }
//   }

//   options = getFetchOptions(options, isRefreshTokenRequest)

//   return useFetch<T>(url, options as any)
// }

// export function useApiGet<T>(url: string, options?: Options) {
//   return useApi<T>(url, {
//     method: 'GET',
//     ...options,
//   })
// }

// export function useApiDelete<T>(url: string, options?: Options) {
//   return useApi<T>(url, {
//     method: 'DELETE',
//     ...options,
//   })
// }

// export function useApiPost<T>(url: string, options?: Options) {
//   return useApi<T>(url, {
//     method: 'POST',
//     ...options,
//   })
// }
