import React from 'react';

export default class extends React.Component {
    windowInnerHeight = 0;
    windowPageYOffset = 0;
    busy = false;
    scroller = () => {
        Object.values(this.refs).forEach(
            layer => layer.move && layer.move(this.windowInnerHeight, this.windowPageYOffset)
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

    onResize = () => this.windowInnerHeight = window.innerHeight;

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, { passive: true });
        window.addEventListener('resize', this.onResize, false);
        this.onResize();
        this.onScroll();
    }

    componentDidUpdate() {
        this.onResize();
        this.onScroll();
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
                    height: this.props.height
                }}
                className={this.props.className}>

                {this.layers}

            </div>
        );
    }

    static Layer = class extends React.Component {
        move(innerHeight, YOffset) {
            let toValue = -(YOffset * this.props.speed) + innerHeight * this.props.offset;
            if (!(this.props.style && this.props.style.height)) this.refs.layer.style.height = `${innerHeight}px`;
            this.refs.layer.style.transform = `translate3d(0,${toValue}px,0)`;
        }

        render() {
            return (
                <div
                    ref="layer"
                    style={{
                        position: 'absolute',
                        backgroundPosition: 'bottom center',
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
