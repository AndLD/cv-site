import { Container } from '@material-ui/core'
import { Fade } from 'react-awesome-reveal'
import { isMobile } from 'react-device-detect'

import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'

import './App.css'
import Header from './components/Header/Header'
import Terminal from './components/Terminal/Terminal'
import Hardskills from './components/Hardskills/Hardskills'
import Contacts from './components/Contacts'
import Link from './components/Link'
import Footer from './components/Footer'
import LangSwitcher from './components/LangSwitcher/LangSwitcher'
import JobPlaces from './components/JobPlaces/JobPlaces'

import enJson from './assets/lang/en.json'
import ruJson from './assets/lang/ru.json'
import uaJson from './assets/lang/ua.json'
import { useEffect, useState } from 'react'

// TODO: Refactoring
function getFromJson(json: any) {
    const obj: any = JSON.parse(JSON.stringify(json))

    let newObj = {}

    for (const key in obj) {
        newObj = { ...newObj, ...obj[key].translation }
    }

    const result: any = {
        translation: newObj
    }

    return result
}

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: getFromJson(enJson),
            ru: getFromJson(ruJson),
            ua: getFromJson(uaJson)
        },
        // lng: 'ru', // if you're using a language detector, do not define the lng option
        // fallbackLng: 'ru',

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    })

function App() {
    const { t } = useTranslation()

    const [lng, setLng] = useState(window.localStorage.getItem('lng') || 'ru')

    useEffect(() => {
        i18n.changeLanguage(lng)
    }, [])

    useEffect(() => {
        window.localStorage.setItem('lng', lng)
        i18n.changeLanguage(lng)
    }, [lng])

    return (
        <div>
            <LangSwitcher lngState={[lng, setLng]} />
            <Container className="App" maxWidth="lg">
                <Fade triggerOnce={true} fraction={isMobile ? 0.3 : 0.6} duration={1500}>
                    <Header />

                    {/* // TODO: Refactoring */}
                    <div
                        style={{
                            marginTop: isMobile ? '50vh' : 0
                        }}
                    >
                        <Terminal text={t('Terminal1')} />
                    </div>
                </Fade>

                <Hardskills />

                <Fade triggerOnce={true} fraction={isMobile ? 0.3 : 0.6} duration={1500}>
                    <Terminal text={t('Terminal2')} />
                </Fade>

                <JobPlaces />

                <Fade triggerOnce={true} fraction={isMobile ? 0.3 : 0.6} duration={1500}>
                    <Link link="https://github.com/AndLD?tab=repositories" icon="github" text={t('GitHub')} />

                    <Contacts />
                </Fade>

                <Footer />
            </Container>
        </div>
    )
}

export default App
