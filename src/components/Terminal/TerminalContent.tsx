export default function TerminalContent({ text }: { text: string }) {
    return (
        <div className="TerminalContent" style={style.terminalContent as any}>
            <p>
                <span>
                    <i>$</i> {text}
                </span>
            </p>
        </div>
    )
}

const style = {
    terminalContent: {
        textAlign: 'justify',
        fontSize: '150%',
        paddingLeft: 20,
        paddingRight: 20,
        color: 'white'
    }
}
