import React, { useState } from "react";
// import Home from './Components/Home';
import Header from "./Components/Header";
import CodeArea from "./Components/CodeArea";

const App = () => {
    // for changing the theme
    const [theme, setTheme] = useState(false);
    function changeTheme() {
        setTheme(prevValue => !prevValue)
    }
    //for  changing the layout
    const [layout, setLayout] = useState(true);
    function changeLayout() {
        setLayout(prevValue => !prevValue)
    }
    // this is for hiding the code editor
    const [hideEditor, setEditor] = useState(false);
    function changeEditor() {
        setEditor((prev) => !prev)
    }
    return (
        <>
            <Header
                theme={theme}
                changeTheme={changeTheme}
                layout={layout}
                changeLayout={changeLayout}
                hideEditor={hideEditor}
                changeEditor={changeEditor}

            />
            <CodeArea
                theme={theme}
                layout={layout}
                hideEditor={hideEditor}
            />

        </>
    );
}
export default App;