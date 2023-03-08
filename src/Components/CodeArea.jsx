import React, { useState, useEffect } from 'react'
import Editor from './Editor'
import useLocalStorage from './hooks/useLocalStorage'
const CodeArea = (props) => {
    // GETTING VALUE FROM PROPS 
    const { theme, layout, hideEditor } = props
    const [html, setHtml] = useLocalStorage('html', '')
    const [css, setCss] = useLocalStorage('css', '')
    const [js, setJs] = useLocalStorage('js', '')
    const [srcDoc, setSrcDoc] = useState()

    // CREATING SOURCE DOC 
    const srcCode = `
                <html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                </html>
         `


    // slowing down rendering Effect any time html css and js change
    useEffect(() => {
        // running it after every 250ms rest same as Java Math.sleep()
        const timeOut = setTimeout(() => {
            setSrcDoc(srcCode);
        }, 350)
        return () => clearTimeout(timeOut)
    }, [html, css, js])


    // FUNCTION FOR HIDING THE CODE EDITOR
    function editorState(flag) {
        return {
            display: flag ? 'none' : ''
        }
    }

    return (
        <>
            <div className="input-container" style={editorState(hideEditor)}>
                <div className={` top-pane ${layout ? 'pane' : 'new-pane'}`}>
                    <Editor
                        displayName='HTML'
                        language='xml'
                        value={html}
                        onChange={setHtml}
                        theme={theme}
                    />
                    <Editor
                        displayName='CSS'
                        language='css'
                        value={css}
                        onChange={setCss}
                        theme={theme}
                    />
                    <Editor
                        displayName='JavaScript'
                        language='javascript'
                        value={js}
                        onChange={setJs}
                        theme={theme}
                    />
                </div>
            </div>
            <div className="output-container">
                <div className={`${layout ? 'pane2' : 'pane2'}`}>
                    <iframe
                        srcDoc={srcDoc}
                        title="output"
                        sandbox="allow-scripts" // this will only allow valid scripts
                        frameBorder="0"
                        width="100%"
                        height="100%"

                    />
                </div>

            </div>
        </>
    )
}

export default CodeArea