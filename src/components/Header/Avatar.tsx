export default function Avatar({ avatar }: { avatar: string }) {
    return (
        <img
            style={{
                width: '25%',
                borderRadius: '50%',
                boxShadow: '0px 0px 10px 10px black'
            }}
            src={avatar}
            alt="Andrey Larionov"
        />
    )
}
