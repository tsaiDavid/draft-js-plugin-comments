import React, { Component } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
// import { BlockStyleControls } from './BlockStyleControls';
import { InlineStyleControls } from './InlineStyleControls';
import Toolbar from './Toolbar';
import './textEditor.scss';

export default class CommentEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty()
        };

        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => this.setState({ editorState });

        this.getInnerContent = () => this._getInnerContent();
        this.handleKeyCommand = (command) => this._handleKeyCommand(command);
        this.toggleBlockType = (type) => this._toggleBlockType(type);
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    }

    _getInnerContent() {
        const content = this.state.editorState.getCurrentContent();
        return convertToRaw(content);
    }

    _handleKeyCommand(command) {
        const { editorState } = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }

    render() {
        const { editorState } = this.state;

        /**
         * If the user changes the block type before entering any text,
         * we can either style the placeholder or hide it.
         */
        let className = 'TextEditor-editor';
        const contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' TextEditor-hidePlaceholder';
            }
        }

        return (
            <div className="TextEditor-root">
                <Toolbar>
                    <InlineStyleControls
                        editorState={editorState}
                        onToggle={this.toggleInlineStyle}
                    />
                </Toolbar>
                <div
                    className={className}
                    onClick={this.focus}
                >
                    <Editor
                        editorState={editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange}
                        ref="editor"
                        spellCheck
                    />
                </div>
            </div>
        );
    }
}
