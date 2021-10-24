import { Grid } from '@material-ui/core'

import { isMobile } from 'react-device-detect'

export default function TerminalButtons() {
    return (
        <Grid container direction="row" style={style.terminalButtons}>
            <div style={style.terminalButton} className="TerminalButton red"></div>
            <div style={style.terminalButton} className="TerminalButton yellow"></div>
            <div style={style.terminalButton} className="TerminalButton green"></div>
        </Grid>
    )
}

const style = {
    terminalButtons: {
        paddingTop: isMobile ? 12 : 10,
        paddingLeft: 10,
        width: '30%'
    },
    terminalButton: {
        marginLeft: 5,
        marginRight: 5,
        width: isMobile ? 15 : 20,
        height: isMobile ? 15 : 20,
        borderRadius: '50%',
        cursor: 'pointer'
    }
}
