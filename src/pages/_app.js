import { SideBar } from '@/components'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  
  return (
  <div className="flex bg-[#FAFAFA]">
    <SideBar/>
    <Component {...pageProps} />
  </div>
  )
}
