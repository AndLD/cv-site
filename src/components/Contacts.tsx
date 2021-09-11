import Subtitle from './Subtitle'
import EmailIcon from '@material-ui/icons/Email'
import TelegramIcon from '@material-ui/icons/Telegram'

export default function Contacts() {
    return (
        <div>
            <Subtitle text="Контакты" />
            <div
                style={{
                    marginBottom: 200,
                    textAlign: 'center'
                }}
            >
                <EmailIcon style={{ fontSize: 50 }} color="error" />
                <h2>nil10035@gmail.com</h2>
                <TelegramIcon style={{ fontSize: 50 }} color="primary" />
                <h2>@andld</h2>
            </div>
        </div>
    )
}
