import React, {PureComponent} from 'react';

const withListState = (Component: React.Component | React.ReactNode | any) => {
  return class WithListState extends PureComponent<{}, { isListOpen: boolean }> {
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
