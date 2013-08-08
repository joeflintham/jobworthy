var dataProps = {
    scenes: [
	{
	    id: 'intro',
	    data: [
		['0', [['top[cubic]','0%']]],
		['500', [['top[cubic]','0%']]],
		['3000', [['top[cubic]','-100%']]]
	    ],
	    nodes: [
		{
		    id: 'cloud_one',
		    data: [
			['200', [['top[cubic]','300px'],['left[cubic]','200px'], ['transform','scale(1.3)']]],
			['1000', [['top','350px'],['left','-350px'], ['transform','scale(1)']]],
			['1200', [['left','-350px'], ['opacity','1']]],
			['2000', [['left','-700px'], ['opacity','0']]]
		    ]
		},
		{
		    id: 'cloud_two',
		    data: [
			['200', [['top[cubic]','175px'],['left[cubic]','150px'], ['transform','scale(1.5)']]],
			['1000', [['top','75px'],['left','-350px'], ['transform','scale(1.1)']]],
			['1200', [['left','-350px'], ['opacity','1']]],
			['2000', [['left','-700px'], ['opacity','0']]]
		    ]
		},
		{
		    id: 'cloud_three',
		    data: [
			['200', [['top[cubic]','5px'],['left[cubic]','0px'], ['transform','scale(1)']]],
			['1000', [['top','-400px'],['left','-350px'], ['transform','scale(1.5)']]],
			['1200', [['left','-350px'], ['opacity','1']]],
			['2000', [['left','-700px'], ['opacity','0']]]
		    ]
		},
		{
		    id: 'cloud_four',
		    data: [
			['200', [['top[cubic]','25px'],['left[cubic]','200px'], ['transform','scale(1)']]],
			['1000', [['top','-250px'],['left','150px'], ['transform','scale(1)']]],
			['1200', [['left','150px'], ['opacity','1']]],
			['2000', [['left','-700px'], ['opacity','0']]]
		    ]
		},
		{
		    id: 'cloud_five',
		    data: [
			['200', [['top[cubic]','125px'],['right[cubic]','400px'], ['transform','scale(2)']]],
			['1000', [['top','-125px'],['right','100px'], ['transform','scale(2)']]],
			['1200', [['right','100px'], ['opacity','1']]],
			['2000', [['right','-700px'], ['opacity','0']]]
		    ]
		},
		{
		    id: 'cloud_six',
		    data: [
			['200', [['top[cubic]','150px'],['right[cubic]','200px'], ['transform','scale(1.6)']]],
			['1000', [['top','-125px'],['right','-250px'], ['transform','scale(1.5)']]],
			['1200', [['right','-250px'], ['opacity','1']]],
			['2000', [['right','-700px'], ['opacity','0']]]
		    ]
		},
		{
		    id: 'cloud_seven',
		    data: [
			['200', [['top[cubic]','225px'],['right[cubic]','100px'], ['transform','scale(1.5)']]],
			['1000', [['top','150px'],['right','-250px'], ['transform','scale(1.3)']]],
			['1200', [['right','-250px'], ['opacity','1']]],
			['2000', [['right','-700px'], ['opacity','0']]]
		    ]
		},
		{
		    id: 'cloud_eight',
		    data: [
			['200', [['top[cubic]','305px'],['right[cubic]','300px'], ['transform','scale(2)']]],
			['1000', [['top','350px'],['right','-350px'], ['transform','scale(1.5)']]],
			['1200', [['right','-350px'], ['opacity','1']]],
			['2000', [['right','-700px'], ['opacity','0']]]
		    ]
		},
		{
		    id: 'site_logo',
		    data: [
			['200',[['top[quadratic]','200px']]],
			['600',[['top[quadratic]','-250px']]]
		    ]
		}
	    ]
	},
	{
	    id: 'city_jobs',
	    data: [
		['1399', [['display','none']]],
		['1400', [['display','block'], ['top','100%']]],
		['1800', [['display','block'], ['top','0%']]],
		['3000', [['top','0%']]],
		['3300', [['top','-50%']]],
	    ],
	    nodes: [
		{
		    id: 'cloud_nine',
		    data: [
			['1800', [['opacity','0'], ['z-index','2']]],
			['1900', [['top[sqrt]','1700px'],['opacity','1']]],
			['2600', [['top','-150px']]],
			['3000', [['top','-225px']]]
		    ]
		},
		{
		    id: 'cloud_ten',
		    data: [
			['800', [['opacity','0']]],
			['900', [['top[sqrt]','1700px'],['opacity','1']]],
			['2500', [['top','-150px']]],
			['3000', [['top','-225px']]]
		    ]
		},
		{
		    id: 'building_jobs',
		    data: [
			['1199', [['display','none']]],
			['1200', [['display','block'], ['top','100%']]],
			['2600', [['display','block'], ['top','0%']]],
			['3000', [['top','-50%']]]
		    ]
		},
		{
		    id: 'building_careers',
		    data: [
			['1699', [['display','none']]],
			['1700', [['display','block'], ['top','100%']]],
			['2600', [['display','block'], ['top','0%']]],
			['3000', [['top','-50%']]]
		    ]
		}
	    ]
	},
	{
	    id: 'bad_office',
	    data: [
		['2599', [['display','none']]],
		['2600', [['display','block'], ['top','100%']]],
		['3000', [['display','block'], ['top','50%']]],
		['3300', [['display','block'], ['top','0%']]],
		['3301', [['display','block'], ['top','0px']]],
		['3600', [['display','block'], ['top','-300px']]],
	    ],
	    nodes: [
		{
		    id: 'brown_carpet',
		    data: [
			['3100', [['top','100%']]],
			['3300', [['top','75%']]],
		    ]
		},
		{
		    id: 'daily_hell',
		    data: [
			['3300', [['top','0%']]],
			['3600', [['top','-15%']]],
		    ]
		},
		{
		    id: 'office_clock',
		    data: [
			['4500', [['top[sqrt]','10%']]],
			['4800', [['top','50%']]],
		    ],
		    nodes: [
			{
			    id: 'secondhands',
			    data: [
				['4800',[['transform','rotate(0deg)']]],
				['4900',[['transform','rotate(120deg)']]],
				['5000',[['transform','rotate(240deg)']]],
				['5100',[['transform','rotate(360deg)']]],
				['5200',[['transform','rotate(480deg)']]],
				['5300',[['transform','rotate(600deg)']]],
				['5400',[['transform','rotate(720deg)']]],
				['5500',[['transform','rotate(840deg)']]],
				['5600',[['transform','rotate(960deg)']]],
				['5700',[['transform','rotate(1080deg)']]],
				['5800',[['transform','rotate(1200deg)']]],
				['5900',[['transform','rotate(1320deg)']]],
				['6000',[['transform','rotate(1440deg)']]],
				/*
				['6100',[['transform','rotate(1560deg)']]],
				['6200',[['transform','rotate(1680deg)']]],
				['6300',[['transform','rotate(1800deg)']]],
				['6400',[['transform','rotate(1920deg)']]]
				*/
			    ]
			},
			{
			    id: 'minutehands',
			    data: [
				['4800',[['transform','rotate(0deg)']]],
				['4900',[['transform','rotate(90deg)']]],
				['5000',[['transform','rotate(180deg)']]],
				['5100',[['transform','rotate(270deg)']]],
				['5200',[['transform','rotate(360deg)']]],
				['5300',[['transform','rotate(450deg)']]],
				['5400',[['transform','rotate(540deg)']]],
				['5500',[['transform','rotate(630deg)']]],
				['5600',[['transform','rotate(720deg)']]],
				['5700',[['transform','rotate(810deg)']]],
				['5800',[['transform','rotate(900deg)']]],
				['5900',[['transform','rotate(990deg)']]],
				['6000',[['transform','rotate(1080deg)']]],
				/*
				['6100',[['transform','rotate(1170deg)']]],
				['6200',[['transform','rotate(1260deg)']]],
				['6300',[['transform','rotate(1350deg)']]],
				['6400',[['transform','rotate(1440deg)']]]
				*/
			    ]
			},
			{
			    id: 'hourhands',
			    data: [
				['4800',[['transform','rotate(0deg)']]],
				['4900',[['transform','rotate(60deg)']]],
				['5000',[['transform','rotate(120deg)']]],
				['5100',[['transform','rotate(180deg)']]],
				['5200',[['transform','rotate(240deg)']]],
				['5300',[['transform','rotate(300deg)']]],
				['5400',[['transform','rotate(360deg)']]],
				['5500',[['transform','rotate(420deg)']]],
				['5600',[['transform','rotate(480deg)']]],
				['5700',[['transform','rotate(540deg)']]],
				['5800',[['transform','rotate(600deg)']]],
				['5900',[['transform','rotate(660deg)']]],
				['6000',[['transform','rotate(720deg)']]],
				/*
				['6100',[['transform','rotate(780deg)']]],
				['6200',[['transform','rotate(840deg)']]],
				['6300',[['transform','rotate(900deg)']]],
				['6400',[['transform','rotate(960deg)']]]
				*/
			    ]
			}
		    ]
		},
		{
		    id: 'bad_boss_atdesk',
		    data: [
			['4500', [['left[sqrt]','-5000px']]],
			['4800', [['left','0px']]],
		    ],
		},
		{
		    id: 'desk',
		    data: [
			['4500', [['top','70%'], ['left[sqrt]','150%']]],
			['4800', [['top','70%'], ['left[sqrt]','0%']]],
		    ]
		},
		{
		    id: 'jobsworthy_main',
		    data: [
			['3600', [['top[sqrt]','150%']]],
			['3900', [['top','68%']]],
		    ]
		},
		{
		    id: 'jobsworthy_label',
		    data: [
			['3900', [['transform','scale(0)']]],
			['4000', [['transform','scale(1.2)']]],
			['4100', [['transform','scale(1)']]],
		    ]
		},
		{
		    id: 'hates_job',
		    data: [
			['4800', [['transform','scale(0)']]],
			['4900', [['transform','scale(1.2)']]],
			['5000', [['transform','scale(1)']]],
		    ]
		}
	    ]
	}
    ]
}
exports.dataProps = dataProps
