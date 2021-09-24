import LngIcon from './LngIcon'

export default function LangSwitcher({ lngState }: { lngState: [string | undefined, any] }) {
    return (
        <div className="LangSwitcher" style={style.langSwitcher as any}>
            <LngIcon iconLng="en" lngState={lngState} />
            <LngIcon iconLng="ru" lngState={lngState} />
            <LngIcon iconLng="ua" lngState={lngState} />
        </div>
    )
}

const style = {
    langSwitcher: {
        position: 'absolute',
        top: 10,
        left: 10
    }
}
