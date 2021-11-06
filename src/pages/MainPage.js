import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../components/NavBar';
import SectionMain from '../components/SectionMain';
import LatestProjects from '../components/LatestProjects';
import Footer from '../components/Footer';
import AboutPage from './AboutPage';
import LearningPage from './LearningPage';
import ContactPage from './ContactPage';
import PortfolioPage from './PortfolioPage';
import PageNotFound from '../components/PageNotFound';
import ScrollToTop from '../components/ScrollToTop';
import AboutIntro from '../components/AboutIntro';
import { Helmet } from 'react-helmet';

export default function Main() {

    if (process.env.REACT_APP_MAINTENANCE == 1) {
        return (
            <h1>⚠ Under Maintenance!</h1>
        )
    }

    return (
        <BrowserRouter>
            <Helmet>
                <title>Welcome - Livramento.dev</title>
                <meta name="description" content="Main Page - Matheus do Livramento - Portfolio" />
                <meta name="keywords" content="Matheus, Livramento, portfolio, web, developer, full, stack" />
                <meta name="author" content="Matheus do Livramento" />
            </Helmet>
            
            <ScrollToTop />
            <NavBar />


            <Switch>
                <Route exact path="/">
                    <SectionMain />
                    <AboutIntro />
                    <LatestProjects />
                </Route>

                <Route path="/about">
                    <AboutPage />
                </Route>

                <Route path="/portfolio">
                    <PortfolioPage />
                </Route>

                <Route path="/learning">
                    <LearningPage />
                </Route>
                
                <Route path="/contact">
                    <ContactPage />
                </Route>

                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>

            <Footer />
        </BrowserRouter>

    )
}