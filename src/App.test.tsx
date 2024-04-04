/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import App from "./App";

// https://redux.js.org/usage/writing-tests#writing-integration-tests-with-components
// https://redux.js.org/usage/writing-tests#preparing-initial-test-state

describe("the page renders", () => {
    beforeEach(() => {
        render(<App title="Hello World" />);
    });

    test("the correct title", () => {
        const headerText = screen.getByText(/Hello World/i);
        expect(headerText).toBeInTheDocument();
    });

    test("the correct static text", () => {
        const staticText = screen.getByText("Test App");
        expect(staticText).toBeInTheDocument();
    });
});
