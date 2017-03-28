import React from 'react';
import Parallax from 'react-springy-parallax';

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

export default class extends React.Component {
    render() {
        return (
            <Parallax
                ref={ref => this.parallax = ref}
                pages={4}
                scrolling={false}>

                <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#243B4A' }} />
                <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#805E73' }} />
                <Parallax.Layer offset={3} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                <Parallax.Layer
                    offset={0} speed={0} factor={4}
                    style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }}
                />

                <Parallax.Layer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={2.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </Parallax.Layer>

                <Parallax.Layer offset={3.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={3.5} speed={-0.4}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    <img src={url('earth')} style={{ width: '60%' }} />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={3} speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                        backgroundImage: url('clients', true)
                    }}
                />

                <Parallax.Layer
                    offset={0} speed={0.5}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => this.parallax.scrollTo(1)}>
                    <div
                        style={{
                            whiteSpace: 'pre',
                            fontFamily: 'Menlo-Regular, Menlo, monospace',
                            fontSize: 14,
                            lineHeight: '10px',
                            color: 'white'
                        }}>
                        <p><Gray> &gt;</Gray>  npm install awv3-node --save</p>
                        <br />
                        <p><Gray> 1</Gray>  <Pink>const</Pink> Server <Pink>=</Pink> <Lightblue>require</Lightblue><Gray>(</Gray><Green>'awv3-node/server'</Green><Gray>)</Gray></p>
                        <br />
                        <p><Gray> 2</Gray>  <Pink>new</Pink> Server<Gray>(&#123;</Gray></p>
                        <p><Gray> 3</Gray>      <Yellow>output</Yellow><Pink>:</Pink> __dirname <Pink>+</Pink></p>
                        <p>            <Green>'/node_modules/@awv/classcad_cadapplication'</Green><Gray>,</Gray></p>
                        <p><Gray> 4</Gray>      <Yellow>config</Yellow><Pink>:</Pink> <Green>'CADApplication.ini'</Green><Gray>,</Gray></p>
                        <p><Gray> 5</Gray>      <Yellow>publicport</Yellow><Pink>:</Pink> <Blue>process</Blue>.<Blue>env</Blue>.<Blue>port</Blue> <Pink>||</Pink>&nbsp;8181<Gray>,</Gray></p>
                        <p><Gray> 6</Gray>      <Yellow>privateport</Yellow><Pink>:</Pink> 9191<Gray>,</Gray></p>
                        <p><Gray> 7</Gray>      <Yellow>instances</Yellow><Pink>:</Pink> 3</p>
                        <p><Gray> 8</Gray>  <Gray>})</Gray><Pink>.</Pink><Lightblue>start</Lightblue><Gray>()</Gray></p>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={1} speed={0}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                        src={url('server')}
                        style={{ width: '20%', transform: [{ scale: this.animation }] }}
                    />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2} speed={0}
                    onClick={() => this.parallax.scrollTo(3)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                        src={url('bash')}
                        style={{ width: '40%', transform: [{ scale: this.animation }] }}
                    />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={3} speed={-0}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => this.parallax.scrollTo(0)}>
                    <img
                        src={url('clients-main')}
                        style={{ width: '40%', transform: [{ scale: this.animation }] }}
                    />
                </Parallax.Layer>

            </Parallax>
        );
    }
}
