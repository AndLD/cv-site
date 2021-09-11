import { useState } from 'react'
import { Container } from '@material-ui/core'

import './App.css'
import Header from './components/Header/Header'
import Terminal from './components/Terminal/Terminal'
import Hardskills from './components/Hardskills/Hardskills'
import Contacts from './components/Contacts'
import Link from './components/Link'
import Footer from './components/Footer'
import { Fade } from 'react-awesome-reveal'

function App() {
    const [typedStyleColor, setTypedStyleColor] = useState('orange')
    const [jsStyleBackground, setJsStyleBackground] = useState('transparent')

    return (
        <Container className="App" maxWidth="lg">
            <Fade triggerOnce={true} fraction={0.6} duration={1500}>
                <Header
                    typedStyleColorState={[typedStyleColor, setTypedStyleColor]}
                    jsStyleBackgroundState={[jsStyleBackground, setJsStyleBackground]}
                />

                <Terminal text="Здравствуйте. Меня зову Андрей. Мне 20 лет. Я являюсь Full Stack JS Developer. 4 года в веб-разработке. Далее представляю вам стек, на котором пишу приложения." />
            </Fade>

            <Hardskills />

            <Fade triggerOnce={true} fraction={0.6} duration={1500}>
                <Terminal text="Так же я придерживаюсь концепций SOLID, DRY, KISS, TDD. Использую REST API, MVC и микросервисную архитектуру для Back End части." />

                <Link
                    link="https://github.com/AndLD?tab=repositories"
                    icon="github"
                    text="Это ссылка на мой GitHub. Здесь Вы можете ознакомиться с проектами, которые я выполнял. При необходимости готов выполнить тестовое задание."
                />

                <Contacts />
            </Fade>
            <Footer />
        </Container>
    )
}

export default App
