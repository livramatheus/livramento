import LatestArticlesItemElm from './LatestArticlesItemElm';

export default function LatestArticlesItem() {

    return (
        <>
            {
                [1, 1, 1, 1].map((elm, id) => {
                    return <LatestArticlesItemElm />
                })
            }
        </>
    );

}