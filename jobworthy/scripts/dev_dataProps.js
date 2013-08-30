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
			['anchor-target', [['#intro']]],
			['top', [['top[cubic]','100px'],['left[cubic]','200px']]],
			['-1000-top', [['top','-150px'],['left','-350px']]],
			['-1200-top', [['left','-350px'], ['opacity','1']]],
			['-2000-top', [['left','-700px'], ['opacity','0']]]
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
    ]
}
exports.dataProps = dataProps
