import LngIcon from './LngIcon'

export default function LangSwitcher({ lng, setLng }: { lng: string; setLng: any; setStates?: (() => void)[] }) {
    return (
        <div className="LangSwitcher" style={style.langSwitcher as any}>
            <LngIcon iconLng="en" lngState={[lng, setLng]} />
            <LngIcon iconLng="ru" lngState={[lng, setLng]} />
            <LngIcon iconLng="ua" lngState={[lng, setLng]} />
        </div>
    )
}

const style = {
    langSwitcher: {
        position: 'absolute',
        top: 10,
        left: 10
        // width: 100
    }
}
