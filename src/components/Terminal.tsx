import { Grid } from '@material-ui/core'
import Typed from 'react-typed'

export default function Terminal({ text }: { text: string }) {
    return (
        <div
            style={{
                width: '50%',
                margin: 'auto',
                backgroundColor: 'rgb(20, 20, 20)',
                height: '30vh',
                borderRadius: 20,
                border: '1px solid darkblue',
                fontFamily: 'consolas',
                boxShadow: '0px 0px 10px 10px black'
            }}
        >
            <div
                style={{
                    height: 40,
                    backgroundColor: 'gray',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                }}
            >
                <Grid container direction="row">
                    <Grid
                        container
                        direction="row"
                        style={{
                            paddingTop: 10,
                            paddingLeft: 10,
                            width: '30%'
                        }}
                    >
                        <div className="Point red"></div>
                        <div className="Point yellow"></div>
                        <div className="Point green"></div>
                    </Grid>
                    <div
                        style={{
                            marginTop: 10,
                            marginLeft: '10%',
                            color: 'black'
                        }}
                    >
                        Terminal - 200x80
                    </div>
                </Grid>
            </div>
            <div
                style={{
                    fontSize: '150%',
                    paddingLeft: 20
                }}
            >
                <p>
                    <i>
                        <span>$ </span>
                    </i>
                    <Typed startDelay={3000} strings={[text]} typeSpeed={30} backSpeed={50}></Typed>
                </p>
            </div>
        </div>
    )
}
