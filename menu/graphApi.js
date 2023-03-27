let clickCounter = 0;
let addBtn = document.getElementById("addBtn");
// addBtn.addEventListener("click", () => {
//   clickCounter += 1000;
//   console.log("mouse up working " + clickCounter);
//   graph();
// });

let inventory = {
  Bread: {
    name: "bread",
    price: 2.5,
    unit: 15,
    ideal: 20,
  },
  Lettuce: {
    name: "Lettuce",
    price: 2.5,
    unit: 12,
    ideal: 20,
  },
  Meat: {
    name: "Meat",
    price: 2.5,
    unit: 13,
    ideal: 20,
  },
  Bacon: {
    name: "Bacon",

    price: 2.5,
    unit: 16,
    ideal: 20,
  },
  Cheese: {
    name: "Cheese",

    price: 2.5,
    unit: 8,
    ideal: 20,
  },
  Tomatoes: {
    name: "Tomatoes",

    price: 2.5,
    unit: 5,
    ideal: 20,
  },
  Mayo: {
    name: "Mayo",

    price: 2.5,
    unit: 12,
    ideal: 20,
  },
  Pineapple: {
    name: "Pineapple",

    price: 2.5,
    unit: 6,
    ideal: 20,
  },
  Jalapeños: {
    name: "Jalapeños",

    price: 2.5,
    unit: 8,
    ideal: 20,
  },
  Onion: {
    name: "Onion",

    price: 2.5,
    unit: 9,
    ideal: 20,
  },
  Ketchup: {
    name: "Ketchup",

    price: 2.5,
    unit: 6,
    ideal: 20,
  },
  Mustard: {
    name: "Mustard",

    price: 2.5,
    unit: 11,
    ideal: 20,
  },
};

function inventoryColors(object) {
  for (const item = 0; object.length; item++) {
    if (object.item.price < object.item.ideal * 0.5) {
      return "rgb(250,200,0)";
    } else if (object.item.price < object.item.ideal * 0.25) {
      return "rgb(250,0,0)";
    } else return "rgb(100,255,50)";
  }
}

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
          {
            label: inventory.Bread.name,
            y: clickCounter,
            color: inventoryColors(inventory),
          },
          { label: "Lettuce", y: 10, color: "rgb(255,0,0)" },
          { label: "Meat", y: 15, color: "rgb(250,200,0)" },
          { label: "Bacon", y: 15, color: "rgb(250,200,0)" },
          { label: "Cheese", y: 6, color: "rgb(100,255,50)" },
          { label: "Tomatoes", y: 5, color: "rgb(100,255,50)" },
          { label: "Mayo", y: 4, color: "rgb(250,200,0)" },
          { label: "Pineapple", y: 3, color: "rgb(250,200,0)" },
          { label: "Jalapeños", y: 3, color: "rgb(250,200,0)" },
          { label: "Onion", y: 3, color: "rgb(250,200,0)" },
          { label: "Ketchup", y: 3, color: "rgb(250,200,0)" },
          { label: "Mustard", y: 5, color: "rgb(250,200,0)" },
        ],
      },
    ],
  });
  chart.render();
};
window.onload = graph();

let size = Object.keys(inventory).length;

for (let i = 0; i < size; i++) {
  console.log(Object.keys(inventory).name);
}
console.log(size);
