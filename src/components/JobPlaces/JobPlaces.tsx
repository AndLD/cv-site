import React, { useState } from 'react'

import { Fade } from 'react-awesome-reveal'
import { isMobile } from 'react-device-detect'
import { useTranslation } from 'react-i18next'

import digitalWingIcon from '../../assets/icons/jobPlaces/DigitalWing.png'
import pentaHouseIcon from '../../assets/icons/jobPlaces/PentaHouse.png'
import kknauIcon from '../../assets/icons/jobPlaces/kknau.png'

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
                    'javascript',
                    'html',
                    'css',
                    'react',
                    'redux',
                    'typescript',
                    'nodejs',
                    'express',
                    'mysql',
                    'docker',
                    'google',
                    'google-drive-api'
                ],
                text: 'JS, HTML, CSS, React+Redux, TypeScript, Node.js+Express, MySQL, Docker, TDD, REST API, MVC, Google OAuth2.0, Google Drive API'
            },
            description: 'jobPlace3Description',
            term: 'jobPlace3Term'
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
