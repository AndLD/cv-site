import { useState } from 'react'

import Typed from 'react-typed'

import { isMobile } from 'react-device-detect'

export default function MainTitle(props: any) {
    const [typedStyleColor, setTypedStyleColor] = props.typedStyleColorState
    const [jsStyleBackground, setJsStyleBackground] = props.jsStyleBackgroundState
    const [emodzyOpacity, setEmodzyOpacity] = useState(0)

    const stringTypedHandler = (arrayPos: number) => {
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
    }

    return isMobile ? (
        <div>
            <h1 className="PositionTitle" style={style.positionTitle}>
                <Typed
                    className="DynamicString"
                    style={{
                        color: typedStyleColor,
                        ...style.dynamicString
                    }}
                    backDelay={0}
                    onStringTyped={stringTypedHandler}
                    strings={['Front End', 'Back End', 'Full Stack']}
                    typeSpeed={130}
                    backSpeed={50}
                    loop
                />
                <div className="StaticString" style={style.staticString}>
                    <span
                        className="js"
                        style={{
                            background: jsStyleBackground,
                            ...style.js
                        }}
                    >
                        JS
                    </span>
                    <span>Developer</span>
                    <span
                        className="emodzy"
                        style={{
                            ...style.emodzy,
                            opacity: emodzyOpacity
                        }}
                    >
                        😎
                    </span>
                </div>
            </h1>

            <h2 className="Author" style={style.author as any}>
                Андрей Ларионов
            </h2>
        </div>
    ) : (
        <span>
            <h1 className="PositionTitle" style={style.positionTitle}>
                <Typed
                    className="DynamicString"
                    style={{
                        color: typedStyleColor,
                        ...style.dynamicString
                    }}
                    backDelay={0}
                    onStringTyped={stringTypedHandler}
                    strings={['Front End', 'Back End', 'Full Stack']}
                    typeSpeed={130}
                    backSpeed={50}
                    loop
                />
                <div className="StaticString" style={style.staticString}>
                    <span
                        className="js"
                        style={{
                            background: jsStyleBackground,
                            ...style.js
                        }}
                    >
                        JS
                    </span>
                    <span>Developer</span>
                    <span
                        className="emodzy"
                        style={{
                            ...style.emodzy,
                            opacity: emodzyOpacity
                        }}
                    >
                        😎
                    </span>
                </div>
            </h1>

            <h2 className="Author" style={style.author as any}>
                Андрей Ларионов
            </h2>
        </span>
    )
}

const style = {
    positionTitle: {
        fontSize: isMobile ? '25pt' : '40pt'
    },
    dynamicString: {
        transition: 'all ease 1s'
    },
    staticString: {
        marginLeft: isMobile ? 10 : 40
    },
    js: {
        paddingLeft: isMobile ? 30 : 80,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginRight: 5,
        color: 'black',
        transition: 'all ease 1.5s'
    },
    emodzy: {
        transition: 'all ease 1.5s',
        fontSize: '35pt'
    },
    author: {
        textAlign: isMobile ? 'center' : 'none'
    }
}
