export default function Subtitle({ text }: { text: string }) {
    return <h1 style={style.subtitle}>{text}</h1>
}

const style = {
    subtitle: {
        textAlign: 'center',
        fontSize: '300%',
        marginTop: '30vh',
        marginBottom: '30vh'
    } as React.CSSProperties
}
