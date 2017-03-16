import React from 'react';
import Animated from 'animated/lib/targets/react-dom';
import Parallax from './Parallax';

const Cloud = ({ src, width, offset }) => {
    const animation = new Animated.Value(1)
    const grow = () => Animated.spring(animation, { toValue: 1.2 }).start()
    const shrink = () => Animated.spring(animation, { toValue: 1 }).start()
    return (
        <Animated.img
            style={{
                display: 'block',
                width: width,
                marginLeft: offset + "%",
                transform: [ { scale: animation } ]
            }}
            src={`assets/${src}.svg`}
            onMouseOver={grow}
            onMouseOut={shrink} />
    )
}

export default class extends React.Component {
    render() {
        const aws = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io';
        return (
            <Parallax style={{ height: '400vh' }}>
                <Parallax.Layer
                    depth={0.1}
                    style={{
                        height: '500vh',
                        backgroundPosition: 'initial',
                        backgroundRepeat: 'repeat',
                        backgroundColor: '#162D45',
                        backgroundImage: 'url(assets/stars.svg)'
                    }}
                />
                <Parallax.Layer
                    depth={0.6}
                    style={{ backgroundImage: `url(assets/logo.png)`, backgroundPosition: 'center' }}
                />

                <Parallax.Layer depth={-0.2} style={{ top: '100vh' }}>
                    <img src="assets/satellite4.svg" style={{ width: '30%', marginLeft: '60%' }} />
                </Parallax.Layer>

                <Parallax.Layer
                    depth={1}
                    style={{
                        opacity: 0.4,
                        top: '470vh',
                        height: '200vh',
                        background: 'radial-gradient(circle at 50% 120%, #373737 80%, transparent 80%, transparent 100%)'
                    }}
                />
                <Parallax.Layer
                    depth={0.7}
                    style={{
                        opacity: 0.5,
                        top: '460vh',
                        height: '150vh',
                        background: 'radial-gradient(circle at 50% 120%, #2B3E51 80%, transparent 80%, transparent 100%)'
                    }}
                />
                <Parallax.Layer
                    depth={0.6}
                    style={{
                        opacity: 0.6,
                        top: '480vh',
                        height: '125vh',
                        background: 'radial-gradient(circle at 50% 120%, #2D4A66 80%, transparent 80%, transparent 100%)'
                    }}
                />

                <Parallax.Layer depth={0.8} style={{ opacity: 0.2, top: '150vh' }}>
                    <Cloud src="cloud" width={600} offset={10} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 300, marginLeft: '40%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 100, marginLeft: '15%' }} />
                </Parallax.Layer>

                <Parallax.Layer depth={0.5} style={{ opacity: 0.4, top: '230vh' }}>
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 200, marginLeft: '70%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 200, marginLeft: '40%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 400, marginLeft: '30%' }} />
                </Parallax.Layer>

                <Parallax.Layer depth={0.6} style={{ opacity: 0.6, top: '340vh' }}>
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 100, marginLeft: '10%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 300, marginLeft: '40%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 400, marginLeft: '50%' }} />
                </Parallax.Layer>

                <Parallax.Layer depth={-0.1} style={{ opacity: 0.8, top: '260vh' }}>
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 300, marginLeft: '60%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 400, marginLeft: '20%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 200, marginLeft: '80%' }} />
                </Parallax.Layer>

                <Parallax.Layer depth={0.4} style={{ top: '470vh' }}>
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 300, marginLeft: '10%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 400, marginLeft: '70%' }} />
                </Parallax.Layer>

                <Parallax.Layer
                    depth={-0.5}
                    style={{
                        top: '150vh',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    }}>
                    <img src="assets/earth.svg" style={{ width: '100%', transform: 'translate3d(0,60%,0)' }} />
                </Parallax.Layer>

                <Parallax.Layer
                    depth={-0.3}
                    style={{
                        top: '180vh',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    }}>
                    <img
                        src="assets/clients.svg"
                        style={{ position: 'absolute', width: '70%', transform: 'translate3d(0,0,0)' }}
                    />
                </Parallax.Layer>

            </Parallax>
        );
    }
}
