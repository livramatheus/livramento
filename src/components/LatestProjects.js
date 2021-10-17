import { useState } from 'react';

import LatestProjectsPreview from './LatestProjectsPreview';

export default function LatestProjects() {

    const [latProjItm, setLatProjItm] = useState(
        [
            { idProj: 1, title: 'Yawnch'          , desc: 'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            { idProj: 2, title: 'Adipisicing Elit', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'                                  },
            { idProj: 3, title: 'Lorem Ipsum'     , desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'                                                  }
        ]
    );

    return (
        <div id="latest-projects">
            <h3 id="latest-projects-title" className="header2">Latest projects</h3>
            <div id="latest-projects-body">
                {
                    latProjItm.map(
                        (item) => 
                            <LatestProjectsPreview
                                idProj={item.idProj}
                                title={item.title}
                                desc={item.desc}
                                key={item.idProj}
                            />
                    )
                }
            </div>
        </div>
    );
}