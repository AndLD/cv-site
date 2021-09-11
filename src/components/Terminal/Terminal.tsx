import TerminalContent from './TerminalContent'
import TerminalHeader from './TerminalHeader'

export default function Terminal({ text }: { text: string }) {
    return (
        <div className="Terminal" style={style.terminal}>
            <TerminalHeader />
            <TerminalContent text={text} />
        </div>
    )
}

const style = {
    terminal: {
        width: '50%',
        margin: 'auto',
        backgroundColor: 'rgb(20, 20, 20)',
        height: '30vh',
        borderRadius: 15,
        border: '1px solid darkblue',
        fontFamily: 'consolas',
        boxShadow: '0px 0px 10px 10px black'
    }
}
