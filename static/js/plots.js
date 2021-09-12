console.log("READY FOR DUTY DIR")

var dropdown = d3.select("#resource-dd")

dropdown.on("change", onDDChange);

d3.json("/api").then(data => {
    var trace1 = {
        x: ["beer", "wine", "martini", "margarita",
            "ice tea", "rum & coke", "mai tai", "gin & tonic"],
        y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
        type: "bar"
      };
      
      var data = [trace1];
      
      var layout = {
        title: "'Bar' Chart",
        xaxis: { title: "Drinks"},
        yaxis: { title: "% of Drinks Ordered"}
      };
      
      Plotly.newPlot("plot", data, layout);
    console.log(data)

})

function onDDChange() {
    var newValue = dropdown.property("value");
d3.select('#test').text("hello")
    console.log(newValue)

    d3.json(`/api/${newValue}`).then(newData => { 
        console.log(newData);
    })
}