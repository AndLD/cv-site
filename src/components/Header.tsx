import { Grid } from '@material-ui/core'
import { useState } from 'react'
import Typed from 'react-typed'

import avatar from '../assets/images/andrey.larionov.me.jpg'

export default function Header(props: any) {
    const [typedStyleColor, setTypedStyleColor] = props.typedStyleColorState
    const [jsStyleBackground, setJsStyleBackground] = props.jsStyleBackgroundState
    const [emodzyOpacity, setEmodzyOpacity] = useState(0)

    return (
        <div
            style={{
                marginLeft: 80
            }}
            className="Header"
        >
            <Grid container direction={'row'} alignItems="center" justifyContent="space-between">
                <span>
                    <h1
                        style={{
                            fontSize: '40pt'
                        }}
                    >
                        <Typed
                            style={{
                                color: typedStyleColor,
                                transition: 'all ease 1s'
                            }}
                            backDelay={0}
                            onStringTyped={(arrayPos: number, self: Typed) => {
                                switch (arrayPos) {
                                    case 0:
                                        setTimeout(() => {
                                            setJsStyleBackground('yellow')
                                            setTypedStyleColor('lightblue')
                                        }, 500)
                                        break
                                    case 1:
                                        setTimeout(() => {
                                            setTypedStyleColor('#ff3a3a')
                                            setEmodzyOpacity(1)
                                        }, 500)
                                        break
                                    case 2:
                                        setTimeout(() => {
                                            setJsStyleBackground('transparent')
                                            setTypedStyleColor('orange')
                                            setEmodzyOpacity(0)
                                        }, 500)
                                }
                            }}
                            strings={['Front End', 'Back End', 'Full Stack']}
                            typeSpeed={130}
                            backSpeed={50}
                            loop
                        />
                        <div
                            style={{
                                marginTop: 20,
                                marginLeft: 40
                            }}
                        >
                            <span
                                style={{
                                    background: jsStyleBackground,
                                    paddingLeft: 80,
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    paddingRight: 10,
                                    marginLeft: 10,
                                    marginRight: 15,
                                    color: 'black',
                                    transition: 'all ease 1.5s'
                                }}
                            >
                                JS
                            </span>
                            <span>Developer</span>
                            <span style={{ transition: 'all ease 1.5s', fontSize: '35pt', opacity: emodzyOpacity }}>
                                😎
                            </span>
                        </div>
                    </h1>
                    <h2>Андрей Ларионов</h2>
                </span>
                <img
                    style={{
                        width: '25%',
                        borderRadius: '50%',
                        boxShadow: '0px 0px 10px 10px black'
                    }}
                    src={avatar}
                    alt="Andrey Larionov"
                />
            </Grid>
        </div>
    )
}
