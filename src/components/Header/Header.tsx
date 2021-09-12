import { createElement } from 'react'
import { Grid } from '@material-ui/core'

import avatar from '../../assets/images/andrey.larionov.me.jpg'
import Avatar from './Avatar'
import MainTitle from './MainTitle'

import { Fade } from 'react-awesome-reveal'
import { isMobile } from 'react-device-detect'

export default function Header(props: any) {
    return (
        <div style={style.header} className="Header">
            {!isMobile ? (
                <Grid container direction="row" alignItems="center" justifyContent="space-between">
                    {createElement(MainTitle, props)}

                    <Avatar avatar={avatar} />
                </Grid>
            ) : (
                <div>
                    {createElement(MainTitle, props)}
                    <Fade triggerOnce={true} fraction={0.6} duration={1500}>
                        <div className="AvatarWrapper" style={style.avatarWrapper as any}>
                            <Avatar avatar={avatar} />
                        </div>
                    </Fade>
                </div>
            )}
        </div>
    )
}

const style = {
    header: {
        marginLeft: isMobile ? 20 : 80,
        height: '30vh',
        marginTop: isMobile ? '15vh' : '30vh',
        marginBottom: '30vh'
    },
    avatarWrapper: {
        textAlign: isMobile ? 'center' : undefined,
        marginTop: isMobile ? 50 : 0
    }
}
