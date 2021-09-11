import { Grid } from '@material-ui/core'

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
        paddingTop: 10,
        paddingLeft: 10,
        width: '30%'
    },
    terminalButton: {
        marginLeft: 5,
        marginRight: 5,
        width: 20,
        height: 20,
        borderRadius: '50%',
        cursor: 'pointer'
    }
}
