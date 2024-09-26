import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeContent from '../components/home-page/home-page';
import { APP_BASE_ROUTE, ROUTES } from '../components/utils/common-utils';
import AboutpPage from '../components/about/about';
import ContactPage from '../components/contact-details/contact-deatils';
import PortfolioPage from '../components/portfolio-page/portfolio';
import MainLayout from '../components/main-layout/main-layout';

const Routing = () => {
    const wrapMainLayout = (children) => <MainLayout>{children}</MainLayout>
    const router = createBrowserRouter([
        { path: ROUTES.HOME, element: wrapMainLayout(<HomeContent />) },
        { path: ROUTES.ABOUT, element: wrapMainLayout(<AboutpPage />) },
        { path: ROUTES.CONTACT, element: wrapMainLayout(<ContactPage />) },
        { path: ROUTES.PORTFOLIO, element: wrapMainLayout(<PortfolioPage />) },
        { path: APP_BASE_ROUTE, element: wrapMainLayout(<HomeContent />) },

    ])
    return <RouterProvider router={router} />

}

export default Routing;