import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import { Fade } from 'react-awesome-reveal'

import './App.css'
import Header from './components/Header'
import Hardskill from './components/Hardskill'
import Terminal from './components/Terminal'
import Subtitle from './components/Subtitle'
import Icon from './components/Icon'

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
                    key={'hardskill6'}
                    text={'Использую Redis для кеширования данных на сервере'}
                    expYears={1}
                    expYearsFirst={true}
                    icons={['redis']}
                />
                <Hardskill
                    key={'hardskill7'}
                    text={'Google Docs API, Google Drive API, Firebase'}
                    expYears={0.5}
                    expYearsFirst={false}
                    icons={['google', 'google-doc-api', 'google-drive-api', 'firebase']}
                />
                <Hardskill
                    key={'hardskill8'}
                    text={'Git, Jira, Trello'}
                    expYears={null}
                    expYearsFirst={null}
                    icons={['git', 'jira', 'trello']}
                />

                <Terminal text="Так же я придерживаюсь концепций SOLID, DRY, KISS, TDD. Использую REST API, MVC и микросервисную архитектуру для Back End части." />

                <div
                    style={{
                        textAlign: 'center',
                        marginTop: '10vh'
                    }}
                >
                    <a href="https://github.com/AndLD?tab=repositories">
                        <Icon tech="github" />
                    </a>
                    <div
                        style={{
                            margin: 'auto',
                            marginTop: '5vh',
                            width: '50%',
                            fontSize: '150%'
                        }}
                    >
                        Это ссылка на мой GitHub. Здесь Вы можете ознакомиться с проектами, которые я выполнял. При
                        необходимости готов выполнить тестовое задание.
                    </div>
                </div>

                <Subtitle text="Контакты" />
                <div
                    style={{
                        marginBottom: 200
                    }}
                >
                    <h2>
                        Почта: <i>nil10035@gmail.com</i>
                    </h2>
                    <h2>
                        Telegram: <i>@andld</i>
                    </h2>
                </div>
            </Fade>
            <div
                style={{
                    marginBottom: 50,
                    textAlign: 'center'
                }}
            >
                © Андрей Ларионов. 2021
            </div>
        </Container>
    )
}

export default App
