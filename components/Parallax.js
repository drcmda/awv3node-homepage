import React from 'react';

export default class extends React.Component {
    windowInnerHeight = 0;
    windowPageYOffset = 0;
    busy = false;
    scroller = ({ force = false }) => {
        Object.values(this.refs).forEach(
            layer => layer.move && layer.move(this.windowInnerHeight, this.windowPageYOffset, force)
        );
        this.busy = false;
    };
    onScroll = event => {
        if (!this.busy) {
            this.busy = true;
            requestAnimationFrame(this.scroller);
            this.windowPageYOffset = window.pageYOffset;
        }
    };

    onResize = () => {
        this.windowPageYOffset = window.pageYOffset;
        this.windowInnerHeight = window.innerHeight;
        Object.values(this.refs).forEach(layer => layer.height && layer.height(this.windowInnerHeight));
        this.scroller({ force: true });
    }

    componentDidMount() {
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
            console.log(invisible, force)
            if (!invisible || force) {
                this.refs.layer.style.transform = `translate3d(0,${offset}px,0)`;
            }
        }

        height(innerHeight) {
            let height = innerHeight * this.props.factor;
            this.refs.layer.style.height = height + 'px';
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
