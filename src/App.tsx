import React from "react";

import "./app.scss";
import DropdownSelect from "./components/shared/Dropdowns/DropdownSelect";

type AppProps = {
    title: string;
};

const App = ({ title }: AppProps) => (
    <>
        <main className="dark:bg-blue-950 dark:text-white min-h-dvh">
            <h1>{title}</h1>
            <p>Test App</p>
            <DropdownSelect dropdownOptions={["One", "Two", "Three"]} />
        </main>
    </>
);

export default App;
