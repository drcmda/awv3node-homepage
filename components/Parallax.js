import React from 'react';

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
        window.addEventListener('scroll', this.onScroll, { passive: true });
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
        invisible = false;
        static propTypes = { factor: React.PropTypes.number, offset: React.PropTypes.number };
        static defaultProps = { factor: 1, offset: 0 };

        move(innerHeight, YOffset, force = false) {
            let offset = -(YOffset * this.props.speed) + innerHeight * this.props.offset;
            let height = innerHeight * this.props.factor;
            let invisible = (offset > (YOffset + innerHeight)) || ((offset + height) < YOffset);
            if (!invisible || force) {
                this.refs.layer.style.transform = `translate3d(0,${offset.toFixed(2)}px,0)`;
            }
        }

        height(innerHeight) {
            let height = innerHeight * this.props.factor;
            this.refs.layer.style.height = height.toFixed(2) + 'px';
        }

        render() {
            return (
                <div
                    ref="layer"
                    style={{
                        position: 'absolute',
                        backgroundSize: 'auto',
                        backgroundRepeat: 'no-repeat',
                        willChange: 'transform',
                        width: '100%',
                        height: this.innerHeight,
                        ...this.props.style
                    }}
                    className={this.props.className}>
                    {this.props.children}
                </div>
            );
        }
    };
}
