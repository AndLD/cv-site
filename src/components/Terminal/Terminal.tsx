import TerminalContent from './TerminalContent'
import TerminalHeader from './TerminalHeader'

import { isMobile } from 'react-device-detect'

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
        width: isMobile ? '90%' : '50%',
        margin: 'auto',
        backgroundColor: 'rgb(20, 20, 20)',
        height: isMobile ? '60vh' : '30vh',
        borderRadius: 15,
        paddingBottom: 20,
        fontFamily: 'consolas',
        boxShadow: '0px 0px 10px 10px black'
    }
}
