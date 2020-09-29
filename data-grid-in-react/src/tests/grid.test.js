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


test('it should have 101 rows present (100 data rows + 1 header row)', () => {
    const { container } = render(<GridContainer />)
    const tableHeaderRow = container.querySelectorAll("tr")
    expect(tableHeaderRow.length).toBe(101)
})

