import { Fade } from 'react-awesome-reveal'
import Subtitle from '../Subtitle'
import Hardskill from './Hardskill'

export default function Hardskills() {
    return (
        <Fade triggerOnce={true} fraction={0.6} duration={1500}>
            <Subtitle text="Стэк технологий" />

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
            <Hardskill
                key={'hardskill3'}
                text={'Unit-тестирование: Jest'}
                expYears={0.5}
                expYearsFirst={true}
                icons={['jest']}
            />
            <Hardskill
                key={'hardskill4'}
                text={'Node.js + Express'}
                expYears={3}
                expYearsFirst={false}
                icons={['nodejs', 'express']}
            />
            <Hardskill
                key={'hardskill5'}
                text={'TypeScript на Front End и Back End'}
                expYears={2}
                expYearsFirst={true}
                icons={['typescript']}
            />
            <Hardskill
                key={'hardskill6'}
                text={'Базы данных MySQL, Mongo DB'}
                expYears={3}
                expYearsFirst={false}
                icons={['mysql', 'mongodb']}
            />
            <Hardskill
                key={'hardskill7'}
                text={'Использую Redis для кеширования данных на сервере'}
                expYears={1}
                expYearsFirst={true}
                icons={['redis']}
            />
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
