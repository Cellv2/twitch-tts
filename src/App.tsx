import React from "react";

import "./app.scss";

type AppProps = {
    title: string;
};

const App = ({ title }: AppProps) => (
    <>
        <main className="dark:bg-blue-950 dark:text-white min-h-dvh">
            <h1>{title}</h1>
            <p>Test App</p>
        </main>
    </>
);

export default App;
