import React from 'react';
import Animated from 'animated/lib/targets/react-dom';

export default class extends React.Component {
    state = { ready: false };

    layers = [];
    height = 0;
    scrollTop = 0;
    busy = false;

    scroller = () => {
        this.layers.forEach(layer => layer.move(this.height, this.scrollTop, this.props.pages));
        this.busy = false;
    };
    scrollerRaf = () => requestAnimationFrame(this.scroller);

    onScroll = event => {
        if (!this.busy) {
            this.busy = true;
            this.scrollerRaf();
            this.scrollTop = event.target.scrollTop;
        }
    };

    onResize = () => {
        this.scrollTop = this.refs.container.scrollTop;
        this.height = this.refs.container.clientHeight;
        if (this.refs.content) this.refs.content.style.height = `${this.height * this.props.pages}px`;
        this.layers.forEach(layer => layer.height(this.height));
        this.scroller();
    };

    componentDidUpdate() {
        this.layers = Object.keys(this.refs).filter(key => this.refs[key].move).map(key => this.refs[key]);
        this.onResize();
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize, false);
        this.componentDidUpdate();
        this.setState({ ready: true });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize, false);
    }

    render() {
        this.layers = React.Children.map(this.props.children, (child, index) =>
            React.cloneElement(child, { ...child.props, ref: `child-${index}`, container: this }));
        return (
            <div
                ref="container"
                onScroll={this.onScroll}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    overflow: 'scroll',
                    overflowX: 'hidden',
                    WebkitOverflowScrolling: 'touch',
                    transform: 'translate3d(0, 0, 0)',
                    ...this.props.style
                }}
                className={this.props.className}>

                {this.state.ready &&
                    <div
                        ref="content"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            transform: 'translate3d(0, 0, 0)',
                            overflow: 'hidden',
                            height: this.height * this.props.pages,
                            ...this.props.innerStyle
                        }}>
                        {this.layers}
                    </div>}

            </div>
        );
    }

    static Layer = class extends React.Component {
        constructor(props) {
            super(props);
            const offset = -(props.container.scrollTop * props.speed) +
                props.container.height * (props.offset * props.container.props.pages);
            this.animTranslate = new Animated.Value(offset);
            const height = props.container.height * props.factor;
            this.animHeight = new Animated.Value(height);
        }

        static propTypes = {
            factor: React.PropTypes.number,
            offset: React.PropTypes.number,
            stretch: React.PropTypes.number
        };
        static defaultProps = { factor: 1, offset: 0, stretch: 1 };

        move(height, scrollTop, pages) {
            let targetScroll = Math.floor(this.props.offset) * height;
            let offset = height * this.props.offset + targetScroll * this.props.speed;
            let toValue = parseFloat(-(scrollTop * this.props.speed) + offset);
            Animated.spring(this.animTranslate, { toValue }).start();
        }

        height(height) {
            let toValue = parseFloat(height * this.props.factor);
            Animated.spring(this.animHeight, { toValue }).start();
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
                        height: this.animHeight,
                        transform: [
                            {
                                translate3d: this.animTranslate.interpolate({
                                    inputRange: [0, 100000],
                                    outputRange: ['0,0px,0', '0,100000px,0']
                                })
                            }
                        ],
                        ...this.props.style
                    }}
                    className={this.props.className}>
                    {this.props.children}
                </Animated.div>
            );
        }
    };
}
