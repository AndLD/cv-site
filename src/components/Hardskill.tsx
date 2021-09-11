import { Grid } from '@material-ui/core'
import { useState } from 'react'
import { Fade, Zoom } from 'react-awesome-reveal'
import Icon from './Icon'

export default function Hardskill({
    text,
    expYears,
    expYearsFirst,
    icons
}: {
    text: string
    expYears: number | null
    expYearsFirst: boolean | null
    icons: any[]
}) {
    const [expYearsStr, setExpYearsStr] = useState(
        expYears ? (
            <Zoom triggerOnce={true} fraction={0.6} delay={500} duration={1000}>
                <h1
                    style={{
                        textAlign: 'right',
                        fontSize: '200%',
                        marginTop: 35,
                        marginBottom: 35
                    }}
                >
                    <span
                        style={{
                            fontSize: '80pt'
                        }}
                    >
                        {expYears}
                    </span>{' '}
                    {expYears == 1 ? 'год' : expYears < 1 || (expYears >= 2 && expYears < 5) ? 'года' : 'лет'} опыта
                </h1>
            </Zoom>
        ) : null
    )
    const [iconComponents, setIconComponents] = useState(icons.map((icon) => <Icon key={`icon-${icon}`} tech={icon} />))

    return (
        <div className="Hardskill">
            <Fade triggerOnce={true} fraction={0.6} duration={1500}>
                <Grid
                    style={{
                        height: '30vh'
                    }}
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    {expYearsFirst ? expYearsStr : null}
                    {iconComponents}
                    {expYearsFirst ? null : expYearsStr ? expYearsStr : null}
                </Grid>
                <div
                    style={{
                        textAlign: 'center',
                        fontSize: '150%'
                    }}
                >
                    {text}
                </div>
            </Fade>
        </div>
    )
}
