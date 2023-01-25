import React, { useState } from 'react'

import { Fade } from 'react-awesome-reveal'
import { isMobile } from 'react-device-detect'
import { useTranslation } from 'react-i18next'

import digitalWingIcon from '../../assets/icons/jobPlaces/DigitalWing.png'
import pentaHouseIcon from '../../assets/icons/jobPlaces/PentaHouse.png'
import kknauIcon from '../../assets/icons/jobPlaces/kknau.png'
import tringIcon from '../../assets/icons/jobPlaces/Tring.jpg'
import dnuvsIcon from '../../assets/icons/jobPlaces/dnuvs.png'

import JobPlace from './JobPlace'
import Subtitle from '../Subtitle'

export default function JobPlaces() {
    const { t } = useTranslation()

    const [jobPlaces] = useState([
        {
            key: 'jobPlace1',
            icon: digitalWingIcon,
            company: 'DigitalWing',
            position: 'Backend Golang Developer',
            format: 'partTime',
            stack: {
                icons: ['golang', 'mongodb'],
                text: 'Golang, MongoDB, REST API, MVC, micro-services'
            },
            description: 'jobPlace1Description',
            term: 'jobPlace1Term'
        },
        {
            key: 'jobPlace2',
            icon: pentaHouseIcon,
            company: 'Penta House',
            position: 'Full Stack JavaScript Developer',
            format: 'fullTime',
            stack: {
                icons: [
                    'javascript',
                    'html',
                    'css',
                    'vue',
                    'vuex',
                    'vuetify',
                    'nodejs',
                    'express',
                    'mysql',
                    'docker',
                    'google',
                    'google-doc-api',
                    'google-drive-api',
                    'google-apps-script'
                ],
                text: 'JS, HTML, CSS, Vue, Vuex, Vuetify, Node.js+Express, MySQL, Docker, REST API, MVC, Google OAuth2.0, Google Doc API, Google Drive API, Google Apps Script'
            },
            description: 'jobPlace2Description',
            term: 'jobPlace2Term'
        },
        {
            key: 'jobPlace3',
            icon: kknauIcon,
            company: 'ВСП "КРФК НАУ"',
            position: 'Web Developer',
            format: 'fullTime',
            stack: {
                icons: [
                    'typescript',
                    'javascript',
                    'html',
                    'css',
                    'react',
                    'redux',
                    'nodejs',
                    'express',
                    'postgres',
                    'mysql',
                    'google',
                    'google-drive-api',
                    'jest',
                    'docker'
                ],
                text: 'TS, JS, HTML, CSS, React, Redux,d Node.js+Express, Postgres, MySQL, Google OAuth2.0, Google Drive API, Jest, Docker'
            },
            description: 'jobPlace3Description',
            term: 'jobPlace3Term'
        },
        {
            key: 'jobPlace4',
            icon: tringIcon,
            company: 'Tring',
            position: 'Backend Node.js Developer',
            format: 'partTime',
            stack: {
                icons: ['javascript', 'nodejs', 'express', 'postgres', 'jest', 'microsoft-azure', 'docker'],
                text: 'JS, Node.js+Express, Postgres, Redis, Jest, Microsoft Azure, Docker'
            },
            description: 'jobPlace4Description',
            term: 'jobPlace4Term'
        },
        {
            key: 'jobPlace5',
            icon: dnuvsIcon,
            company: 'ДОН ДУВС',
            position: 'Web Developer',
            format: 'project',
            stack: {
                icons: ['typescript', 'html', 'css', 'react', 'redux', 'postgres', 'redis', 'jest', 'docker'],
                text: 'TypeScript, HTML, CSS, React, Redux, Postgres, Redis, Jest, Docker'
            },
            description: 'jobPlace5Description',
            term: 'jobPlace5Term'
        }
    ])

    return (
        <Fade triggerOnce={true} fraction={isMobile ? 0.3 : 0.6} duration={1500}>
            <Subtitle text={t('commercialExp')} />
            {jobPlaces.map((jobPlace) =>
                React.createElement(JobPlace, {
                    ...jobPlace,
                    // TODO: Refactoring ++
                    format: t(jobPlace.format),
                    description: t(jobPlace.description),
                    term: t(jobPlace.term)
                })
            )}
        </Fade>
    )
}
