import React from 'react';
import Animated from 'animated/lib/targets/react-dom';
import Parallax from './Parallax';

// Assets
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}build/assets/${name}.svg${wrap ? ')' : ''}`;

export default class extends React.Component {
    animation = new Animated.Value(1);
    hover = () => Animated.spring(this.animation, { toValue: 1.2 }).start();
    unhover = () => Animated.spring(this.animation, { toValue: 1 }).start();

    render() {
        return (
            <Parallax pages={4}>

                <Parallax.Layer
                    offset={0}
                    speed={0}
                    style={{ backgroundColor: '#03101d', backgroundSize: 'cover', backgroundImage: url('stars', true) }}
                />

                <Parallax.Layer offset={1} speed={0} style={{ backgroundColor: '#53466f' }} />

                <Parallax.Layer offset={2} speed={0} style={{ backgroundColor: '#64d6a7' }} />

                <Parallax.Layer offset={3} speed={0} style={{ backgroundColor: '#FF9696' }} />

                <Parallax.Layer
                    offset={0}
                    speed={0.5}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                        src={url('logo')}
                        style={{ cursor: 'pointer', width: '30%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={3} speed={0} style={{ backgroundColor: 'rgburl(255,150,150,1)' }} />

                <Parallax.Layer offset={1.2} speed={-0.2}>
                    <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.2 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '40%', marginLeft: '10%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.2 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '30%', marginLeft: '30%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={2} speed={0.2} style={{ opacity: 0.4 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '30%', marginLeft: '40%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '50%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={2.7} speed={-0.1} style={{ opacity: 0.6 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '30%', marginLeft: '60%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '30%', marginLeft: '20%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '80%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={3.6} speed={0.4}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '10%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '30%', marginLeft: '70%' }} />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={1}
                    speed={0}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Animated.img
                        src={url('server')}
                        style={{ cursor: 'pointer', width: '20%', transform: [{ scale: this.animation }] }}
                        onMouseOver={this.hover}
                        onMouseOut={this.unhover}
                    />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2}
                    speed={0}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Animated.img
                        src={url('bash')}
                        style={{ cursor: 'pointer', width: '40%', transform: [{ scale: this.animation }] }}
                        onMouseOver={this.hover}
                        onMouseOut={this.unhover}
                    />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={3.5}
                    speed={0.2}
                    style={{ opacity: 0.4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={url('ether')} style={{ width: '100%' }} />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={3.5}
                    speed={-0.4}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={url('earth')} style={{ width: '100%' }} />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={3}
                    speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                        backgroundImage: url('clients', true)
                    }}
                />

                <Parallax.Layer
                    offset={3}
                    speed={-0}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Animated.img
                        src={url('clients-main')}
                        style={{ cursor: 'pointer', width: '40%', transform: [{ scale: this.animation }] }}
                        onMouseOver={this.hover}
                        onMouseOut={this.unhover}
                    />
                </Parallax.Layer>

            </Parallax>
        );
    }
}
