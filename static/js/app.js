// Build the metadata panel
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

function buildMetadata(sample) {
  d3.json(url).then((data) => {
    // Get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let filteredMetadata = metadata.filter(entry => entry.id === sample);

    // Use d3 to select the panel with id of `#sample-metadata`
    let samplePanel = d3.select('#sample-metadata');

    // Use `.html("")` to clear any existing metadata
    samplePanel.html("");

    // Inside a loop, use d3 to append new tags for each key-value in the filtered metadata
    filteredMetadata.forEach(entry => {
      Object.entries(entry).forEach(([key, value]) => {
        // Append the key-value pairs as <p> elements to the #sample-metadata panel
        samplePanel.append('p').text(`${key}: ${value}`);
      });
    });
  });
};

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field


    // Filter the samples for the object with the desired sample number


    // Get the otu_ids, otu_labels, and sample_values


    // Build a Bubble Chart


    // Render the Bubble Chart


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select('#selDataset')

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (let i=0, i<names.length, i++){
      dropdown.append('option').attr('value', names[i]).text(names[i]);
    }

    // Get the first sample from the list
    let firstSample = names[0]

    // Build charts and metadata panel with the first sample
    
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

}

// Initialize the dashboard
init();
