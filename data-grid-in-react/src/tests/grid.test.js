import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { GridContainer } from '../components/grid';
import { act } from 'react-dom/test-utils';

// let container;


test('it should render a  table', () => {
    const { container, getByText, debug } = render(<GridContainer />)
    const table = container.querySelector('table');
    expect(table).toBeInTheDocument()
})


test('it should have "Add Row" button', () => {
    const { getByText } = render(<GridContainer />)
    expect(getByText('Add Row')).toBeInTheDocument()
})

test('it should have "Delete Rows" button', () => {
    const { getByText } = render(<GridContainer />)
    expect(getByText('Delete Rows')).toBeInTheDocument()
})


test('it should have table row', () => {
    const { container,debug } = render(<GridContainer />)
    const tableHeaderRow = container.querySelector("tr")
    expect(tableHeaderRow).toBeInTheDocument()
})