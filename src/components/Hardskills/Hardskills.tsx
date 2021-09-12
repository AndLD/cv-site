import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'
import { isMobile } from 'react-device-detect'

import Subtitle from '../Subtitle'
import Hardskill from './Hardskill'

export default function Hardskills() {
    const { t } = useTranslation()

    return (
        <Fade triggerOnce={true} fraction={isMobile ? 0.3 : 0.6} duration={1500}>
            <Subtitle text={t('TechesStack')} />

            <Hardskill
                key={'hardskill1'}
                text={'JavaScript, HTML, CSS'}
                expYears={4}
                expYearsFirst={false}
                icons={['javascript', 'html', 'css']}
            />
            <Hardskill
                key={'hardskill2'}
                text={'React, Redux'}
                expYears={2}
                expYearsFirst={true}
                icons={['react', 'redux']}
            />
            <Hardskill key={'hardskill3'} text={t('jest')} expYears={0.5} expYearsFirst={true} icons={['jest']} />
            <Hardskill
                key={'hardskill4'}
                text={'Node.js + Express'}
                expYears={3}
                expYearsFirst={false}
                icons={['nodejs', 'express']}
            />
            <Hardskill
                key={'hardskill5'}
                text={t('typescript')}
                expYears={2}
                expYearsFirst={true}
                icons={['typescript']}
            />
            <Hardskill
                key={'hardskill6'}
                text={t('db')}
                expYears={3}
                expYearsFirst={false}
                icons={['mysql', 'mongodb']}
            />
            <Hardskill key={'hardskill7'} text={t('redis')} expYears={1} expYearsFirst={true} icons={['redis']} />
            <Hardskill
                key={'hardskill8'}
                text={'Google Docs API, Google Drive API, Firebase'}
                expYears={0.5}
                expYearsFirst={false}
                icons={['google', 'google-doc-api', 'google-drive-api', 'firebase']}
            />
            <Hardskill key={'hardskill9'} text={'Git, Jira, Trello'} icons={['git', 'jira', 'trello']} />
        </Fade>
    )
}
