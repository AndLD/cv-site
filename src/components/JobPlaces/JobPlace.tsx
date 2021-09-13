import { Grid } from '@material-ui/core'
import { isMobile } from 'react-device-detect'

import Icon from '../Icon'

export default function JobPlace({
    icon,
    company,
    position,
    format,
    stack,
    description,
    term
}: {
    icon: any
    company: string
    position: string
    format: string
    stack: {
        icons: string[]
        text: string
    }
    description: string
    term: string
}) {
    return (
        <Grid
            style={style.jobPlace}
            container
            direction={isMobile ? 'column' : 'row'}
            alignItems={isMobile ? 'center' : 'center'}
            justifyContent="space-around"
        >
            <img className="CompanyLogo" style={style.companyLogo} src={icon} alt={company} />
            <span className="JobInformation" style={style.jobInformation}>
                <h2 className="CompanyTitle" style={style.companyTitle}>
                    {company}
                </h2>
                <div className="PositionInCompany" style={style.positionInCompany as any}>
                    {isMobile ? (
                        <>
                            <div>{position}</div>
                            <div>
                                <b>{term}</b>
                            </div>
                            <div className="JobFormat" style={style.jobFormat}>
                                {format}
                            </div>
                        </>
                    ) : (
                        <>
                            {position} - <b>{term}</b> -{' '}
                            <span className="JobFormat" style={style.jobFormat}>
                                {format}
                            </span>
                        </>
                    )}
                </div>
                <div className="JobDescription" style={style.jobDescription}>
                    <ul>
                        {description.split('. ').map((text, i) => (
                            <li
                                key={`jobDescription${i}`}
                                style={{
                                    marginBottom: 10
                                }}
                            >
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>
            </span>
            <span className="JobStack" style={style.jobStack}>
                <div className="JobStackIcons" style={style.jobStackIcons as any}>
                    {stack.icons.map((icon, i) => (
                        <Icon
                            key={`jobStackIcon${i}`}
                            tech={icon}
                            width={{
                                mobile: '10%',
                                desktop: '15%'
                            }}
                        />
                    ))}
                </div>
                <div className="JobStackText" style={style.jobStackText as any}>
                    {stack.text}
                </div>
            </span>
        </Grid>
    )
}

const style = {
    jobPlace: {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderRadius: 25,
        paddingTop: 30,
        paddingBottom: 30,
        marginTop: 50,
        marginBottom: 50,
        boxShadow: '0px 0px 8px 0px rgba(255, 255, 255, 0.08)'
    },
    companyLogo: {
        marginBottom: isMobile ? 15 : 0,
        width: isMobile ? '25%' : '10%',
        borderRadius: isMobile ? 20 : 30
    },
    jobInformation: {
        marginBottom: isMobile ? 15 : 0,
        width: isMobile ? '90%' : '40%'
    },
    companyTitle: {
        marginTop: 0,
        marginBottom: 10,
        fontSize: 30
    },
    positionInCompany: {
        textAlign: isMobile ? 'center' : 'none',
        margin: 10,
        fontSize: 18,
        color: 'rgb(177, 177, 138)'
    },
    jobFormat: { color: 'green' },
    jobDescription: {
        fontSize: 22
    },
    jobStack: {
        width: isMobile ? '90%' : '30%'
    },
    jobStackIcons: {
        textAlign: 'center'
    },
    jobStackText: {
        textAlign: 'center',
        marginTop: 15,
        fontSize: 18,
        color: 'rgb(177, 177, 138)'
    }
}

function* keyGen(length: number) {
    for (let i = 0; i < length; i++) yield i
}
