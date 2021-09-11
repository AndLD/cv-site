import { Zoom } from 'react-awesome-reveal'

export default function ExpYears({ expYears }: any) {
    return (
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
                {expYears === 1 ? 'год' : expYears < 1 || (expYears >= 2 && expYears < 5) ? 'года' : 'лет'} опыта
            </h1>
        </Zoom>
    )
}