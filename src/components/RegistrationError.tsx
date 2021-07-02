import '../stylesheets/errorMessage.css'
import { FunctionComponent, memo, ReactNode } from 'react'
import { useTransition, animated } from 'react-spring'

interface propsInterface {
    errors: {msg: string}[],
    children?: ReactNode
}

//JSX.Element[] | JSX.Element
const RegistrationError: FunctionComponent<propsInterface> = ({errors}): any => {  

    const errorsInArray = Object.values(errors)
    const transitions = useTransition(errorsInArray, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        update: { opacity: 0 },
        trail: 200
    })
  
    console.log(errorsInArray)

    return transitions(
        (styles, item) => (
            <animated.div style={styles} key={item.msg} className={'registerErrorWrapper'}>
                 <span className={'errorMessage'} key={item.msg}>{item.msg}</span>
             </animated.div>
        )
    )
}

export default memo(RegistrationError)