import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutUsPage from './pages/AboutUs';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';


function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />

    }
    ,
    {
      path: "/about",
      element: <AboutUsPage />

    },
    {
      path: "/privacy",
      element: <PrivacyPolicyPage />

    },

    {
      path: "/term",
      element: <TermsConditionsPage/>

    },



  ],
    {
      future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );

  return (
    <RouterProvider future={{
      v7_startTransition: true,
    }} router={router} />
  );
}

export default App;
