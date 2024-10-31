
import { Component, ErrorInfo, ReactNode } from "react";

class ErrorBoundary extends Component {

    state: { hasError: boolean, message?: string } = { hasError: false };
    props: { children?: ReactNode } = {};
    constructor(props: { children?: ReactNode } & {}) {
        super(props);
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, message: error.message };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div>出错了： {this.state.message}</div>;
        }
        return this.props.children;
    }
}

function ErrorComp() {
    // const b = window.a.b;
    // return <div>{b}</div>;
    
    return <p></p>;
}

export default function App() {
    return (
        <ErrorBoundary>
            <div>
                <p>ErrorBoundary</p>
                <ErrorComp />
            </div>
        </ErrorBoundary>
    )
}