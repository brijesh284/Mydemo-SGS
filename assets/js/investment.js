
      window.addEventListener('load', function () {
        document.querySelector('.preloader').style.display = 'none';
        $('.country-exist').map((i,c)=>{
          $(c).on('mousemove',(e)=>{
            showTitle(c,e)
          })
          $(c).on('mouseout',(e)=>{
            $('#title-invest').hide();
          })
        })
        const showTitle = (c,e)=>{
          $('#title-invest').show();

          $('#title-invest').offset({top:e.pageY -50 , left :e.pageX -50});
          let text = $(c).attr('alt');
          $('#title-invest').html(`<i>${$(c).attr('title')}</i><br>${text} ${text!=1?"investors":"investor"}`);
        }
        $('#title-invest').on('mousemove',(e)=>{
            $('#title-invest').offset({top:e.pageY , left :e.pageX});
          })
          
         

          // charts
          
          const dataCart1 = [,1320000, 2640000, 5040000, 10000200, 10500000,12390000,13087000,16100000];
          const textChart1 = `Company Valuation Growth\n2019-2023`;
          const stepChart1 = 2000000;
          
          const dataCart2 = [,33, 33, 36, 71, 75,89,93,115];
          const textChart2 = `Share Price Growth\n2019-2023`;
          const stepChart2 = 20;
          
          drow(stepChart1,textChart1,dataCart1);
          let activeChart =1;

          $('.char').map((i,chart)=>{
            $(chart).on('click',(e)=>{
              if($(chart).attr('alt')=='chart2' && activeChart ==1){
                drow(stepChart2,textChart2,dataCart2);
                activeChart=2
              }else if ($(chart).attr('alt')=='chart1' && activeChart ==2) {
                drow(stepChart1,textChart1,dataCart1);
                activeChart=1
              }
              $($('.chart-title-active')).addClass('chart-title');
                $($('.chart-title-active')).removeClass('chart-title-active');
                $(chart).addClass('chart-title-active');
            })
          });

          
        function drow(chartSteps,chartText,chartData){
          new Chart("myChart", {
            type: "line",
            data: {
              labels: [' ','2019', '2020', '2021',' ', '2022',' ',' ', '2023',' '],
              datasets: [{
                label: 'Money',
                data: chartData,
                borderColor: 'darkred',
                // lineTension: .1,
                fill: false,
                pointRadius: 3
              }]
            },
            options: {
              legend: {display: false},
              title: {
                display: true,
                text: chartText,
                fontSize: 18,
                fontFamily: 'tahoma',
                fontBold: '0',
                padding: 20,
                lineHeight:1.2,
                position:'top'
              },
              scales: {
                yAxes: [{
                  ticks: {
                     beginAtZero: true,
                     stepSize: chartSteps,
                     callback: function(value, index, values) {
                      return  value.toLocaleString() + ' €';
                    }
                  }
                }],
                xAxes:[{
                   gridLines: {
                      display: false
                    },
                  ticks: {beginAtZero: true }}]
              },
             
            },

          });
        
        }
         
      });
    