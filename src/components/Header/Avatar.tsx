import { isMobile } from 'react-device-detect'

export default function Avatar({ avatar }: { avatar: string }) {
    return <img style={style.avatar as any} src={avatar} alt="Andrey Larionov" />
}

const style = {
    avatar: {
        width: isMobile ? '70%' : '25%',
        borderRadius: '50%',
        boxShadow: '0px 0px 10px 10px black'
    }
}
