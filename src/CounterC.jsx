import { Component } from "react";

export default class CounterC extends Component {
    constructor(props) {
        super(props);
        this.state = { count: props.initialCount || 0, loading: true };
    }

    componentDidMount() {
        console.log("CounterC: ComponentDidMount");
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.counter !== this.props.counter) {
            this.setState({ count: this.props.counter });
        }
    }

    render() {
        console.log("CounterC: render");
        return this.state.loading ? (
            <p>Loading...</p>
        ) : (
            <div>
                <p>Count : {this.state.count}</p>
            </div>
        );
    }
}
