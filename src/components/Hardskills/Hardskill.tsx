import { Grid } from '@material-ui/core'
import { useState } from 'react'
import Icon from '../Icon'
import ExpYears from './ExpYears'

import { isMobile } from 'react-device-detect'

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
            {!isMobile ? (
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
            ) : (
                <div>
                    <div style={{ textAlign: 'center' }}>{iconComponents}</div>
                    <div>{expYearsComponent}</div>
                </div>
            )}
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
        height: isMobile ? '70vh' : '30vh',
        marginTop: '30vh',
        marginBottom: '30vh'
    }
}
