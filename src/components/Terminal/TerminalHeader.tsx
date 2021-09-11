import { Grid } from '@material-ui/core'
import TerminalButtons from './TerminalButtons'
import TerminalTitle from './TerminalTitle'

export default function TerminalHeader() {
    return (
        <div className="TerminalHeader" style={style.terminalHeader}>
            <Grid container direction="row">
                <TerminalButtons />
                <TerminalTitle />
            </Grid>
        </div>
    )
}

const style = {
    terminalHeader: {
        height: 40,
        backgroundColor: 'rgb(51, 51, 51)',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    }
}
