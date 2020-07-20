import * as React from 'react';

type State = {
  isListOpen: boolean;
};

const withListState = (Component: React.Component | React.ReactNode | any) => {
  type P = React.ComponentProps<typeof Component>;

  return class WithListState extends React.PureComponent<P, State> {
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
