import Typed from 'react-typed'

export default function TerminalContent({ text }: { text: string }) {
    return (
        <div className="TerminalContent" style={style.terminalContent}>
            <p>
                <i>
                    <span>$ </span>
                </i>
                <Typed startDelay={3000} strings={[text]} typeSpeed={30} backSpeed={50}></Typed>
            </p>
        </div>
    )
}

const style = {
    terminalContent: {
        fontSize: '150%',
        paddingLeft: 20,
        color: 'white'
    }
}
