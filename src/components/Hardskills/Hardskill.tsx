import { Grid } from '@material-ui/core'
import { useState } from 'react'
import Icon from '../Icon'
import ExpYears from './ExpYears'

export default function Hardskill({
    text,
    expYears,
    expYearsFirst,
    icons
}: {
    text: string
    expYears?: number
    expYearsFirst?: boolean
    icons: any[]
}) {
    const [expYearsComponent] = useState(expYears ? <ExpYears expYears={expYears} /> : null)
    const [iconComponents] = useState(icons.map((icon) => <Icon key={`icon-${icon}`} tech={icon} />))

    return (
        <div style={style.hardskill} className="Hardskill">
            <Grid
                style={{
                    height: '30vh'
                }}
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {expYearsFirst ? expYearsComponent : null}
                {iconComponents}
                {expYearsFirst ? null : expYearsComponent ? expYearsComponent : null}
            </Grid>
            <div
                style={{
                    textAlign: 'center',
                    fontSize: '150%'
                }}
            >
                {text}
            </div>
        </div>
    )
}

const style = {
    hardskill: {
        height: '30vh',
        marginTop: '30vh',
        marginBottom: '30vh'
    }
}
