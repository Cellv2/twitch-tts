import React from "react";

import "./app.scss";

type AppProps = {
    title: string;
};

const App = ({ title }: AppProps) => (
    <>
        <h1>{title}</h1>
        <p>Test App</p>
    </>
);

export default App;
