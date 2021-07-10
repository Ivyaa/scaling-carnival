var List = {//for showed variables
			'temp':{
				'name':'溫度',
				'unit':'\xB0C',
				'max':40,
				'min':0,
                'columnName':'CWB_Temperature'
			},
			'rh':{
				'name':'相對溼度',
				'unit':'%',
				'max':100,
				'min':0,
                'columnName':'CWB_Humidity'
			},
			'pres':{
				'name':'氣壓',
				'unit':'hPa',
				'max':1030,
				'min':970,
                'columnName':'CWB_Pressure'
			},
			'precip':{
				'name':'每分鐘雨量',
				'unit':'mm',
				'max':50,
				'min':0,
                'columnName':'CWB_Rain05'
			},
			'wd':{
				'name':'風向',
				'unit':'\xB0',
				'max':380,
				'min':0,
                'columnName':'CWB_WindDirection'
			},
			'ws':{
				'name':'風速',
				'unit':'m/s',
				'max':10,
				'min':0,
                'columnName':'CWB_WindSpeed'
			},
			'ShortWaveDown':{
				'name':'太陽輻射',
				'unit':'W/m^2',
				'max':1500,
				'min':-5,
                'columnName':'ShortWaveDown'
			},
};
var varList = { //for every variables
            'CWB_Temperature':{
                'max':50,
                'min':0,
                'color': 'rgba(223, 83, 83, .5)'
			},
            'CWB_Rain05':{
                'max':20,
                'min':0,
                'color': 'rgba(65, 105, 225, .5)'
			},
            'CWB_WindSpeed':{
                'max':10,
                'min':0,
                'color': 'rgba(67, 205, 128, .5)'
			},
            'Rain01':{
                'max':10,
                'min':0,
                'color': 'rgba(135, 206, 250, .5)'
			},
            'EvapLevel':{
                'max':200,
                'min':170,
                'color': 'rgba(79, 79, 79, .5)'
			},
            'MaintainFlag':{
                'max':1,
                'min':0,
                'color': 'rgba(0, 0, 0, .5)'
			},
			'ShortWaveDown':{
                'max':1,
                'min':0,
                'color': 'rgba(0, 0, 0, .5)'
			},
            'CWB_WindDirection':{
                'max':360,
                'min':0,
                'color': 'rgba(223, 83, 83, .5)'
			},

};