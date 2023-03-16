let clickCounter = 0;
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  clickCounter += 1000;
  console.log("mouse up working " + clickCounter);
  graph();
});




let graph = () => {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Inventario",
    },
    subtitles: [
      {
        text: "En kilos",
        fontSize: 16,
      },
    ],
    axisY: {
      suffix: "kg",
      scaleBreaks: {
        customBreaks: [
          {
            startValue: 1000,
            endValue: 1500,
          },
        ],
      },
    },
    data: [
      {
        type: "column",
        yValueFormatString: "$#,##0.00",
        dataPoints: [
          { label: "Jitomate", y: clickCounter, color: 'rgb(255,0,0)' },
          { label: "Cebolla", y: 1000, color: 'rgb(255,0,0)' },
          { label: "Pan", y: 2000, color: 'rgb(250,200,0)'},
          { label: "Tocino", y: 2500, color: 'rgb(250,200,0)' },
          { label: "Piña", y: 6000, color: 'rgb(100,255,50)' },
          { label: "Catsup", y: 5000, color: 'rgb(100,255,50)' },
          { label: "Mayonesa", y: 4000, color: 'rgb(250,200,0)' },
          { label: "Japaleñ", y: 3000, color: 'rgb(250,200,0)' },
        ],
      },
    ],
  });
  chart.render();
};
window.onload = graph();