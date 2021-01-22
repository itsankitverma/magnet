import React from 'react'

function ChartData() {
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
    return (
        <div>
            
        </div>
    )
}

export default ChartData
