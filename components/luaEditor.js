'use client'
import { useRef } from 'react'
import { Editor } from '@monaco-editor/react';
import { Spinner } from "@nextui-org/react";
const LuaEditor = ({ initialValue, onChange }) => {
    const editorRef = useRef(null)


    const editorDidMount = (editor, monaco) => {
        editorRef.current = editor
    };

    return (
        <Editor
            language="lua"
            theme="vs-dark" // You can change the theme
            value={ initialValue }
            options={ { fontSize: 16 } }
            onChange={ onChange }
            onMount={ editorDidMount }
            loading={ < Spinner /> }
        />
    );
};

export default LuaEditor;
