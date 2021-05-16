/*
 * altitude chart generation
 */

function transpose_matrix(matrix)
{
    return Object.keys(matrix[0]).map(function(c)
    {
        return matrix.map(function(r) { return r[c]; });
    });
}

// convert unix timestamp in date and time format
function unix_timestamp_to_date_and_time(unix_time_list)
{
    var date_and_time_list = [];
    for (i = 0; i < unix_time_list.length; i++)
    {
        var timestamp = moment.unix(unix_time_list[i]);
        date_and_time_list.push(timestamp.format("YYYY-MM-DD hh:mm:ss"));
    }

    return(date_and_time_list)
}

function generate_altitude_chart(chart_name, altitude_variable)
{
    // altitude chart axis data configuration
    var altitude_chart_data = [
        {
            x:  unix_timestamp_to_date_and_time(transpose_matrix (altitude_variable)[0]),
            y: transpose_matrix (altitude_variable)[1],
            type: 'scatter'
        }
    ];

    // altitude chart axis layout configuration
    var altitude_chart_layout =
        {
            font: 
            {
                family: 'Times New Roman',
                color: '#000000'
            },
            yaxis: 
            {
                title: 
                {
                    text: 'altitude in [m]'
                }
            }
        };

    // generate altitude chart
    Plotly.newPlot(chart_name, altitude_chart_data, altitude_chart_layout);
}