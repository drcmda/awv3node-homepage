import React from 'react';

export default class extends React.Component {
    constructor() {
        super();
        this.layers = [];
    }
    update() {
        this.layers = this.refs.container.querySelectorAll("[data-type='parallax-layer']");
    }
    componentDidMount() {
        this.refs.scroll.addEventListener('scroll', this.onScroll, { passive: true });
        this.update();
    }
    componentDidUpdate() {
        this.update();
    }
    componentWillUnmount() {
        this.refs.scroll.removeEventListener('scroll', this.onScroll);
    }

    onScroll = event => {
        var depth, layer, layers, topDistance, translate3d;
        topDistance = event.target.scrollTop;
        this.layers.forEach(layer => {
            depth = layer.getAttribute('data-depth');
            translate3d = 'translate3d(0, ' + (-(topDistance * depth)) + 'px, 0)';
            layer.style['-webkit-transform'] = translate3d;
            layer.style['-moz-transform'] = translate3d;
            layer.style['-ms-transform'] = translate3d;
            layer.style['-o-transform'] = translate3d;
            layer.style.transform = translate3d;
        });
    };

    render() {
        return (
            <div
                ref="scroll"
                style={{ width: '100%', height: '100%', overflowY: 'auto' }}
                className={this.props.className}>
                <div ref="container" style={{ position: 'relative', overflow: 'hidden', ...this.props.style }}>
                    {this.props.children}
                </div>
            </div>
        );
    }

    static Layer = class extends React.Component {
        render() {
            return (
                <div
                    style={{
                        position: 'absolute',
                        backgroundPosition: 'bottom center',
                        backgroundSize: 'auto',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100vh',
                        ...this.props.style
                    }}
                    className={this.props.className}
                    data-type="parallax-layer"
                    data-depth={this.props.depth || 0}>
                    {this.props.children}
                </div>
            );
        }
    };
}
