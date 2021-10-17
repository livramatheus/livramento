import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from './NavBar';
import SectionMain from './SectionMain';
import LatestArticles from './LatestArticles';
import LatestProjects from './LatestProjects';
import Footer from './Footer';
import About from './About';
import Articles from './Articles';
import Contact from './Contact';
import Projects from './Projects';
import PageNotFound from './PageNotFound';
import References from './References';
import ScrollToTop from './ScrollToTop';

export default function Main() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <NavBar />

            <Switch>
                <Route exact path="/">
                    <SectionMain />
                    <LatestArticles />
                    <LatestProjects />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/articles">
                    <Articles />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>

                <Route path="/projects">
                    <Projects />
                </Route>

                <Route path="/references">
                    <References />
                </Route>

                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>

            <Footer />
        </BrowserRouter>

    )
}