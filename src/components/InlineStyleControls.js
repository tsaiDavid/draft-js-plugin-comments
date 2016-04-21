import React from 'react';
import StyleButton from './StyleButton';

const BOLD = (
    <span className="TextEditor-controls-button">
        <i className="fa fa-bold" aria-hidden="true"></i>
    </span>
);

const ITALIC = (
    <span className="TextEditor-controls-button">
        <i className="fa fa-italic" aria-hidden="true"></i>
    </span>
);

const UNDERLINE = (
    <span className="TextEditor-controls-button">
        <i className="fa fa-underline" aria-hidden="true"></i>
    </span>
);

const INLINE_STYLES = [
   { label: BOLD, style: 'BOLD' },
   { label: ITALIC, style: 'ITALIC' },
   { label: UNDERLINE, style: 'UNDERLINE' }
];

export const InlineStyleControls = (props) => {
    const currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div className="TextEditor-controls-bar">
            {INLINE_STYLES.map(type =>
                <StyleButton
                    key={type.style}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </div>
   );
};
