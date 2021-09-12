import enIcon from '../../assets/icons/lng/english.svg'
import ruIcon from '../../assets/icons/lng/russian.svg'
import uaIcon from '../../assets/icons/lng/ukrainian.svg'

import { isMobile } from 'react-device-detect'
import { useState } from 'react'

export default function LngIcon({ iconLng, lngState }: { iconLng: string; lngState: [string | undefined, any] }) {
    const [lng, setLng] = lngState

    const [icon] = useState(
        iconLng === 'en' ? enIcon : iconLng === 'ru' ? ruIcon : iconLng === 'ua' ? uaIcon : undefined
    )

    const lngClickHandler = (event: any) => {
        if (!lng) return

        const newLng = event.target.alt

        if (lng === newLng) return

        setLng(newLng)
    }

    return <img style={style.lng} onClick={lngClickHandler} className="lng" src={icon} alt={iconLng} />
}

const style = {
    lng: {
        // width: '5%'
        width: isMobile ? 30 : 50
    }
}
