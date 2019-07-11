module.exports = (data) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>jqplot</title>
  
    <script type="text/javascript" src="{{path}}/jquery.min.js"></script>
    <script type="text/javascript" src="{{path}}/jquery.jqplot.min.js"></script>
  
    <script type="text/javascript" src="{{path}}/plugins/jqplot.logAxisRenderer.js"></script>
    <script type="text/javascript" src="{{path}}/plugins/jqplot.canvasTextRenderer.js"></script>
    <script type="text/javascript" src="{{path}}/plugins/jqplot.canvasAxisLabelRenderer.js"></script>
    <script type="text/javascript" src="{{path}}/plugins/jqplot.canvasAxisTickRenderer.js"></script>
    <script type="text/javascript" src="{{path}}/plugins/jqplot.dateAxisRenderer.js"></script>
    <script type="text/javascript" src="{{path}}/plugins/jqplot.categoryAxisRenderer.js"></script>
    <script type="text/javascript" src="{{path}}/plugins/jqplot.barRenderer.js"></script>
    <script type="text/javascript" src="{{path}}/plugins/jqplot.pieRenderer.js"></script>
    <script type="text/javascript" src="{{path}}/plugins/jqplot.pointLabels.js"></script>
    <link rel="stylesheet" type="text/css" href="{{path}}/jquery.jqplot.css" />
  
    <style type='text/css'>
      table {
        border : 1px solid #001;
      }
      td, th {
        border : 1px solid #ddd;
      }
    </style>
  </head>
  
  <body>
  
  <h3>${data.title}</h3>

    <table style='width:500px'>
      <thead>
      <tr>
        <th style='text-align:left'>${data.serie2Xlabel}</th>
        <th style='text-align:left'>${data.serie2Ylabel}</th>
      </tr>
      </thead>
      <tbody>
      {{#each serie2 as |serie| }}
        <tr>
        {{#each serie as |row| }}
          <td>{{row}}</td>
        {{/each}}
        </tr>
      {{/each}}
      </tbody>
    </table>

    <br/>
    <br/>
    <div id="chart2" style="width: 1400px; height:500px"></div>
  
    <script type="text/javascript">
  

      function drawChart() {
        var line3 = ${JSON.stringify(data.serie2)};

        $('#chart2').html('');
        var plot3 = $.jqplot('chart2', [line3], {
          title: "${data.title}",
          cursor: {
            show: true,
            zoom: true,
            looseZoom: true,
            showTooltip: false
          },
          highlighter: {
            show: true,
            sizeAdjust: 7.5
          },
          seriesColors: ['#85802b', '#00749F', '#73C774', '#C7754C', '#17BDB8'],
          seriesDefaults: {
            renderer: $.jqplot.BarRenderer,
            pointLabels: { show: true },
            rendererOptions: {
              // Set varyBarColor to tru to use the custom colors on the bars.
              varyBarColor: true,
              showDataLabels: true
            }
          },
          axes: {
            xaxis: {
              renderer: $.jqplot.CategoryAxisRenderer,
              label: "${data.serie2Xlabel}",
              labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
              tickRenderer: $.jqplot.CanvasAxisTickRenderer,
              tickOptions: {
                angle: -30,
                fontFamily: 'Courier New',
                fontSize: '12pt',
                fontWeight: 'bold'
              }
            },
            yaxis: {
              label: "${data.serie2Ylabel}",
              labelRenderer: $.jqplot.CanvasAxisLabelRenderer
            }
          }, legend: {
            show: true,
            placement: 'outsideGrid'
          }
        });
  
      }
      $(document).ready(drawChart);
    </script>
  </body>
  
  </html>`;
}