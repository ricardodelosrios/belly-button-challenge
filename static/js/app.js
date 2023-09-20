// The URL variable is defined that stores a text string that represents the URL containing a JSON file
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//Create 2 variables to store the data obtained from the JSON file after the request is completed.

let d_samples = [];
let d_metadata = [];

// The d3.json() function of the D3.js library is used to get the data from the JSON file.
d3.json(url).then(function (data) {
    //The samples and metadata are obtained from the samples.json file and assigned to the variables d_samples and d_metadata
    d_samples = data.samples;
    d_metadata = data.metadata;
    // The variable d_names is created and the names are obtained from the samples.json file
    let d_names = data.names;
    //A forEach loop is used to loop through all the elements in d_names. In each iteration, an identifier (id) and its index in the array (index) are taken.
    d_names.forEach(function (id, index) {
        //(d3.select()) is used to select the element with the ID "selDataset", which should be a <select> element in the HTML document. Then, an option (<option>) is added to that <select> element. The value attribute of the option is set to the value of the current identifier (id) and the visible text of the option is set to the same identifier (id).
        d3.select("#selDataset").append("option").attr("value", id).text(`${id}`);
    });
    //Visually update the web page or data display based on the selection made in the drop-down menu.
    updatePlotly();
});
// Every time an item is selected in the dropdown list, it will change the display with updatePlotly
d3.selectAll("#selDataset").on("change", updatePlotly);
// Define the 'updatePlotly' function
function updatePlotly() {
    // Selects the dropdown menu item using D3.js and stores it in the list variable.
    let list = d3.select("#selDataset");
    // Gets the value currently selected in the list and stores it in the 'Value' variable.
    let Value = list.property("value");
    //Gets index of Value
    let index = d_samples.findIndex(x => x.id === Value);
    //Create a sample variable 
    let sample = d_samples[index];
    
    let sampleData = sample.otu_ids.map((otu_id, index) => ({
        otu_id,
        sample_value: sample.sample_values[index],
        otu_label: sample.otu_labels[index]
    }));
    // Sort and slice to obtain top 10
    sampleData.sort((a, b) => b.sample_value - a.sample_value);
    //it uses `otu_ids` property of the sample object, and uses  the `slice(0, 10)` method to select the first 10 elements of the `otu_ids` array, concatenates "OTU " with each otu_id value to create an array of strings with "OTU " as a prefix to each otu_id and then `reverse()` to reverse the order of the selected values.
    let y = sampleData.slice(0, 10).map(item => "OTU " + item.otu_id).reverse();
    //it uses `sample_values` property of the sample object, and uses  the `slice(0, 10)` method to select the first 10 elements of the `sample_values` array, and then `reverse()` to reverse the order of the selected values.
    let x = sampleData.slice(0, 10).map(item => item.sample_value).reverse();
    //it uses `otu_labels` property of the sample object, and uses  the `slice(0, 10)` method to select the first 10 elements of the `otu_labels` array, and then `reverse()` to reverse the order of the selected values.
    let text = sampleData.slice(0, 10).map(item => item.otu_label).reverse();
    //Create an horizontal barchart

    let hbarchat = [{
        type: 'bar',
        x: x,
        y: y,
        text: text,
        orientation: 'h'
    }];
    //Create and plot the bar chart.
    Plotly.newPlot("bar", hbarchat);


    //Declare new arrays. The map method is used to iterate over each element in the sampleData array. 
    let Otu_Ids = sampleData.map(item => item.otu_id);
    let S_Values = sampleData.map(item => item.sample_value);
    let Otu_Labels = sampleData.map(item => item.otu_label);

    
    //creating a bubble chart using the Plotly library to visualize data. 
    //Creating the Trace (Data):
    var trace = {
        x: Otu_Ids,
        y: S_Values,
        mode: 'markers',
        text: Otu_Labels,
        marker: {
            size: S_Values,
            color: Otu_Ids,
            colorscale: 'Portland'
        }
    };
    //Creating the Data Array
    var dbubble = [trace];
    //Layout Configuration
    var layout = {
        title: {
            text: 'OTU ID',
            y: 0.05,
            yanchor: 'bottom'
        },
        showlegend: false,
        // height: 800,
        // width: 800
    };
    //Creating the Bubble Chart
    Plotly.newPlot('bubble', dbubble, layout);
    
    //Obtains and displays sample metadata in an HTML element.
    let metadata = d_metadata[index];
    //Accessing the HTML Element
    let demograf = document.getElementById("sample-metadata");
    //Creating HTML String for Metadata
    let htmlString = "";
    for (key in metadata) {
        if (metadata.hasOwnProperty(key)) {
            htmlString = htmlString + `${key}: ${metadata[key]}<br>`;
        }
    }
    //Updating the HTML Element with Metadata
    demograf.innerHTML = htmlString;

}