import LatestProjectsListItem from './LatestProjectsListItem';
import { useEffect, useState } from 'react';
import { getProjects } from '../../../services/ServicesProjects';

function LatestProjectsList() {

    const [latest, setLatest] = useState();

    useEffect(() => {
        getProjects().then((response) => {
            response.data = response.data.filter((e, i) => {
                return i < 3;
            });

            setLatest(response.data);
        });
    }, []);

    return (
        <div id="latest-projects-body">
            {
                latest && latest.map(
                    (item, id) => {
                        return <LatestProjectsListItem {...item} key={item.id} />
                    }
                )
            }
        </div>
    );
}

export default LatestProjectsList;