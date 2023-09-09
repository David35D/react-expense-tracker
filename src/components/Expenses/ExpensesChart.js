// This component is responsible for rendering the Chart
// Also serves as entry point for the data

import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const chartDataPoints = [
        { label: 'Jan', value: 0, id: 'Jan'},
        { label: 'Feb', value: 0, id: 'Feb'},
        { label: 'Mar', value: 0, id: 'Mar'},
        { label: 'Apr', value: 0, id: 'Apr'},
        { label: 'May', value: 0, id: 'May'},
        { label: 'Jun', value: 0, id: 'Jun'},
        { label: 'Jul', value: 0, id: 'Jul'},
        { label: 'Aug', value: 0, id: 'Aug'},
        { label: 'Sept', value: 0, id: 'Sept'},
        { label: 'Oct', value: 0, id: 'Oct'},
        { label: 'Nov', value: 0, id: 'Nov'},
        { label: 'Dec', value: 0, id: 'Dec'},
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); // Starts at 0, January is also the 0th element of the array.
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return (
        <Chart 
            dataPoints={chartDataPoints}
        />
    );
};

export default ExpensesChart;