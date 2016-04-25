import React from 'react';

export default class Toolbar extends React.Component {
    constructor() {
        super();
        this.state = { active: true };
        this.onToggle = (e) => {
            e.preventDefault();
            this.setState({ active: !this.state.active });
        };
    }

    render() {
        if (this.state.active) {
            return (
                <div className="TextEditor-controls-bar">
                    <span id="Toolbar-text" onClick={this.onToggle}>
                        show
                    </span>
                    {this.props.children}
                </div>
            );
        } else {
            return (
                <div className="TextEditor-controls-bar">
                    <span id="Toolbar-text" onClick={this.onToggle}>
                        hide
                    </span>
                </div>
            );
        }
    }
}

// StyleButton.propTypes = {
//     onToggle: React.PropTypes.function,
//     style: React.PropTypes.boolean,
//     active: React.PropTypes.boolean,
//     label: React.PropTypes.string
// };
