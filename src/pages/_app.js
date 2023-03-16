import { SideBar } from '@/components'
import '@/styles/globals.css'
import store from '@/redux/store'
import { Provider } from 'react-redux'
export default function App({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  
  return (
    <Provider store={store}>
       <div className="flex bg-[#FAFAFA] h-full">
      <SideBar/>
      <Component {...pageProps} />
      </div>
    </Provider>

  )
}
