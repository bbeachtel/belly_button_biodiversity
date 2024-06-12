# Belly Button Biodiversity Dashboard

This project involves building an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes colonizing human navels. The dataset reveals that a few microbial species are present in over 70% of people, while the rest are relatively rare.

## Project Overview

### Repository Setup
1. Created a new repository called `belly-button-challenge`.
2. Cloned the repository to the local machine.
3. Copied the provided starter code files (`index.html`, `samples.json`, and the `static` folder) into the local repository.
4. Pushed the changes to GitHub.
5. Deployed the repository to GitHub Pages.

### Interactive Dashboard

#### Data Reading
- Used the D3 library to read `samples.json` from the URL: [samples.json](https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json).

#### Bar Chart
- Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in a selected individual.
  - `sample_values` were used as the values for the bar chart.
  - `otu_ids` were used as the labels for the bar chart.
  - `otu_labels` were used as the hovertext for the chart.

#### Bubble Chart
- Created a bubble chart to display each sample.
  - `otu_ids` were used for the x-axis values.
  - `sample_values` were used for the y-axis values.
  - `sample_values` were used for the marker size.
  - `otu_ids` were used for the marker colors.
  - `otu_labels` were used for the text values.

#### Sample Metadata
- Displayed the metadata for each sample, showing an individual's demographic information.
  - Looped through each key-value pair from the metadata JSON object and created a text string.
  - Appended an HTML tag with that text to the `#sample-metadata` panel.

#### Plot Updates
- Updated all the plots when a new sample is selected from the dropdown menu.
- Allowed customization of the dashboard layout.

### Deployment
- Deployed the app to GitHub Pages.
- Submitted the deployment link and the GitHub repository link.

## Technologies Used
- **D3.js:** For reading data and creating interactive charts.
- **HTML/CSS:** For structuring and styling the dashboard.
- **JavaScript:** For implementing the interactivity and functionality.
- **Git/GitHub:** For version control and hosting the repository.
- **GitHub Pages:** For deploying the dashboard.
