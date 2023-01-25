import { Grid } from '@material-ui/core'
import { Fade } from 'react-awesome-reveal'
import { isMobile } from 'react-device-detect'

import avatar from '../../assets/images/andrey.larionov.me.jpg'
import Avatar from './Avatar'
import MainTitle from './MainTitle'

export default function Header() {
    return (
        <div style={style.header}>
            {!isMobile ? (
                <Grid container direction="row" alignItems="center" justifyContent="space-between">
                    <MainTitle />

                    <Avatar avatar={avatar} />
                </Grid>
            ) : (
                <div>
                    <MainTitle />
                    <Fade triggerOnce={true} fraction={0.6} duration={1500}>
                        <div className="AvatarWrapper" style={style.avatarWrapper}>
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
        textAlign: isMobile ? 'center' : 'left',
        marginTop: isMobile ? 50 : 0
    } as React.CSSProperties
}
