export default function Subtitle({ text }: { text: string }) {
    return (
        <h1
            style={{
                textAlign: 'center',
                fontSize: '300%'
            }}
            className="subtitle"
        >
            {text}
        </h1>
    )
}
