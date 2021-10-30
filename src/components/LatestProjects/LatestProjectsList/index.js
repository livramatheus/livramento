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

    const latProjItm = [
        { idProj: 1, title: 'Yawnch', desc: 'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { idProj: 2, title: 'Adipisicing Elit', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { idProj: 3, title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.' }
    ]

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