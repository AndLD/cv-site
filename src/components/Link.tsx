import Icon from './Icon'

export default function Link({ link, icon, text }: { link: string; icon: string; text: string }) {
    return (
        <div
            style={{
                textAlign: 'center',
                marginTop: '10vh'
            }}
        >
            <a href={link}>
                <Icon tech={icon} />
            </a>
            <div
                style={{
                    margin: 'auto',
                    marginTop: '5vh',
                    width: '50%',
                    fontSize: '150%'
                }}
            >
                {text}
            </div>
        </div>
    )
}
