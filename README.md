# belly-button-challenge

## Introduction

In this project, we will embark on the journey of creating an engaging and interactive dashboard. Our primary objective is to delve into the fascinating realm of the Belly Button Biodiversity dataset, a treasure trove of information that meticulously documents the diverse microorganisms inhabiting human navels.

As we dive into this dataset, we'll unveil a captivating revelation: a select few microbial species, referred to as operational taxonomic units (OTUs) in the study, inhabit the belly buttons of over 70% of individuals. Meanwhile, the remainder of these microbial entities remains relatively uncommon and elusive. 

## Folders and files

 * It will find **2 Files** in this project:
  
    * [index.html](https://github.com/ricardodelosrios/belly-button-challenge/blob/main/index.html). In this file, you will find the html code.
    * [samples.json](https://github.com/ricardodelosrios/belly-button-challenge/blob/main/samples.json). You will find the json file with the original data.

* It is going to find a **folder** in this project:
   * The folder called `Resources` will find 1 json file. Listed below are the names of the files you will find:

    * [static/js](https://github.com/ricardodelosrios/belly-button-challenge/tree/main/static/js): All Javascript code to create and update the panel.

## How is it works?

### HTML

This is `HTML` code that defines the structure of a web page titled `"Bellybutton Biodiversity Dashboard"`. The page uses Bootstrap to apply styling and responsive design. On the page, there is a header with the title and a short description. Then, there is a main section divided into three columns: the first column has a drop-down menu to select a test subject identification number, the second column displays demographic information related to the selected subject, and the last two columns contain interactive graphs that They will probably be generated dynamically using `JavaScript` and libraries like `D3.js` and `Plotly.js`. At the end of the HTML document, references are included to the necessary JavaScript libraries and to an "app.js" file that likely contains the code to create and update the graphics in response to subject selection. 

### App file

Data Selection: The selected value from the drop-down menu (`d_samples`) allows identification of the user's choice. The corresponding index is located in the data (Data S).

Horizontal Bar Chart: To create a horizontal bar chart, the most important samples from the given data set are chosen and arranged in the top 10. This allows easy visualization of significant values.

Bubble Chart: Sample data can be visually represented by creating a bubble chart. The size and color of the data determine the size of the bubbles, and the labels provide detailed information when you hover over them, making the data easier to explore and understand.

The app's interactivity centers on the "updatePlotly" feature, which provides the user with the ability to choose and inspect multiple data sets in real time, resulting in a simplified understanding of the predominant patterns and trends within the data.

## References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.
    
