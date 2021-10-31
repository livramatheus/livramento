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

export default function Main() {

    if (process.env.REACT_APP_MAINTENANCE == 1) {
        return (
            <h1>⚠ Under Maintenance!</h1>
        )
    }

    return (
        <BrowserRouter>
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