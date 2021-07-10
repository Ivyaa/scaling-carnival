  function plot_timeSeries(divname,title_plot,unit,data){
    var chart = Highcharts.chart(divname, {
        title: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            labels: {
                formatter: function() {
                    return Highcharts.dateFormat('%Y-%m-%d', (this.value));
                }
            }
        },
        yAxis: {
            title: {
                text: '('+unit+')'
            }
        },
        tooltip: {
            valueSuffix: unit,
            dateTimeLabelFormats: {
                    minute:"%Y-%m-%e, %H:%M",
            },
            crosshairs: true
        },
        series: [{
            showInLegend: false,
            data: data
        }]
    });
}


function plot_scatter(divname,title_plot,ytitle,data){
    var chart = Highcharts.chart(divname, {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: title_plot
        },
        xAxis: {
            type: 'datetime',
            labels: {
                formatter: function() {
                    return Highcharts.dateFormat('%Y-%m-%d<br>%H:%M', (this.value));
                }
            },
            title: {
               enabled: true,
               text: 'Time'
            }
        },
        yAxis: {
            title: {
                text: ytitle
            }
        },
        legend: {
            verticalAlign: 'top',
            floating: true,
            backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
            borderWidth: 1,
            x:50
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {  //更改游標指示
                    pointFormat:'{point.x:%Y-%m-%d, %H:%M}'
                }
               
            }
        },
        series: data
    });
}

function plot_scatter2(divname,title_plot,ytitle,data){
    var chart = Highcharts.chart(divname, {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: title_plot
        },
        xAxis: {
            type: 'datetime',
            labels: {
                formatter: function() {
                    return Highcharts.dateFormat('%Y-%m-%d', (this.value));
                }
            },
            title: {
               enabled: true,
               text: 'Time'
            }
        },
        yAxis: {
			max: 360,
			endOnTick: false,
			startOnTick : true,
			tickInterval: 45,
            title: {
                text: ytitle
            }
        },
        legend: {
			enabled: false,
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 3,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
							//showInLegend: false,              
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {  //更改游標指示
                    pointFormat:'時間:{point.x: %Y-%m-%d, %H:%M} , 風向:{point.y} \u00b0'
                }
               
            }
        },
        series: data
    });
}
