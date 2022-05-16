import '../styles/globals.css'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { RecoilRoot } from 'recoil'
import ApolloSetting from '../src/component/commons/apollo';
import { AuthContextProvider } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { ProtectedRoute } from '../src/component/commons/protected/ProtectedRoute';
import Layout from '../src/component/commons/layout';

const noAuthRequired = ['/', '/user/login', '/user/signUp']

function MyApp({ Component , pageProps }) {
  const router = useRouter()

  return (
    <RecoilRoot>
      <AuthContextProvider>
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
          ) 
          : (
          <ProtectedRoute>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ProtectedRoute>
        )}
      </AuthContextProvider>
    </RecoilRoot>
  )
}

export default MyApp
