import * as React from 'react';
import { Subtract } from "utility-types";

const withListState = (Component: React.Component | React.ReactNode | any) => {
  type P = React.ComponentProps<typeof Component>;

  type T = Subtract<P, {}>;

  return class WithListState extends React.PureComponent<T, P> {
    constructor(props) {
      super(props);
      this.state = {
        isListOpen: false,
      };

      this._handleOpenListClick = this._handleOpenListClick.bind(this);
    }

    _handleOpenListClick() {
      this.setState((prevState) => ({isListOpen: !prevState.isListOpen}));
    }

    render() {
      const {isListOpen} = this.state;
      return (
        <Component
          {...this.props}
          isListOpen={isListOpen}
          onSelectOpen={this._handleOpenListClick}
        />
      );
    }
  };
};

export default withListState;
