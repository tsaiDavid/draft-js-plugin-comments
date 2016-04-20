import React from 'react';
import StyleButton from './StyleButton';

const BOLD = <i className="fa fa-bold" aria-hidden="true"></i>;
const ITALIC = <i className="fa fa-italic" aria-hidden="true"></i>;
const UNDERLINE = <i className="fa fa-underline" aria-hidden="true"></i>;

const INLINE_STYLES = [
   { label: BOLD, style: 'BOLD' },
   { label: ITALIC, style: 'ITALIC' },
   { label: UNDERLINE, style: 'UNDERLINE' }
];

export const InlineStyleControls = (props) => {
    const currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div className="RichEditor-controls">
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
