import { Component, ErrorInfo, PropsWithChildren } from 'react';
import { ApiException } from '../../api/models';
import { SnackBar } from '../components';

interface State {
  hasError: boolean;
  error: ApiException;
}

export class SnackBarBoundary extends Component<PropsWithChildren, State> {
  static readonly initialState: State = {
    hasError: false,
    error: null,
  };
  static getDerivedStateFromError(error: ApiException): State {
    return { hasError: true, error };
  }

  state: State = SnackBarBoundary.initialState;

  componentDidCatch(_error: Error, errorInfo: ErrorInfo) {
    console.error(this.constructor.name, errorInfo.componentStack);
  }

  render() {
    return !this.state.hasError ? this.props.children : this.getSnackBar();
  }

  private getSnackBar() {
    return (
      <SnackBar
        title={this.state.error.title}
        message={this.state.error.statusText}
        severity={this.state.error.severity}
      />
    );
  }
}
