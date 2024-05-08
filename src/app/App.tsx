import Cookies from 'js-cookie'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom'

import { AboutPage } from '@/pages/about/AboutPage'
import { CloudPage } from '@/pages/cloud/CloudPage'
import { DashboardPage } from '@/pages/dashboard/DashboardPage'
import { DashboardMiningPage } from '@/pages/dashboard/mining/DashboardMiningPage'
import { HomePage } from '@/pages/home/HomePage'
import { LegalPage } from '@/pages/legal/LegalPage'
import { PrivacyPage } from '@/pages/legal/PrivacyPage'
import { TermsPage } from '@/pages/legal/TermsPage'
import { LoginPage } from '@/pages/login/LoginPage'
import { MinersPage } from '@/pages/miners/MinersPage'
import { SignUpPage } from '@/pages/signup/SignUpPage'

import { AppRoutePath } from './appRoutePath'

const App = () => {
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
            element={<DashboardMiningPage />}
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
