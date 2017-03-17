import React from 'react';
import Parallax from './Parallax';
import Animated from 'animated/lib/targets/react-dom';

export default class extends React.Component {
    animation = new Animated.Value(1)
    hover = () => Animated.spring(this.animation, { toValue: 1.2 }).start()
    unhover = () => Animated.spring(this.animation, { toValue: 1 }).start()

    render() {
        return (
            <Parallax height="400%" style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(build/assets/stars.svg)'
            }}>

                <Parallax.Layer
                    offset={0} speed={0.6}
                    style={{ backgroundImage: `url(build/assets/logo.png)`, backgroundPosition: 'center' }}
                />

                <Parallax.Layer offset={1} speed={-0.2}>
                    <img src="build/assets/satellite4.svg" style={{ width: '30%', marginLeft: '60%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={1.8} speed={0.8} style={{ opacity: 0.2 }}>
                    <img src="build/assets/cloud.svg" style={{ display: 'block', width: 600, marginLeft: '10%' }} />
                    <img src="build/assets/cloud.svg" style={{ display: 'block', width: 300, marginLeft: '40%' }} />
                    <img src="build/assets/cloud.svg" style={{ display: 'block', width: 100, marginLeft: '15%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={2.3} speed={0.5} style={{ opacity: 0.2 }}>
                    <img src="build/assets/cloud.svg" style={{ display: 'block', width: 200, marginLeft: '70%' }} />
                    <img src="build/assets/cloud.svg" style={{ display: 'block', width: 200, marginLeft: '40%' }} />
                    <img src="build/assets/cloud.svg" style={{ display: 'block', width: 400, marginLeft: '30%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={3.3} speed={0.6} style={{ opacity: 0.4 }}>
                    <img src="build/assets/cloud.svg" style={{ display: 'block', width: 100, marginLeft: '10%' }} />
                    <img src="build/assets/cloud.svg" style={{ display: 'block', width: 300, marginLeft: '40%' }} />
                    <img src="build/assets/cloud.svg" style={{ display: 'block', width: 400, marginLeft: '50%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={2.5} speed={-0.1} style={{ opacity: 0.6 }}>
                    <img src="build/assets/cloud.svg" style={{ display: 'block', width: 300, marginLeft: '60%' }} />
                    <img src="build/assets/cloud.svg" style={{ display: 'block', width: 400, marginLeft: '20%' }} />
                    <img src="build/assets/cloud.svg" style={{ display: 'block', width: 200, marginLeft: '80%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={4.8} speed={0.4}>
                    <img src="build/assets/cloud.svg" style={{ display: 'block', width: 300, marginLeft: '10%' }} />
                    <img src="build/assets/cloud.svg" style={{ display: 'block', width: 400, marginLeft: '70%' }} />
                </Parallax.Layer>



                <Parallax.Layer
                    offset={2.5} factor={2} speed={-0.2}
                    style={{ opacity: 0.2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="build/assets/ether.svg" style={{ width: '100%' }} />
                    </Parallax.Layer>

                    <Parallax.Layer
                        offset={2.3} speed={-0.4}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="build/assets/earth.svg" style={{ width: '100%' }} />
                    </Parallax.Layer>

                    <Parallax.Layer
                        offset={2.1} speed={-0.3}
                        style={{
                            backgroundSize: '80%',
                            backgroundPosition: 'center',
                            backgroundImage: `url(build/assets/clients.svg)`
                        }} />

                    <Parallax.Layer
                        offset={1.5} speed={-0.5}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Animated.img
                            src="build/assets/clients-main.svg"
                            style={{ cursor: 'pointer', width: '45%', transform: [ { scale: this.animation } ] }}
                            onMouseOver={this.hover}
                            onMouseOut={this.unhover}/>
                    </Parallax.Layer>

            </Parallax>
        );
    }
}
