import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHeight = '0%';   // Initial bar fill height 0%

    if (props.maxValue > 0) {
        // Percentage between 0 and 100 by which the bar should be filled.
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'; // Adding the + '%' to convert to string
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div 
                    className='chart-bar__fill'
                    style={{
                        height: barFillHeight
                    }} // Style needs an object as a value.
                ></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );
};

export default ChartBar;