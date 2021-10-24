import { useTranslation } from 'react-i18next'

import Subtitle from './Subtitle'
import EmailIcon from '@material-ui/icons/Email'
import TelegramIcon from '@material-ui/icons/Telegram'

export default function Contacts() {
    const { t } = useTranslation()

    return (
        <div>
            <Subtitle text={t('Contacts')} />

            <div
                style={{
                    marginBottom: 200,
                    textAlign: 'center'
                }}
            >
                <div>
                    <EmailIcon style={{ fontSize: 50 }} color="error" />
                    <h2>
                        <a
                            style={{
                                color: 'rgb(255, 137, 137)',
                                textDecoration: 'none'
                            }}
                            href="mailto:andrey.larionov.me@gmail.com"
                        >
                            andrey.larionov.me@gmail.com
                        </a>
                    </h2>
                </div>
                <div>
                    <TelegramIcon style={{ fontSize: 50 }} color="primary" />
                    <h2>
                        <a
                            style={{
                                color: 'rgb(137, 212, 255)',
                                textDecoration: 'none'
                            }}
                            href="https://t.me/andld"
                        >
                            @andld
                        </a>
                    </h2>
                </div>
            </div>
        </div>
    )
}
