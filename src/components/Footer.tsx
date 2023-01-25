import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <div
            style={{
                marginBottom: 50,
                textAlign: 'center'
            }}
        >
            © 2023 . {t('Author')} .
        </div>
    )
}
