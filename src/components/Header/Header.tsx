import { createElement } from 'react'
import { Grid } from '@material-ui/core'

import avatar from '../../assets/images/andrey.larionov.me.jpg'
import Avatar from './Avatar'
import MainTitle from './MainTitle'

export default function Header(props: any) {
    return (
        <div style={style.header} className="Header">
            <Grid container direction="row" alignItems="center" justifyContent="space-between">
                {createElement(MainTitle, props)}

                <Avatar avatar={avatar} />
            </Grid>
        </div>
    )
}

const style = {
    header: {
        marginLeft: 80,
        height: '30vh',
        marginTop: '30vh',
        marginBottom: '30vh'
    }
}
