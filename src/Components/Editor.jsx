import React, { useState } from 'react'

import { UnControlled as CodeMirror } from 'react-codemirror2'
// all styles related to text editor
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
// // importing the languages
import 'codemirror/mode/xml/xml' // -> this basically a html
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'

function Editor(props) {
    const {
        displayName,
        language,
        value,
        onChange,
        theme
    } = props //taking value from props
    function handleChange(editor, data, value) {
        onChange(value);
    }
    const [open, setOpen] = useState(true);
    return (
        <div className={`editor-container ${open ? '' : 'minimize'} `} >

            <div className="editor-title">
                {displayName}
                <button
                    type='button'
                    className='min-max-btn'
                    onClick={() => {
                        setOpen((prevOpen) => !prevOpen)
                    }}
                >
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandArrowsAlt} />
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-box'
                options={{
                    lineWrapping: true,
                    mode: language,
                    lineNumbers: true,
                    theme: !theme ? 'material' : 'neo'


                }}
            />
        </div>
    )
}

export default Editor