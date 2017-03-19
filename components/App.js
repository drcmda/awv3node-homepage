import React from 'react';
import Animated from 'animated/lib/targets/react-dom';
import Parallax from './Parallax';

// Assets
const A = (name, url = false) => `${url ? 'url(' : ''}build/assets/${name}.svg${url ? ')' : ''}`;

//linear-gradient(to bottom, rgba(24,60,96,1) 0%,rgba(255,150,150,1) 100%);
//<Parallax height="400%" style={{ backgroundSize: 'cover', backgroundImage: A('stars', true) }}>

export default class extends React.Component {
    animation = new Animated.Value(1);
    hover = () => Animated.spring(this.animation, { toValue: 1.2 }).start();
    unhover = () => Animated.spring(this.animation, { toValue: 1 }).start();

    render() {
        return (
            <Parallax
                height="400%"
                style={{ background: 'linear-gradient(to bottom, rgba(24,60,96,1) 0%,rgba(255,150,150,1) 100%)' }}>

                <Parallax.Layer
                    offset={0}
                    speed={0}
                    factor={5}
                    style={{ backgroundSize: 'cover', backgroundImage: A('stars', true) }}
                />

                <Parallax.Layer
                    offset={0}
                    speed={0.6}
                    style={{ backgroundImage: `url(build/assets/logo.png)`, backgroundPosition: 'center' }}
                />

                <Parallax.Layer offset={1} speed={-0.2}>
                    <img src={A('satellite4')} style={{ width: '20%', marginLeft: '60%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={1.8} speed={0.8} style={{ opacity: 0.2 }}>
                    <img src={A('cloud')} style={{ display: 'block', width: 600, marginLeft: '10%' }} />
                    <img src={A('cloud')} style={{ display: 'block', width: 300, marginLeft: '40%' }} />
                    <img src={A('cloud')} style={{ display: 'block', width: 100, marginLeft: '15%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={2.3} speed={0.5} style={{ opacity: 0.2 }}>
                    <img src={A('cloud')} style={{ display: 'block', width: 200, marginLeft: '70%' }} />
                    <img src={A('cloud')} style={{ display: 'block', width: 200, marginLeft: '40%' }} />
                    <img src={A('cloud')} style={{ display: 'block', width: 400, marginLeft: '30%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={3.3} speed={0.6} style={{ opacity: 0.4 }}>
                    <img src={A('cloud')} style={{ display: 'block', width: 100, marginLeft: '10%' }} />
                    <img src={A('cloud')} style={{ display: 'block', width: 300, marginLeft: '40%' }} />
                    <img src={A('cloud')} style={{ display: 'block', width: 400, marginLeft: '50%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={2.5} speed={-0.1} style={{ opacity: 0.6 }}>
                    <img src={A('cloud')} style={{ display: 'block', width: 300, marginLeft: '60%' }} />
                    <img src={A('cloud')} style={{ display: 'block', width: 400, marginLeft: '20%' }} />
                    <img src={A('cloud')} style={{ display: 'block', width: 200, marginLeft: '80%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={4.8} speed={0.4}>
                    <img src={A('cloud')} style={{ display: 'block', width: 300, marginLeft: '10%' }} />
                    <img src={A('cloud')} style={{ display: 'block', width: 400, marginLeft: '70%' }} />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={1.1}
                    speed={-0.3}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={A('bash')} style={{ width: '40%' }} />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={4.1}
                    speed={0.2}
                    style={{ opacity: 0.4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={A('ether')} style={{ width: '100%' }} />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2.3}
                    speed={-0.4}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={A('earth')} style={{ width: '100%' }} />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2.1}
                    speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                        backgroundImage: A('clients', true)
                    }}
                />

                <Parallax.Layer
                    offset={2.7}
                    speed={-0.1}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Animated.img
                        src={A('clients-main')}
                        style={{ cursor: 'pointer', width: '40%', transform: [{ scale: this.animation }] }}
                        onMouseOver={this.hover}
                        onMouseOut={this.unhover}
                    />
                </Parallax.Layer>

            </Parallax>
        );
    }
}
