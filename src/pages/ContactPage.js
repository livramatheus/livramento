import ContactInfo from '../components/ContactInfo';
import { Helmet } from 'react-helmet';

export default function ContactPage() {

    return (
        <>
            <Helmet>
                <title>Contact - Livramento.dev</title>
                <meta name="description" content="Contact - Matheus do Livramento" />
                <meta name="keywords" content="Matheus, Livramento, portfolio, web, developer, full, stack" />
                <meta name="author" content="Matheus do Livramento" />
            </Helmet>

            <h1>Reach me out</h1>

            <article className="article">
                <ContactInfo />
            </article>
        </>
    );
}