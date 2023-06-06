import { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            isError: false,
            error: null,
        };

    }

    componentDidCatch(error){
        this.setState({
            isError: true,
            error,
        });
    }


    render() {

        if (this.state.isError){
            return this.props.errorHandler(this.state.error);
        }
        return this.props.children;
    }
}
