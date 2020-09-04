import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingComponent = ({inverted = true}) => {
    return (
        <Dimmer inverted={inverted} active={true}>
            <Loader content='Loading orders...' inverted/>
        </Dimmer>
    )
}

export default LoadingComponent;