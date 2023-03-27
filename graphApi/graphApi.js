async function fetchIngredientsData() {
  const response = await fetch('/api/ingredients');
  const ingredientsData = await response.json();

  const updatedInventory = {};

  ingredientsData.forEach((ingredient) => {
    updatedInventory[ingredient.name] = {
      name: ingredient.name,
      unit: ingredient.stock,
      ideal: 100,
    };
  });

  return updatedInventory;
}

function inventoryColors(item) {
  if (item.unit < item.ideal * 0.5) {
    return "rgb(250,200,0)";
  } else if (item.unit < item.ideal * 0.25) {
    return "rgb(250,0,0)";
  } else {
    return "rgb(100,255,50)";
  }
}

async function updateGraph() {
  const inventory = await fetchIngredientsData();

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
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
        dataPoints: Object.keys(inventory).map((key) => {
          const ingredient = inventory[key];
          return {
            label: ingredient.name,
            y: ingredient.unit,
            color: inventoryColors(ingredient),
          };
        }),
      },
    ],
  });
  chart.render();
}

window.addEventListener('load', updateGraph);
