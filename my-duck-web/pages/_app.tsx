// import '../styles/globals.css'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { RecoilRoot } from 'recoil'
import ApolloSetting from '../src/component/commons/apollo';
import { AuthContextProvider } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { ProtectedRoute } from '../src/component/commons/protected/ProtectedRoute';
import Layout from '../src/component/commons/layout';
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { Global } from '@emotion/react';
import { globalStyles } from '../src/component/commons/styles/globalStyles';

const noAuthRequired = ['/', '/user/login', '/user/signUp']

function MyApp({ Component , pageProps }) {
  const router = useRouter()

  return (
    <AuthContextProvider>
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
          ) 
          : (
            <ProtectedRoute>
              <RecoilRoot>
              <Global styles={globalStyles} />
                <Layout>
                  <Component {...pageProps} />
                </Layout>
            </RecoilRoot>
          </ProtectedRoute>
        )}
      </AuthContextProvider>
  )
}

export default MyApp
