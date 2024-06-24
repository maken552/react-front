import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom'

import { fetchDevicesDataFromAPI } from '@/api/slices/Devices.api'
import { fetchFAQDataFromAPI } from '@/api/slices/Faq.api'
import { fetchMarketDataFromAPI } from '@/api/slices/Market.api'
import { fetchRentalsDataFromAPI } from '@/api/slices/Rentals.api'
import { AboutPage } from '@/pages/about/AboutPage'
import { CloudPage } from '@/pages/cloud/CloudPage'
import { ContactPage } from '@/pages/contact/ContactPage'
import { BitcoinMiningProductSelected } from '@/pages/dashboard/checkout/BitcoinMiningProductSelected'
import { CloudMiningProductSelected } from '@/pages/dashboard/checkout/CloudMiningProductSelected'
import { DashboardPage } from '@/pages/dashboard/DashboardPage'
import { DashboardMiningBitcoinMinersPage } from '@/pages/dashboard/mining/DashboardMiningBitcoinMinersPage'
import { DashboardMiningCloudPage } from '@/pages/dashboard/mining/DashboardMiningCloudPage'
import { DashboardMiningPage } from '@/pages/dashboard/mining/DashboardMiningPage'
import { DashboardMiningRentalPage } from '@/pages/dashboard/mining/DashboardMiningRentalPage'
import { SettingsPage } from '@/pages/dashboard/settings/SettingsPage'
import { HomePage } from '@/pages/home/HomePage'
import { LegalPage } from '@/pages/legal/LegalPage'
import { PrivacyPage } from '@/pages/legal/PrivacyPage'
import { TermsPage } from '@/pages/legal/TermsPage'
import { LoginPage } from '@/pages/login/LoginPage'
import { MinersPage } from '@/pages/miners/MinersPage'
import { SecurityPage } from '@/pages/security/SecurityPage'
import { SignUpPage } from '@/pages/signup/SignUpPage'
import { AppDispatch } from '@/store'
import { setUser } from '@/store/features/userSlice/userSlice'

import { AppRoutePath, DOMAIN } from './appRoutePath'

const App = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchDevicesDataFromAPI())
    dispatch(fetchRentalsDataFromAPI())
    dispatch(fetchMarketDataFromAPI())
    dispatch(fetchFAQDataFromAPI())
  }, [dispatch])

  const token = Cookies.get('token')
  const userID = Cookies.get('userID')

  if (token && userID) {
    console.log('token & userID present')
    axios
      .get(`${DOMAIN}/api/clients/${userID}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(async function (response) {
        console.log('client', response)

        // TODO: set user data in redux
        dispatch(setUser(response.data.data))

        // navigate to dashboard
        // navigate(AppRoutePath.DASHBOARD())
      })
      .catch(function (error) {
        Cookies.remove('token')
        Cookies.remove('userID')
        window.location.pathname = '/'
        // setLoading(false)
        console.log(error)
      })
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path={AppRoutePath.HOME()} element={<HomePage />} />
          <Route path={AppRoutePath.CLOUD()} element={<CloudPage />} />
          <Route path={AppRoutePath.MINERS()} element={<MinersPage />} />
          <Route path={AppRoutePath.ABOUT()} element={<AboutPage />} />
          <Route path={AppRoutePath.SIGNUP()} element={<SignUpPage />} />
          <Route path={AppRoutePath.LOGIN()} element={<LoginPage />} />
          <Route path={AppRoutePath.SECURITY()} element={<SecurityPage />} />
          <Route path={AppRoutePath.CONTACT()} element={<ContactPage />} />
          <Route path={AppRoutePath.LEGAL()} element={<LegalPage />} />
          <Route path={AppRoutePath.PRIVACY()} element={<PrivacyPage />} />
          <Route path={AppRoutePath.TERMS()} element={<TermsPage />} />
          <Route
            path={AppRoutePath.DASHBOARD()}
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutePath.DASHBOARD_MINING()}
            element={
              <ProtectedRoute>
                <DashboardMiningPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutePath.DASHBOARD_MINING_RENT()}
            element={
              <ProtectedRoute>
                <DashboardMiningRentalPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutePath.DASHBOARD_MINING_CLOUD()}
            element={
              <ProtectedRoute>
                <DashboardMiningCloudPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutePath.DASHBOARD_MINING_BITCOIN()}
            element={
              <ProtectedRoute>
                <DashboardMiningBitcoinMinersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutePath.CLOUD_MINING_PRODUCT_SELECTED()}
            element={
              <ProtectedRoute>
                <CloudMiningProductSelected />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutePath.BITCOIN_MINING_PRODUCT_SELECTED()}
            element={
              <ProtectedRoute>
                <BitcoinMiningProductSelected />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutePath.SETTINGS()}
            element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<p>There&apos;s nothing here: 404!</p>} />
        </Routes>
      </Router>
    </>
  )
}

interface IProtectedRoute {
  children: React.ReactElement
}

const ProtectedRoute = ({ children }: IProtectedRoute): React.ReactElement => {
  if (Cookies.get('token') === undefined || Cookies.get('token') === null) {
    return <Navigate to={AppRoutePath.HOME()} replace />
  }

  return children
}

export default App
