import { Zoom } from 'react-awesome-reveal'

import { useTranslation } from 'react-i18next'
import { isMobile } from 'react-device-detect'

export default function ExpYears({ expYears }: any) {
    const { t } = useTranslation()

    return (
        <Zoom triggerOnce={true} fraction={0.6} delay={500} duration={1000}>
            <h1
                style={{
                    textAlign: isMobile ? 'center' : 'right',
                    fontSize: isMobile ? '150%' : '200%',
                    marginTop: 35,
                    marginBottom: 35
                }}
            >
                <span
                    style={{
                        fontSize: isMobile ? '40pt' : '80pt'
                    }}
                >
                    {expYears}
                </span>{' '}
                {expYears === 1
                    ? t('year1')
                    : expYears < 1 || (expYears >= 2 && expYears < 5)
                    ? t('year2')
                    : t('year3')}{' '}
                {t('exp')}
            </h1>
        </Zoom>
    )
}
