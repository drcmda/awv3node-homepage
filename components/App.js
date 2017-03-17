import React from 'react';
import Parallax from './Parallax';

export default class extends React.Component {
    render() {
        return (
            <Parallax height="400%">
                <Parallax.Layer
                    offset={0} speed={0.01}
                    style={{
                        height: '500%',
                        backgroundPosition: 'initial',
                        backgroundRepeat: 'repeat',
                        backgroundImage: 'url(assets/stars.svg)'
                    }}
                />

                <Parallax.Layer
                    offset={0} speed={0.6}
                    style={{ backgroundImage: `url(assets/logo.png)`, backgroundPosition: 'center' }}
                />

                <Parallax.Layer offset={1} speed={-0.2}>
                    <img src="assets/satellite4.svg" style={{ width: '30%', marginLeft: '60%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={1.8} speed={0.8} style={{ opacity: 0.2 }}>
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 600, marginLeft: '10%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 300, marginLeft: '40%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 100, marginLeft: '15%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={2.3} speed={0.5} style={{ opacity: 0.4 }}>
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 200, marginLeft: '70%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 200, marginLeft: '40%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 400, marginLeft: '30%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={3.3} speed={0.6} style={{ opacity: 0.6 }}>
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 100, marginLeft: '10%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 300, marginLeft: '40%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 400, marginLeft: '50%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={2.5} speed={-0.1} style={{ opacity: 0.8 }}>
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 300, marginLeft: '60%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 400, marginLeft: '20%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 200, marginLeft: '80%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={4.8} speed={0.4}>
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 300, marginLeft: '10%' }} />
                    <img src="assets/cloud.svg" style={{ display: 'block', width: 400, marginLeft: '70%' }} />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2.3} speed={-0.4}
                    style={{
                        backgroundSize: '100%',
                        backgroundPosition: 'center',
                        backgroundImage: `url(assets/earth.svg)`
                    }} />

                <Parallax.Layer
                    offset={2.1} speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                        backgroundImage: `url(assets/clients.svg)`
                    }} />

                <Parallax.Layer
                    offset={1.5} speed={-0.5}
                    style={{
                        backgroundSize: '45%',
                        backgroundPosition: 'center',
                        backgroundImage: `url(assets/clients-main.svg)`
                    }} />

            </Parallax>
        );
    }
}
