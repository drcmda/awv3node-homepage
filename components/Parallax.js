import React from 'react';
import Animated from 'animated/lib/targets/react-dom';
import throttle from 'lodash/throttle';

export default class extends React.Component {
    layers = [];
    windowInnerHeight = 0;
    windowPageYOffset = 0;

    scroller = ({ force = false }) =>
        this.layers.forEach(layer => layer.move(this.windowInnerHeight, this.windowPageYOffset, force));

    onScroll = event => {
        requestAnimationFrame(this.scroller);
        this.windowPageYOffset = window.pageYOffset;
    };

    onResize = () => {
        this.windowPageYOffset = window.pageYOffset;
        this.windowInnerHeight = window.innerHeight;
        this.layers.forEach(layer => layer.height(this.windowInnerHeight));
        this.scroller({ force: true });
    }

    componentDidMount() {
        this.layers = Object.keys(this.refs).filter(key => this.refs[key].move).map(key => this.refs[key]);
        window.addEventListener('scroll', throttle(this.onScroll, 100), { passive: true });
        window.addEventListener('resize', this.onResize, false);
        this.onResize();
    }

    componentDidUpdate() {
        this.onResize();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
        window.removeEventListener('resize', this.onResize, false);
    }

    render() {
        this.layers = React.Children.map(this.props.children, (child, index) =>
            React.cloneElement(child, { ...child.props, ref: `child-${index}` }));

        return (
            <div
                ref="container"
                style={{
                    position: 'absolute',
                    width: '100%',
                    transform: 'translate3d(0, 0, 0)',
                    overflow: 'hidden',
                    height: this.props.height,
                    ...this.props.style
                }}
                className={this.props.className}>
                {this.layers}
            </div>
        );
    }

    static Layer = class extends React.Component {
        constructor(props) {
            super(props);
            this.animation = new Animated.Value(window.innerHeight * props.factor);
            this.invisible = false;
        }

        static propTypes = { factor: React.PropTypes.number, offset: React.PropTypes.number };
        static defaultProps = { factor: 1, offset: 0 };

        move(innerHeight, YOffset, force = false) {
            let offset = -(YOffset * this.props.speed) + innerHeight * this.props.offset;
            Animated.spring(this.animation, { toValue: parseFloat(offset) }).start();
        }

        height(innerHeight) {
            let height = innerHeight * this.props.factor;
            this.refs.layer.refs.node.style.height = height.toFixed(2) + 'px';
        }

        render() {
            return (
                <Animated.div
                    ref="layer"
                    style={{
                        position: 'absolute',
                        backgroundSize: 'auto',
                        backgroundRepeat: 'no-repeat',
                        willChange: 'transform',
                        width: '100%',
                        height: this.innerHeight,
                        transform: [ { translate3d: this.animation.interpolate({
                            inputRange: [0, 100000], outputRange: ['0,0px,0','0,100000px,0']
                        }) } ],
                        ...this.props.style
                    }}
                    className={this.props.className}>
                    {this.props.children}
                </Animated.div>
            );
        }
    };
}
