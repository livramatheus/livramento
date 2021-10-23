import FooterSocialListItem from './FooterSocialListItem';
import socialItems from '../../../../data/socialItems';

function FooterSocialList() {
    return (
        <div id="page-footer-social-media" >
            {
                socialItems.map((elm, id) => {
                    return <FooterSocialListItem key={id} {...elm} />
                })
            }
        </div>
    );
}

export default FooterSocialList;