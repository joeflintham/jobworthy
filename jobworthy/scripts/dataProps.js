var dataProps = {
    scenes: [
	{
	    id: 'intro',
	    data: [
		['0', [['display','block'], ['top[cubic]','0%']]],
		['1500', [['top[cubic]','0%']]],
		['4000', [['display','none'], ['top[cubic]','-100%']]]
	    ],
	    nodes: [
		{
		    id: 'cloud_one',
		    data: [
			['anchor-target', [['#intro']]],
			['top', [['top[cubic]','20vh'],['left[cubic]','15vw'],['transform[sqrt]','scale(1.3)']]],
			['-500-top', [['transform','scale(1.5)']]],
			['-1000-top', [['top','-15vh'],['left','-35vw'],['transform','scale(1.2)']]],
			['-1200-top', [['left','-35vw'], ['opacity','1']]],
			['-2000-top', [['left','-70vw'], ['opacity','0']]]
		    ]
		},
		{
		    id: 'cloud_two',
		    data: [
			['anchor-target', [['#intro']]],
			['top', [['top[cubic]','30vh'],['left[cubic]','15vw'], ['transform[quadratic]','scale(1.3)']]],
			['-500-top', [['transform','scale(1.5)']]],
			['-1000-top', [['top','7vh'],['left','-35vw'], ['transform','scale(1.1)']]],
			['-1200-top', [['left','-35vw'], ['opacity','1']]],
			['-2000-top', [['left','-70vw'], ['opacity','0']]]
		    ]
		},
		{
		    id: 'cloud_three',
		    data: [
			['anchor-target', [['#intro']]],
			['top', [['top[cubic]','15vh'],['left[cubic]','0vw'], ['transform[cubic]','scale(1.2)']]],
			['-500-top', [['transform','scale(1.4)']]],
			['-1000-top', [['top','36vh'],['left','-35vw'], ['transform','scale(1.1)']]],
			['-1200-top', [['left','-35vw'], ['opacity','1']]],
			['-2000-top', [['left','-70vw'], ['opacity','0']]]
		    ]
		},
		{
		    id: 'cloud_four',
		    data: [
			['anchor-target', [['#intro']]],
			['top', [['top[cubic]','15vh'],['left[cubic]','20vw'], ['transform[sqrt]','scale(1.2)']]],
			['-500-top', [['transform','scale(1.4)']]],
			['-1000-top', [['top','-25vh'],['left','1vw'], ['transform','scale(1)']]],
			['-1200-top', [['left','1vw'], ['opacity','1']]],
			['-2000-top', [['left','-70vw'], ['opacity','0']]]
		    ]
		},
		{
		    id: 'cloud_five',
		    data: [
			['anchor-target', [['#intro']]],
			['top', [['top[cubic]','20vh'],['right[cubic]','12vw'], ['transform','scale(1)']]],
			['-500-top', [['transform','scale(1.2)']]],
			['-1000-top', [['top','-25vh'],['right','1vw'], ['transform','scale(0.9)']]],
			['-1200-top', [['right','1vw'], ['opacity','1']]],
			['-2000-top', [['right','-70vw'], ['opacity','0']]]
		    ]
		},
		{
		    id: 'cloud_six',
		    data: [
			['anchor-target', [['#intro']]],
			['top', [['top[cubic]','25vh'],['right[cubic]','10vw'], ['transform','scale(1)']]],
			['-500-top', [['transform','scale(1.5)']]],
			['-1000-top', [['top','-20vh'],['right','-20vw'], ['transform','scale(1.2)']]],
			['-1200-top', [['right','-20vw'], ['opacity','1']]],
			['-2000-top', [['right','-70vw'], ['opacity','0']]]
		    ]
		},
		{
		    id: 'cloud_seven',
		    data: [
			['anchor-target', [['#intro']]],
			['top', [['top[cubic]','25vh'],['right[cubic]','1vw'], ['transform','scale(1)']]],
			['-500-top', [['transform','scale(1.1)']]],
			['-1000-top', [['top','10vh'],['right','-35vw'], ['transform','scale(0.9)']]],
			['-1200-top', [['right','-35vw'], ['opacity','1']]],
			['-2000-top', [['right','-70vw'], ['opacity','0']]]
		    ]
		},
		{
		    id: 'cloud_eight',
		    data: [
			['anchor-target', [['#intro']]],
			['top', [['top[cubic]','30vh'],['right[cubic]','25vw'], ['transform','scale(1.1)']]],
			['-500-top', [['transform','scale(1.3)']]],
			['-1000-top', [['top','35vh'],['right','-35vw'], ['transform','scale(1.1)']]],
			['-1200-top', [['right','-35vw'], ['opacity','1']]],
			['-2000-top', [['right','-70vw'], ['opacity','0']]]
		    ]
		},
		{
		    id: 'main_title',
		    data: [
			['top',[['opacity','0']]],
			['-500-top',[['opacity','0']]],
			['-1000-top',[['opacity','1']]]
		    ]
		},
		{
		    id: 'site_logo',
		    data: [
			['anchor-target', [['#intro']]],
			['top',[['top[quadratic]','25%']]],
			['-600-top',[['top[quadratic]','-50%']]]
		    ]
		}
	    ]
	},
	{
	    id: 'city_jobs',
	    data: [
		['2999', [['display','none']]],
		['3000', [['display','block'], ['top','100%']]],
		['4000', [['display','block'], ['top','0%']]],
		['6000', [['top','0%']]],
		['8000', [['display','none'], ['top','-100%']]],
	    ],
	    nodes: [
		{
		    id: 'cloud_nine',
		    data: [
			['anchor-target', [['#_city_jobs']]],
			['500-top', [['opacity','0']]],
			['-400-top', [['top[sqrt]','1500px'],['opacity','1']]],
			['-800-top', [['top','-150px']]],
			['-1500-top', [['top','-225px']]],
			['-1800-top', [['top','-225px']]],
			['-2500-top', [['top','-500px']]]
		    ]
		},
		{
		    id: 'cloud_ten',
		    data: [
			['anchor-target', [['#_city_jobs']]],
			['1200-top', [['opacity','0']]],
			['100-top', [['top[sqrt]','1000px'],['opacity','1']]],
			['-800-top', [['top','-200px']]],
			['-1500-top', [['top','-225px']]],
			['-1800-top', [['top','-225px']]],
			['-2500-top', [['top','-500px']]]
		    ]
		},
		{
		    id: 'building_jobs',
		    data: [
			['anchor-target', [['#_city_jobs']]],
			['800-top', [['display','none']]],
			['700-top', [['display','block'], ['bottom','-200%']]],
			['-800-top', [['display','block'], ['bottom','0%']]],
			['-1500-top', [['bottom','50%']]],
			['-5000-top', [['bottom','100%']]]
		    ]
		},
		{
		    id: 'building_careers',
		    data: [
			['anchor-target', [['#_city_jobs']]],
			['800-top', [['display','none']]],
			['700-top', [['display','block'], ['bottom','-250%']]],
			['-1000-top', [['display','block'], ['bottom','0%']]],
			['-1500-top', [['bottom','50%']]],
			['-5000-top', [['bottom','100%']]]
		    ]
		},
		{
		    id: 'grey_back',
		    data: [
			['anchor-target', [['#_city_jobs']]],
			['1000-top', [['display','none']]],
			['900-top', [['display','block'], ['top','100%']]],
			['-1500-top', [['top','50%']]],
			['-2000-top', [['top','25%']]]
		    ]
		},
		{
		    id: 'daily_hell',
		    data: [
			['anchor-target', [['#_city_jobs']]],
			['300-top', [['display','none']]],
			['200-top', [['display','block'],['top','250%']]],
			['-1500-top', [['top','50%']]],
			['-2000-top', [['top','25%']]]
		    ]
		}
	    ]
	},
	{
	    id: 'bad_office',
	    data: [
		['6999', [['display','none']]],
		['7000', [['display','block'], ['top','100%']]],
		['8000', [['top','0%']]],
		['18000', [['top','0%']]],
		['19000', [['display','none'], ['top','-100%']]],
	    ],
	    nodes: [
		{
		    id: 'brown_carpet',
		    data: [
			['anchor-target', [['#_bad_office']]],
			['-3500-top', [['top','50%']]],
			['-4000-top', [['top','0%']]],
		    ]
		},
		{
		    id: 'jobsworthy_label',
		    data: [
			['anchor-target', [['#_bad_office']]],
			['-1200-top', [['transform','scale(0)'], ['display','block']]],
			['-1300-top', [['transform','scale(1.2)']]],
			['-1400-top', [['transform','scale(1)']]],
			['-2000-top', [['transform','scale(1)']]],
			['-2100-top', [['transform','scale(0)']]],
			['-2101-top', [['display','none']]],
		    ]
		},
		{
		    id: 'hates_job',
		    data: [
			['anchor-target', [['#_bad_office']]],
			['-2500-top', [['transform','scale(0)'], ['display','block']]],
			['-2600-top', [['transform','scale(1.2)']]],
			['-2700-top', [['transform','scale(1)']]],
			['-3300-top', [['transform','scale(1)']]],
			['-3400-top', [['transform','scale(0)']]],
			['-3401-top', [['display','none']]],
		    ]
		},
		{
		    id: 'office_clock',
		    data: [
			['anchor-target', [['#_bad_office']]],
			['-2199-top', [['display','none']]],
			['-2200-top', [['top[sqrt]','-10%'],['display','block']]],
			['-2400-top', [['top','20%']]],
			['-3399-top', [['top','20%']]],
			['-3500-top', [['top','-100%']]]
		    ],
		    nodes: [
			{
			    id: 'secondhands',
			    data: [
				['anchor-target', [['#_bad_office']]],
				['-2400-top',[['transform','rotate(0deg)']]],
				['-2500-top',[['transform','rotate(120deg)']]],
				['-2600-top',[['transform','rotate(240deg)']]],
				['-2700-top',[['transform','rotate(360deg)']]],
				['-2800-top',[['transform','rotate(480deg)']]],
				['-2900-top',[['transform','rotate(600deg)']]],
				['-3000-top',[['transform','rotate(720deg)']]],
				['-3100-top',[['transform','rotate(840deg)']]],
				['-3200-top',[['transform','rotate(960deg)']]],
				['-3300-top',[['transform','rotate(1080deg)']]],
				['-3400-top',[['transform','rotate(1200deg)']]],
				['-3500-top',[['transform','rotate(1320deg)']]],
				['-3600-top',[['transform','rotate(1440deg)']]],
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
				['anchor-target', [['#_bad_office']]],
				['-2400-top',[['transform','rotate(0deg)']]],
				['-2500-top',[['transform','rotate(90deg)']]],
				['-2600-top',[['transform','rotate(180deg)']]],
				['-2700-top',[['transform','rotate(270deg)']]],
				['-2800-top',[['transform','rotate(360deg)']]],
				['-2900-top',[['transform','rotate(450deg)']]],
				['-3000-top',[['transform','rotate(540deg)']]],
				['-3100-top',[['transform','rotate(630deg)']]],
				['-3200-top',[['transform','rotate(720deg)']]],
				['-3300-top',[['transform','rotate(810deg)']]],
				['-3400-top',[['transform','rotate(900deg)']]],
				['-3500-top',[['transform','rotate(990deg)']]],
				['-3600-top',[['transform','rotate(1080deg)']]],
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
				['anchor-target', [['#_bad_office']]],
				['-2400-top',[['transform','rotate(0deg)']]],
				['-2500-top',[['transform','rotate(60deg)']]],
				['-2600-top',[['transform','rotate(120deg)']]],
				['-2700-top',[['transform','rotate(180deg)']]],
				['-2800-top',[['transform','rotate(240deg)']]],
				['-2900-top',[['transform','rotate(300deg)']]],
				['-3000-top',[['transform','rotate(360deg)']]],
				['-3100-top',[['transform','rotate(420deg)']]],
				['-3200-top',[['transform','rotate(480deg)']]],
				['-3300-top',[['transform','rotate(540deg)']]],
				['-3400-top',[['transform','rotate(600deg)']]],
				['-3500-top',[['transform','rotate(660deg)']]],
				['-3600-top',[['transform','rotate(720deg)']]],
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
			['anchor-target', [['#_bad_office']]],
			['-2400-top', [['left[sqrt]','-5000px']]],
			['-2700-top', [['left','0px']]],
			['-3500-top', [['left','0px']]],
			['-3800-top', [['left','5000px']]],
		    ],
		},
		{
		    id: 'desk',
		    data: [
			['anchor-target', [['#_bad_office']]],
			['-2400-top', [['top','42%'], ['left[sqrt]','150%']]],
			['-2700-top', [['top','42%'], ['left[sqrt]','0%']]],
			['-3500-top', [['top','42%'], ['left[sqrt]','0%']]],
			['-3800-top', [['top','42%'], ['left[sqrt]','-500%']]],
		    ]
		},
		{
		    id: 'jobsworthy_main',
		    data: [
			['anchor-target', [['#_bad_office']]],
			['-3600-top', [['margin-left','0%'],['transform','!scaleX(1)'],['display','block']]],
			['-4000-top', [['margin-left','-25%'],['transform','!scaleX(-1)']]],
			['-9000-top', [['transform','!scale(1)']]],
			['-9100-top', [['transform','!scale(0.5)'],['display','none']]],
		    ]
		},
		{
		    id: 'thoughts',
		    data: [
			['anchor-target', [['#_bad_office']]],
			['-3799-top', [['display','none']]],
			['-3800-top', [['display','block']]],
		    ],
		    nodes: [
			{
			    id: 'thought_pop',
			    data: [
				['anchor-target', [['#_bad_office']]],
				['-3801-top', [['transform','scale(0)']]],
				['-3900-top', [['transform','scale(1.1)']]],
				['-3950-top', [['transform','scale(1)']]],
				['-8500-top', [['transform','scale(1)']]],
				['-8550-top', [['transform','scale(1.1)']]],
				['-8650-top', [['transform','scale(0)']]],
			    ]
			},
			{
			    id: 'thought_grow',
			    data: [
				['anchor-target', [['#_bad_office']]],
				['-4000-top', [['transform','scale(0)']]],
				['-4100-top', [['transform','scale(1.1)']]],
				['-4150-top', [['transform','scale(1)']]],
				['-8400-top', [['transform','scale(1)']]],
				['-8450-top', [['transform','scale(1.1)']]],
				['-8550-top', [['transform','scale(0)']]],
			    ]
			},
			{
			    id: 'thought_bubble',
			    data: [
				['anchor-target', [['#_bad_office']]],
				['-4200-top', [['transform','scale(0)'],['background-image','url(assets/images/thought_bubble_scaling.png)'],['background-repeat','no-repeat'],['background-position','center center']]],
				['-4300-top', [['transform','scale(1.1)']]],
				['-4350-top', [['transform','scale(1)']]],
				['-4351-top', [['background-image','none'],['background-repeat','no-repeat'],['background-position','center center']]],
				['-8301-top', [['background-image','url(assets/images/thought_bubble_scaling.png)'],['background-repeat','no-repeat'],['background-position','center center']]],
				['-8350-top', [['transform','scale(1.1)']]],
				['-8450-top', [['transform','scale(0)']]],
			    ],
			    nodes: [
				{
				    id: 'thought_bubble_img',
				    data: [
					['anchor-target', [['#_bad_office']]],
					['-4200-top', [['display','none']]],
					['-4351-top', [['display','block']]],
					['-8301-top', [['display','none']]],
				    ]
				},
				{
				    id: 'thought_window',
				    data: [
					['anchor-target', [['#_bad_office']]],
					['-4199-top', [['display','none']]],
					['-4351-top', [['display','block']]],
					['-8301-top', [['display','none']]],
				    ]
				},
				{
				    id: 'hates_boss',
				    data: [
					['anchor-target', [['#_bad_office']]],
					['-4400-top', [['transform','scale(0)'], ['display','block']]],
					['-4500-top', [['transform','scale(1.2)']]],
					['-4600-top', [['transform','scale(1)']]],
					['-5200-top', [['transform','scale(1)']]],
					['-5300-top', [['transform','scale(0)']]],
					['-5301-top', [['display','none']]],
				    ]
				},
				{
				    id: 'hates_bully_boss',
				    data: [
					['anchor-target', [['#_bad_office']]],
					['-4400-top', [['top','100%'],['display','block']]],
					['-4500-top', [['top','30%']]],
					['-5200-top', [['top','30%']]],
					['-5301-top', [['top','-100%'],['display','none']]],
				    ],
				    nodes: [
					{
					    id: 'hates_bully_boss>.boss_head',
					    data: [
						['anchor-target', [['#_bad_office']]],
						['-4550-top', [['transform','rotate(0deg)']]],
						['-4650-top', [['transform','rotate(10deg)']]],
						['-4750-top', [['transform','rotate(0deg)']]],
						['-4850-top', [['transform','rotate(-10deg)']]],
						['-4950-top', [['transform','rotate(0deg)']]],
						['-5050-top', [['transform','rotate(10deg)']]],
						['-5150-top', [['transform','rotate(0deg)']]],
					    ]
					}
				    ]
				},
				{
				    id: 'hates_equipment',
				    data: [
					['anchor-target', [['#_bad_office']]],
					['-5400-top', [['transform','scale(0)'], ['display','block']]],
					['-5500-top', [['transform','scale(1.2)']]],
					['-5600-top', [['transform','scale(1)']]],
					['-6200-top', [['transform','scale(1)']]],
					['-6300-top', [['transform','scale(0)']]],
					['-6301-top', [['display','none']]],
				    ]
				},
				{
				    id: 'hates_computer',
				    data: [
					['anchor-target', [['#_bad_office']]],
					['-5400-top', [['top','100%'],['display','block']]],
					['-5500-top', [['top','35%']]],
					['-5600-top', [['background-position','!-0px 0']]],
					['-5800-top', [['background-position','!-151px 0']]],
					['-6000-top', [['background-position','!-302px 0']]],
					['-6200-top', [['top','35%']]],
					['-6300-top', [['top','-100%'],['display','none']]],
				    ]
				},
				{
				    id: 'hates_hours',
				    data: [
					['anchor-target', [['#_bad_office']]],
					['-6400-top', [['transform','scale(0)'], ['display','block']]],
					['-6500-top', [['transform','scale(1.2)']]],
					['-6600-top', [['transform','scale(1)']]],
					['-7200-top', [['transform','scale(1)']]],
					['-7300-top', [['transform','scale(0)']]],
					['-7301-top', [['display','none']]],
				    ]
				},
				{
				    id: 'hates_clock',
				    data: [
					['anchor-target', [['#_bad_office']]],
					['-6400-top', [['top','100%'],['display','block']]],
					['-6500-top', [['top[sqrt]','35%']]],
					['-7200-top', [['top','35%']]],
					['-7300-top', [['top','-100%'],['display','none']]]
				    ],
				    nodes: [
					{
					    id: 'hates_secondhands',
					    data: [
						['anchor-target', [['#_bad_office']]],
						['-6500-top',[['transform','rotate(0deg)']]],
						['-6550-top',[['transform','rotate(120deg)']]],
						['-6600-top',[['transform','rotate(240deg)']]],
						['-6650-top',[['transform','rotate(360deg)']]],
						['-6700-top',[['transform','rotate(480deg)']]],
						['-6750-top',[['transform','rotate(600deg)']]],
						['-6800-top',[['transform','rotate(720deg)']]],
						['-6850-top',[['transform','rotate(840deg)']]],
						['-6900-top',[['transform','rotate(960deg)']]],
						['-6950-top',[['transform','rotate(1080deg)']]],
						['-7000-top',[['transform','rotate(1200deg)']]],
						['-7050-top',[['transform','rotate(1320deg)']]],
						['-7100-top',[['transform','rotate(1440deg)']]],
						/*
						  ['6100',[['transform','rotate(1560deg)']]],
						  ['6200',[['transform','rotate(1680deg)']]],
						  ['6300',[['transform','rotate(1800deg)']]],
						  ['6400',[['transform','rotate(1920deg)']]]
						*/
					    ]
					},
					{
					    id: 'hates_minutehands',
					    data: [
						['anchor-target', [['#_bad_office']]],
						['-6500-top',[['transform','rotate(0deg)']]],
						['-6550-top',[['transform','rotate(90deg)']]],
						['-6600-top',[['transform','rotate(180deg)']]],
						['-6650-top',[['transform','rotate(270deg)']]],
						['-6700-top',[['transform','rotate(360deg)']]],
						['-6750-top',[['transform','rotate(450deg)']]],
						['-6800-top',[['transform','rotate(540deg)']]],
						['-6850-top',[['transform','rotate(630deg)']]],
						['-6900-top',[['transform','rotate(720deg)']]],
						['-6950-top',[['transform','rotate(810deg)']]],
						['-7000-top',[['transform','rotate(900deg)']]],
						['-7050-top',[['transform','rotate(990deg)']]],
						['-7100-top',[['transform','rotate(1080deg)']]],
						/*
						  ['6100',[['transform','rotate(1170deg)']]],
						  ['6200',[['transform','rotate(1260deg)']]],
						  ['6300',[['transform','rotate(1350deg)']]],
						  ['6400',[['transform','rotate(1440deg)']]]
						*/
					    ]
					},
					{
					    id: 'hates_hourhands',
					    data: [
						['anchor-target', [['#_bad_office']]],
						['-6500-top',[['transform','rotate(0deg)']]],
						['-6550-top',[['transform','rotate(60deg)']]],
						['-6600-top',[['transform','rotate(120deg)']]],
						['-6650-top',[['transform','rotate(180deg)']]],
						['-6700-top',[['transform','rotate(240deg)']]],
						['-6750-top',[['transform','rotate(300deg)']]],
						['-6800-top',[['transform','rotate(360deg)']]],
						['-6850-top',[['transform','rotate(420deg)']]],
						['-6900-top',[['transform','rotate(480deg)']]],
						['-6950-top',[['transform','rotate(540deg)']]],
						['-7000-top',[['transform','rotate(600deg)']]],
						['-7050-top',[['transform','rotate(660deg)']]],
						['-7100-top',[['transform','rotate(720deg)']]],
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
				    id: 'hates_workload',
				    data: [
					['anchor-target', [['#_bad_office']]],
					['-7400-top', [['transform','scale(0)'], ['display','block']]],
					['-7500-top', [['transform','scale(1.2)']]],
					['-7600-top', [['transform','scale(1)']]],
					['-8200-top', [['transform','scale(1)']]],
					['-8300-top', [['transform','scale(0)']]],
					['-8301-top', [['display','none']]],
				    ]
				},
				{
				    id: 'hates_tray',
				    data: [
					['anchor-target', [['#_bad_office']]],
					['-7400-top', [['top','100%'],['display','block']]],
					['-7500-top', [['top','40%']]],
					['-7800-top', [['background-position','!-0px 0']]],
					['-7850-top', [['background-position','!-162px 0']]],
					['-7900-top', [['background-position','!-324px 0']]],
					['-7900-top', [['background-position','!-324px 0']]],
					['-7950-top', [['background-position','!-486px 0']]],
					['-8000-top', [['background-position','!-648px 0']]],
					['-8050-top', [['background-position','!-810px 0']]],
					['-8100-top', [['background-position','!-972px 0']]],
					['-8150-top', [['background-position','!-1134px 0']]],
					['-8200-top', [['top','40%']]],
					['-8301-top', [['top','-100%'],['display','none']]],
				    ]
				},
			    ]
			},
			{
			    id: 'leaves_job',
			    data: [
				['anchor-target', [['#_bad_office']]],
				['-9400-top', [['transform','scale(0)'], ['display','block']]],
				['-9500-top', [['transform','scale(1.2)']]],
				['-9600-top', [['transform','scale(1)']]],
				['-10200-top', [['transform','scale(1)']]],
				['-10300-top', [['transform','scale(0)']]],
				['-10301-top', [['display','none']]],
			    ]
			},
			{
			    id: 'bad_office_exit',
			    data: [
				['anchor-target', [['#_bad_office']]],
				['-8400-top', [['display','none']]],
				['-8401-top', [['display','block'],['top','100%']]],
				['-9200-top', [['top','0%']]],
			    ],
			    nodes: [
				{
				    id: 'door',
				    data: [
					['anchor-target', [['#_bad_office']]],
					['-9599-top', [['transform','scaleX(-1)'], ['margin-left','0px']]],
					['-9600-top', [['transform','scaleX(1)'],['margin-left','-438px']]],
				    ]
				},
				{
				    id: 'officewindow',
				    data: [
					['anchor-target', [['#_bad_office']]],
					['-9800-top', [['background-position','!-0px 0']]],
					['-9900-top', [['background-position','!-280px 0']]],
					['-10000-top', [['background-position','!-560px 0']]],
					['-10100-top', [['background-position','!-840px 0']]],
				    ]
				}
			    ]
			},
			{
			    id: 'grass',
			    data: [
				['anchor-target', [['#_bad_office']]],
				['-8600-top', [['display','none']]],
				['-8801-top', [['display','block']]],
			    ]
			}
		    ]
		}
	    ]
	},
	{
	    id: 'jobshire',
	    data: [
		['14999', [['display','none']]],
		['15000', [['display','block'], ['top','100%']]],
		['16000', [['top','0%']]],
		['29200', [['top','0%']]],
		['32000', [['display','none'], ['top','-100%']]],
	    ],
	    nodes: [
		{
		    id: 'jobshire_grass',
		    data: [
			['anchor-target', [['#_bad_office']]],
			['-10000-top', [['display','none']]],
			['-10001-top', [['display','block']]],
		    ]
		},
		{
		    id: 'jobsworthy_jobseeker',
		    data: [
			['anchor-target', [['#_bad_office']]],
			['-9599-top', [['display','none']]],
			['-9600-top', [['display','block']]],
			['-11000-top', [['bottom','25%']]],
			['-12000-top', [['bottom','40%']]],
			['-17500-top', [['margin-left','0%'],['transform','!scaleX(1)'],['display','block']]],
			['-19000-top', [['margin-left','50%'],['transform','!scaleX(-1)']]],
			['-21500-top', [['margin-left','50%'],['transform','!scaleX(1)'],['display','block']]],
			['-21600-top', [['margin-left','0%']]],
		    ]
		},
		{
		    id: 'grass_clump',
		    data: [
			['anchor-target', [['#_jobshire']]],
			['-1000-top', [['top[sqrt]','100%']]],
			['-2500-top', [['top','30%']]],
			['-3000-top', [['top','30%']]],
			['-4700-top', [['top','-50%']]],
		    ],
		},
		{
		    id: 'jobshire_sign',
		    data: [
			['anchor-target', [['#_jobshire']]],
			['-1000-top', [['top[sqrt]','150%']]],
			['-2500-top', [['top','40%']]],
			['-3000-top', [['top','40%']]],
			['-4500-top', [['top','-100%']]],
		    ],
		    nodes: [
			{
			    id: 'birdie',
			    data: [
				['anchor-target', [['#_jobshire']]],
				['-1600-top',[['background-position','!-95px 0']]],
				['-1650-top',[['background-position','!-0px 0']]],
				['-1700-top',[['background-position','!-95px 0']]],
				['-2550-top',[['background-position','!-0px 0']]],
				['-2600-top',[['background-position','!-95px 0']]],
				['-3050-top',[['background-position','!-0px 0']]],
				['-3100-top',[['background-position','!-95px 0']]],
			    ]
			}
		    ]
		},
		{
		    id: 'looks_around',
		    data: [
			['anchor-target', [['#_jobshire']]],
			['-2499-top', [['display','none']]],
			['-3500-top', [['transform','scale(0)'], ['display','block']]],
			['-3600-top', [['transform','scale(1.2)']]],
			['-3650-top', [['transform','scale(1)']]],
			['-4800-top', [['transform','scale(1)']]],
			['-4900-top', [['transform','scale(0)']]],
			['-4901-top', [['display','none']]],
		    ]
		},
		{
		    id: 'shop_one',
		    data: [
			['anchor-target', [['#_jobshire']]],
			['-4000-top', [['right[linear]','-40%'],['top[sqrt]','100%']]],
			['-6000-top', [['right','-20%'],['top','-100%']]],
		    ],
		},
		{
		    id: 'shop_two',
		    data: [
			['anchor-target', [['#_jobshire']]],
			['-5000-top', [['left[linear]','-40%'],['top[sqrt]','100%']]],
			['-7000-top', [['left','-20%'],['top','-100%']]],
		    ],
		},
		{
		    id: 'shop_three',
		    data: [
			['anchor-target', [['#_jobshire']]],
			['-6000-top', [['right[linear]','-40%'],['top[sqrt]','100%']]],
			['-8000-top', [['right','-20%'],['top','-100%']]],
		    ],
		},
		{
		    id: 'shop_four',
		    data: [
			['anchor-target', [['#_jobshire']]],
			['-7000-top', [['left[linear]','-40%'],['top[sqrt]','100%']]],
			['-9000-top', [['left','-20%'],['top','-100%']]],
		    ],
		},
	    ]
	},
	{
	    id: 'tree_stump',
	    data: [
		['24999', [['display','none']]],
		['25000', [['display','block'], ['top','100%']]],
		['26000', [['top','0%']]],
		['28500', [['top','0%']]],
		['29500', [['display','none'], ['top','-100%']]],
	    ],
	    nodes: [
/*		{
		    id: 'stump',
		    data: [
			['anchor-target', [['#_tree_stump']]],
			['-1000-top', [['bottom[sqrt]','-100%']]],
			['-3000-top', [['bottom','30%']]],
		    ],
		},
*/		{
		    id: 'tree_thought_pop',
		    data: [
			['anchor-target', [['#_tree_stump']]],
			['-1-top', [['transform','scale(0)']]],
			['-100-top', [['transform','scale(1.1)']]],
			['-150-top', [['transform','scale(1)']]],
			['-2000-top', [['transform','scale(1)']]],
			['-2250-top', [['transform','scale(1.1)']]],
			['-2350-top', [['transform','scale(0)']]],
		    ]
		},
		{
		    id: 'tree_thought_grow',
		    data: [
			['anchor-target', [['#_tree_stump']]],
			['-49-top', [['transform','scale(0)']]],
			['-150-top', [['transform','scale(1.1)']]],
			['-200-top', [['transform','scale(1)']]],
			['-2100-top', [['transform','scale(1)']]],
			['-2150-top', [['transform','scale(1.1)']]],
			['-2250-top', [['transform','scale(0)']]],
		    ]
		},
		{
		    id: 'tree_thought_bubble',
		    data: [
			['anchor-target', [['#_tree_stump']]],
			['-100-top', [['transform','scale(0)'],['background-image','url(assets/images/thought_bubble_scaling.png)'],['background-repeat','no-repeat'],['background-position','center center']]],
			['-200-top', [['transform','scale(1.1)']]],
			['-250-top', [['transform','scale(1)']]],
			['-251-top', [['background-image','none'],['background-repeat','no-repeat'],['background-position','center center']]],
			['-2201-top', [['background-image','url(assets/images/thought_bubble_scaling.png)'],['background-repeat','no-repeat'],['background-position','center center']]],
			['-2050-top', [['transform','scale(1.1)']]],
			['-2150-top', [['transform','scale(0)']]],
		    ],
		    nodes: [
			{
			    id: 'tree_thought_bubble_img',
			    data: [
				['anchor-target', [['#_tree_stump']]],
				['-100-top', [['display','none']]],
				['-251-top', [['display','block']]],
				['-2201-top', [['display','none']]],
			    ]
			},
			{
			    id: 'tree_thought_window',
			    data: [
				['anchor-target', [['#_tree_stump']]],
				['-99-top', [['display','none']]],
				['-251-top', [['display','block']]],
				['-201-top', [['display','none']]],
			    ]
			},
		    ]  
		}
	    ]
	},
	{
	    id: 'home',
	    data: [
		['24999', [['display','none']]],
		['29000', [['display','block'], ['top','100%']]],
		['30000', [['top','0%']]],
		['36000', [['top','0%']]],
		['38000', [['display','none'], ['top','-100%']]],
	    ],
	    nodes: [
		{
		    id: 'home_interior',
		    data: [
			['anchor-target', [['#_home']]],
			['-1-top', [['top[sqrt]','0%']]],
			['-1200-top', [['top','0%']]],
			['-3000-top', [['top','-100%']]],
		    ],
		    nodes: [
			{
			    id: 'home_bubble',
			    data: [
				['anchor-target', [['#_home']]],
				['-99-top', [['display','none']]],
				['-300-top', [['transform','scale(0)'], ['display','block']]],
				['-400-top', [['transform','scale(1.2)']]],
				['-450-top', [['transform','scale(1)']]],
				['-1050-top', [['transform','scale(1)']]],
				['-1100-top', [['transform','scale(0)']]],
				['-1101-top', [['display','none']]],
			    ]
			},
			{
			    id: 'home_door',
			    data: [
				['anchor-target', [['#_home']]],
				['-99-top', [['transform','!scaleX(-1)'], ['margin-left','!0px']]],
				['-300-top', [['transform','!scaleX(1)'],['margin-left','!-438px']]],
			    ]
			},
			{
			    id: 'cat',
			    data: [
				['anchor-target', [['#_home']]],
				['-500-top',[['background-position','!-139px 0']]],
				['-550-top',[['background-position','!-0px 0']]],
				['-600-top',[['background-position','!-139px 0']]],
				['-650-top',[['background-position','!-278px 0']]],
				['-700-top',[['background-position','!-139px 0']]],
				['-850-top',[['background-position','!-0px 0']]],
				['-900-top',[['background-position','!-139px 0']]],
			    ]
			},
		    ]
		},
		{
		    id: 'jobsworthy_cvbuilder',
		    data: [
			['anchor-target', [['#_home']]],
			['-99-top', [['display','none']]],
			['-300-top', [['display','block']]],
		    ]
		},
		{
		    id: 'cv_time',
		    data: [
			['anchor-target', [['#_home']]],
			['-1549-top', [['display','none']]],
			['-1550-top', [['transform','scale(0)'], ['display','block']]],
			['-1650-top', [['transform','scale(1.2)']]],
			['-1700-top', [['transform','scale(1)']]],
			['-2950-top', [['transform','scale(1)']]],
			['-3000-top', [['transform','scale(0)']]],
			['-3001-top', [['display','none']]],
		    ]
		},
		{
		    id: 'with_label',
		    data: [
			['anchor-target', [['#_home']]],
			['-2799-top', [['display','none']]],
			['-2800-top', [['transform','scale(0)'], ['display','block']]],
			['-2850-top', [['transform','scale(1.2)']]],
			['-2900-top', [['transform','scale(1)']]],
			['-3200-top', [['transform','scale(1)']]],
			['-3250-top', [['transform','scale(0)']]],
			['-3251-top', [['display','none']]],
		    ]
		},
		{
		    id: 'skills_label',
		    data: [
			['anchor-target', [['#_home']]],
			['-3299-top', [['display','none']]],
			['-3300-top', [['transform','scale(0)'], ['display','block']]],
			['-3350-top', [['transform','scale(1.2)']]],
			['-3400-top', [['transform','scale(1)']]],
			['-3700-top', [['transform','scale(1)']]],
			['-3750-top', [['transform','scale(0)']]],
			['-3751-top', [['display','none']]],
		    ]
		},
		{
		    id: 'education_label',
		    data: [
			['anchor-target', [['#_home']]],
			['-3799-top', [['display','none']]],
			['-3800-top', [['transform','scale(0)'], ['display','block']]],
			['-3850-top', [['transform','scale(1.2)']]],
			['-3900-top', [['transform','scale(1)']]],
			['-4200-top', [['transform','scale(1)']]],
			['-4250-top', [['transform','scale(0)']]],
			['-4251-top', [['display','none']]],
		    ]
		},
		{
		    id: 'experience_label',
		    data: [
			['anchor-target', [['#_home']]],
			['-4299-top', [['display','none']]],
			['-4300-top', [['transform','scale(0)'], ['display','block']]],
			['-4350-top', [['transform','scale(1.2)']]],
			['-4400-top', [['transform','scale(1)']]],
			['-4700-top', [['transform','scale(1)']]],
			['-4750-top', [['transform','scale(0)']]],
			['-4751-top', [['display','none']]],
		    ]
		},
		{
		    id: 'personality_label',
		    data: [
			['anchor-target', [['#_home']]],
			['-4799-top', [['display','none']]],
			['-4800-top', [['transform','scale(0)'], ['display','block']]],
			['-4850-top', [['transform','scale(1.2)']]],
			['-4900-top', [['transform','scale(1)']]],
			['-5200-top', [['transform','scale(1)']]],
			['-5250-top', [['transform','scale(0)']]],
			['-5251-top', [['display','none']]],
		    ]
		},
		{
		    id: 'cv_build_screen',
		    data: [
			['anchor-target', [['#_home']]],
			['-2900-top', [['top','100%']]],
			['-3000-top', [['top','0%']]],
			['-6000-top', [['top','0%']]],
		    ],
		    nodes: [
			{
			    id: 'jb_handyman',
			    data: [
				['anchor-target', [['#_home']]],
				['-3299-top', [['display','none']]],
				['-3300-top', [['top','150%'], ['display','block']]],
				['-3400-top', [['top','10%']]],
				['-3700-top', [['top','10%']]],
				['-3800-top', [['top','-150%']]],
				['-3801-top', [['display','none']]],				
			    ],
			    nodes: [
				{
				    id: 'spanner',
				    data: [
					['anchor-target', [['#_home']]],
					['-3400-top', [['transform','rotate(0deg)']]],
					['-3450-top', [['transform','rotate(60deg)']]],
					['-3500-top', [['transform','rotate(0deg)']]],
					['-3550-top', [['transform','rotate(60deg)']]],
					['-3600-top', [['transform','rotate(0deg)']]],
					['-3750-top', [['transform','rotate(60deg)']]],
				    ]
				},
				{
				    id: 'hammer',
				    data: [
					['anchor-target', [['#_home']]],
					['-3400-top', [['transform','rotate(0deg)']]],
					['-3450-top', [['transform','rotate(60deg)']]],
					['-3500-top', [['transform','rotate(0deg)']]],
					['-3550-top', [['transform','rotate(60deg)']]],
					['-3600-top', [['transform','rotate(0deg)']]],
					['-3750-top', [['transform','rotate(60deg)']]],
				    ]
				},
			    ]
			},
			{
			    id: 'jb_student',
			    data: [
				['anchor-target', [['#_home']]],
				['-3799-top', [['display','none']]],
				['-3800-top', [['top','150%'], ['display','block']]],
				['-3900-top', [['top','5%']]],
				['-4200-top', [['top','5%']]],
				['-4300-top', [['top','-150%']]],
				['-4301-top', [['display','none']]],			
			    ],
			    nodes: [
				{
				    id: 'scroll',
				    data: [
					['anchor-target', [['#_home']]],
					['-3800-top', [['transform','rotate(-20deg)']]],
					['-3840-top', [['transform','rotate(40deg)']]],
					['-3880-top', [['transform','rotate(-20deg)']]],
					['-3920-top', [['transform','rotate(40deg)']]],
					['-3960-top', [['transform','rotate(-20deg)']]],
					['-4000-top', [['transform','rotate(40deg)']]],
					['-4040-top', [['transform','rotate(-20deg)']]],
					['-4080-top', [['transform','rotate(40deg)']]],
					['-4120-top', [['transform','rotate(-20deg)']]],
					['-4160-top', [['transform','rotate(40deg)']]],
				    ]
				},
				{
				    id: 'star_1',
				    data: [
					['anchor-target', [['#_home']]],
					['-3800-top', [['transform','scale(0)']]],
					['-3840-top', [['transform','scale(1)']]],
					['-3880-top', [['transform','scale(0)']]],
					['-3920-top', [['transform','scale(1)']]],
					['-3960-top', [['transform','scale(0)']]],
					['-4000-top', [['transform','scale(1)']]],
					['-4040-top', [['transform','scale(0)']]],
					['-4080-top', [['transform','scale(1)']]],
					['-4120-top', [['transform','scale(0)']]],
					['-4160-top', [['transform','scale(1)']]],
				    ]
				},
				{
				    id: 'star_2',
				    data: [
					['anchor-target', [['#_home']]],
					['-3800-top', [['transform','scale(1)']]],
					['-3840-top', [['transform','scale(0.5)']]],
					['-3880-top', [['transform','scale(0)']]],
					['-3920-top', [['transform','scale(0.5)']]],
					['-3960-top', [['transform','scale(1)']]],
					['-4000-top', [['transform','scale(0.5)']]],
					['-4040-top', [['transform','scale(0)']]],
					['-4080-top', [['transform','scale(0.5)']]],
					['-4120-top', [['transform','scale(1)']]],
					['-4160-top', [['transform','scale(0.5)']]],
				    ]
				},
				{
				    id: 'star_3',
				    data: [
					['anchor-target', [['#_home']]],
					['-3800-top', [['transform','scale(0.25)']]],
					['-3840-top', [['transform','scale(0.1)']]],
					['-3880-top', [['transform','scale(0.25)']]],
					['-3900-top', [['transform','scale(0)']]],
					['-3920-top', [['transform','scale(0.25)']]],
					['-3960-top', [['transform','scale(1)']]],
					['-4000-top', [['transform','scale(0.25)']]],
					['-4020-top', [['transform','scale(0)']]],
					['-4040-top', [['transform','scale(0.25)']]],
					['-4080-top', [['transform','scale(1)']]],
					['-4120-top', [['transform','scale(0.25)']]],
					['-4140-top', [['transform','scale(0)']]],
					['-4160-top', [['transform','scale(0.25)']]],
				    ]
				},
				{
				    id: 'star_4',
				    data: [
					['anchor-target', [['#_home']]],
					['-3800-top', [['transform','scale(0)']]],
					['-3840-top', [['transform','scale(0.33)']]],
					['-3880-top', [['transform','scale(0.66)']]],
					['-3920-top', [['transform','scale(1)']]],
					['-3960-top', [['transform','scale(0.66)']]],
					['-4000-top', [['transform','scale(0.33)']]],
					['-4040-top', [['transform','scale(0)']]],
					['-4080-top', [['transform','scale(0.33)']]],
					['-4120-top', [['transform','scale(0.66)']]],
					['-4160-top', [['transform','scale(1)']]],
				    ]
				},
			    ]
			},
			{
			    id: 'jb_idea',
			    data: [
				['anchor-target', [['#_home']]],
				['-4299-top', [['display','none']]],
				['-4300-top', [['top','150%'], ['display','block']]],
				['-4400-top', [['top','5%']]],
				['-4450-top', [['background-position','!-0px 0']]],
				['-4500-top', [['background-position','!-164px 0']]],
				['-4550-top', [['background-position','!-0px 0']]],
				['-4600-top', [['background-position','!-164px 0']]],
				['-4700-top', [['top','5%']]],
				['-4800-top', [['top','-150%']]],
				['-4801-top', [['display','none']]],			
			    ]
			},
			{
			    id: 'jb_personality',
			    data: [
				['anchor-target', [['#_home']]],
				['-4799-top', [['display','none']]],
				['-4800-top', [['top','150%'], ['display','block']]],
				['-4900-top', [['background-position','!-0px 0'], ['transform','rotate(-15deg)'], ['top','20%']]],
				['-5000-top', [['background-position','!-158px 0'], ['transform','rotate(15deg)']]],
				['-5100-top', [['background-position','!-0px 0'], ['transform','rotate(-15deg)']]],
				['-5200-top', [['top','20%']]],
				['-5300-top', [['top','-150%']]],
				['-5301-top', [['display','none']]],			
			    ]
			},
			{
			    id: 'clipboard',
			    data: [
				['anchor-target', [['#_home']]],
				['-2899-top', [['display','none']]],
				['-2900-top', [['top','150%'], ['display','block']]],
				['-3000-top', [['top','0'], ['background-position','!-0px 0']]],
				['-5200-top', [['left','-50%'], ['transform','scale(0.75)']]],
				['-5300-top', [['left','0%'], ['transform','scale(1)'], ['background-position','!-197px 0']]]
			    ],
			    nodes: [
				{
				    id: 'cv_progress',
				    data: [
					['anchor-target', [['#_home']]],
					['-2899-top', [['display','none']]],
					['-2900-top', [['display','block']]],
					['-3000-top', [['background-position','!-0px 0']]],
					['-3400-top', [['background-position','!-175px 0']]],
					['-3900-top', [['background-position','!-350px 0']]],
					['-4400-top', [['background-position','!-525px 0']]],
					['-4900-top', [['background-position','!-700px 0']]],
				    ],
				}
			    ]
			}
		    ]
		},
	    ]
	},
	{
	    id: 'factory',
	    data: [
		['32999', [['display','none']]],
		['36000', [['display','block'], ['top','100%'], ['background-color','!rgba(245,240,224,1)']]],
		['36500', [['top','0%']]],
		['42000', [['top','0%']]],
		['42500', [['background-color','!rgba(245,240,224,0)']]],
		['43500', [['display','none'], ['top','-100%']]],
	    ],
	    nodes: [
		{
		    id: 'scanner_cv',
		    data: [
			['anchor-target', [['#_factory']]],
			['100-top', [['top','-75%'], ['display','none']]],
			['-1-top', [['top','-75%'], ['display','block']]],
			['-500-top', [['top[sqrt]','20%']]],
			['-2500-top', [['top','70%']]],
			['-2800-top', [['top','-20%']]],
			['-4000-top', [['top','20%']]],
			['-4200-top', [['top','-80%']]],
			['-5600-top', [['top','0%']]],
		    ]
		},
		{ 
		    id: 'scanner',
		    data: [
				['anchor-target', [['#_factory']]],
				['top',[['top[cubic]','0%'], ['display','block']]],
				['-2200-top',[['top[cubic]','0%']]],
				['-2700-top',[['top[cubic]','-100%']]],
				['-4200-top',[['top[cubic]','-100%']]],
				['-4300-top',[['top[cubic]','-200%']]],
				['-6000-top',[['top[cubic]','-200%']]],
				['-6050-top',[['top[cubic]','-500%'], ['display','none']]],
		    ],
		    nodes: [
			{
			    id: 'conveyor',
			    data: [
				['anchor-target', [['#_factory']]],
				['top',[['background-position','0 0px'], ['display','block']]],
				['-5460-top',[['background-position','0 546px']]],
				['-6000-top',[['display','none']]]
			    ],
			}
		    ]
		},
		{ 
		    id: 'scanner_kit',
		    data: [
				['anchor-target', [['#_factory']]],
				['top',[['top[cubic]','0%']]],
				['-2200top',[['top[cubic]','0%']]],
				['-2700top',[['top[cubic]','-100%']]],
		    ],
		    nodes: [
			{
			    id: 'lcd_machine',
			    data: [
				['anchor-target', [['#_factory']]],
				['-1000-top',[['background-position','!-745px 0']]],
				['-1100-top',[['background-position','!0 0']]],
				['-1200-top',[['background-position','!-745px 0']]],
				['-1300-top',[['background-position','!0 0']]],
				['-1400-top',[['background-position','!-745px 0']]],
				['-1500-top',[['background-position','!0 0']]],

				['-1600-top',[['background-position','!-2235px 0']]],
				['-1700-top',[['background-position','!-1490px 0']]],
				['-1800-top',[['background-position','!-2235px 0']]],
				['-1900-top',[['background-position','!-1490px 0']]],
				['-2000-top',[['background-position','!-2235px 0']]],
				['-2100-top',[['background-position','!-1490px 0']]],

				['-2200-top',[['background-position','!-3725px 0']]],
				['-2300-top',[['background-position','!-2980px 0']]],
				['-2400-top',[['background-position','!-3725px 0']]],
				['-2500-top',[['background-position','!-2980px 0']]],
				['-2600-top',[['background-position','!-3725px 0']]],
				['-2700-top',[['background-position','!-2980px 0']]],
			    ]
			}
		    ]
		},
		{ 
		    id: 'security',
		    data: [
			['anchor-target', [['#_factory']]],
			['-2700-top',[['top','100%']]],
			['-2800-top',[['top','0%']]],
			['-4000-top',[['top','0%']]],
			['-4100-top',[['top','-100%']]],
		    ],
		    nodes: [
			{
			    id: 'left_security_arm',
			    data: [
				['anchor-target', [['#_factory']]],
				['-2800-top',[['right[sqrt]','70%']]],
				['-2900-top',[['right','80%']]],
				['-3000-top',[['right[sqrt]','70%']]],
				['-3100-top',[['right','80%']]],
				['-3200-top',[['right[sqrt]','70%']]],
				['-3300-top',[['right','80%']]],
				['-3400-top',[['right[sqrt]','70%']]],
				['-3500-top',[['right','80%']]],
				['-3600-top',[['right[sqrt]','70%']]],
				['-3700-top',[['right','80%']]],
				['-3800-top',[['right[sqrt]','70%']]],
				['-3900-top',[['right','80%']]],
				['-4000-top',[['right[sqrt]','70%']]],
				['-4100-top',[['right','80%']]],
				['-4200-top',[['right[sqrt]','70%']]],
				['-4300-top',[['right','80%']]],
			    ]
			},
			{
			    id: 'right_security_arm',
			    data: [
				['anchor-target', [['#_factory']]],
				['-2800-top',[['left[sqrt]','70%']]],
				['-2900-top',[['left','80%']]],
				['-3000-top',[['left[sqrt]','70%']]],
				['-3100-top',[['left','80%']]],
				['-3200-top',[['left[sqrt]','70%']]],
				['-3300-top',[['left','80%']]],
				['-3400-top',[['left[sqrt]','70%']]],
				['-3500-top',[['left','80%']]],
				['-3600-top',[['left[sqrt]','70%']]],
				['-3700-top',[['left','80%']]],
				['-3800-top',[['left[sqrt]','70%']]],
				['-3900-top',[['left','80%']]],
				['-4000-top',[['left[sqrt]','70%']]],
				['-4100-top',[['left','80%']]],
				['-4200-top',[['left[sqrt]','70%']]],
				['-4300-top',[['left','80%']]],
			    ]
			}
		    ]
		},
		{
		    id: 'matches',
		    data: [
			['anchor-target', [['#_factory']]],
			['-4200-top',[['top','100%']]],
			['-4300-top',[['top','0%']]],
			['-6000-top',[['top','0%']]],
			['-6200-top',[['top','-100%']]],
		    ],
		    nodes: [
			{
			    id: 'matching_machine',
			    data: [],
			    nodes: []
			},
			{
			    id: 'left_thumbs_up>img',
			    data: [
				['anchor-target', [['#_factory']]],
				['-4300-top',[['transform','rotate(0deg)']]],
				['-4400-top',[['transform','rotate(-90deg)']]],
				['-4500-top',[['transform','rotate(0deg)']]],
				['-4600-top',[['transform','rotate(-90deg)']]],
				['-4700-top',[['transform','rotate(0deg)']]],
				['-4800-top',[['transform','rotate(-90deg)']]],
				['-4900-top',[['transform','rotate(0deg)']]],
				['-5000-top',[['transform','rotate(-90deg)']]],
				['-5100-top',[['transform','rotate(0deg)']]],
				['-5200-top',[['transform','rotate(-90deg)']]],
				['-5300-top',[['transform','rotate(0deg)']]],
				['-5400-top',[['transform','rotate(-90deg)']]],
				['-5500-top',[['transform','rotate(0deg)']]],
				['-5600-top',[['transform','rotate(-90deg)']]],
				['-5700-top',[['transform','rotate(0deg)']]],
				['-5800-top',[['transform','rotate(-90deg)']]],
				['-5900-top',[['transform','rotate(0deg)']]],
				['-6000-top',[['transform','rotate(-90deg)']]],
				['-6100-top',[['transform','rotate(0deg)']]],
			    ]
			},
			{
			    id: 'right_thumbs_up>img',
			    data: [
				['anchor-target', [['#_factory']]],
				['-4300-top',[['transform','rotate(0deg)']]],
				['-4400-top',[['transform','rotate(90deg)']]],
				['-4500-top',[['transform','rotate(0deg)']]],
				['-4600-top',[['transform','rotate(90deg)']]],
				['-4700-top',[['transform','rotate(0deg)']]],
				['-4800-top',[['transform','rotate(90deg)']]],
				['-4900-top',[['transform','rotate(0deg)']]],
				['-5000-top',[['transform','rotate(90deg)']]],
				['-5100-top',[['transform','rotate(0deg)']]],
				['-5200-top',[['transform','rotate(90deg)']]],
				['-5300-top',[['transform','rotate(0deg)']]],
				['-5400-top',[['transform','rotate(90deg)']]],
				['-5500-top',[['transform','rotate(0deg)']]],
				['-5600-top',[['transform','rotate(90deg)']]],
				['-5700-top',[['transform','rotate(0deg)']]],
				['-5800-top',[['transform','rotate(90deg)']]],
				['-5900-top',[['transform','rotate(0deg)']]],
				['-6000-top',[['transform','rotate(90deg)']]],
				['-6100-top',[['transform','rotate(0deg)']]],
			    ]
			}
		    ]
		},
		{
		    id: 'factory_mask',
		    data: [
			['anchor-target', [['#_factory']]],
			['-4200-top',[['top','100%'], ['display','block']]],
			['-4300-top',[['top','50%']]],
			['-6000-top',[['top','50%'], ['display','none']]],
			['-6200-top',[['top','-100%']]],
		    ]
		}
	    ]
	},
	{
	    id: 'selection',
	    data: [
		['40499', [['display','none']]],
		['40500', [['display','block'], ['top','100%']]],
		['41000', [['top','50%']]],
		['41500', [['top','0%']]],
		['49000', [['top','0%']]],
		['50500', [['display','none'], ['top','-100%']]],
	    ],
	    nodes: [
		{
		    id: 'match_line',
		    data: [
			['anchor-target', [['#_selection']]],
			['1500-top',[['top','70%']]],
			['-200-top',[['top','70%']]],
			['-1000-top',[['top','0%']]],
			['-7500-top',[['top','0%']]],
			['-8000-top',[['top','-100%']]],
		    ],
		    nodes: [
			{
			    id: 'drawing_line>path#first',
			    data: [
				['anchor-target', [['#_selection']]],
				['1000-top',[['stroke-dashoffset','2000']]],
				['1000-top',[['stroke-dashoffset','2000']]],
				['-1200-top',[['stroke-dashoffset','1999']]],
				['-2000-top',[['stroke-dashoffset','1000']]],
				['-4300-top',[['stroke-dashoffset','1000']]],
				['-4350-top',[['stroke-dashoffset','-2000']]],
			    ]
			},
			{
			    id: 'prospect_one',
			    data: [
				['anchor-target', [['#_selection']]],
				['-1399-top',[['opacity','0']]],
				['-1500-top',[['opacity','1'],['transform','!scaleX(1)']]],
				['-1800-top',[['opacity','1'],['transform','!scaleX(-1)']]],
				['-4350-top',[['opacity','1']]],
				['-4500-top',[['opacity','0']]],
			    ]
			},
			{
			    id: 'drawing_line>path#second',
			    data: [
				['anchor-target', [['#_selection']]],
				['-1899-top',[['stroke-dashoffset','2000']]],
				['-2400-top',[['stroke-dashoffset','0']]],
				['-4500-top',[['stroke-dashoffset','0']]],
				['-4650-top',[['stroke-dashoffset','-2000']]],
			    ]
			},
			{
			    id: 'prospect_two',
			    data: [
				['anchor-target', [['#_selection']]],
				['-2099-top',[['opacity','0']]],
				['-2200-top',[['opacity','1'],['transform','!scaleX(1)']]],
				['-2500-top',[['opacity','1'],['transform','!scaleX(-1)']]],
				['-4600-top',[['opacity','1']]],
				['-4750-top',[['opacity','0']]],
			    ]
			},
			{
			    id: 'drawing_line>path#third',
			    data: [
				['anchor-target', [['#_selection']]],
				['-2699-top',[['stroke-dashoffset','2000']]],
				['-3200-top',[['stroke-dashoffset','0']]],
				['-4750-top',[['stroke-dashoffset','0']]],
				['-4900-top',[['stroke-dashoffset','-2000']]],
			    ]
			},
			{
			    id: 'prospect_three',
			    data: [
				['anchor-target', [['#_selection']]],
				['-2899-top',[['opacity','0']]],
				['-3000-top',[['opacity','1'],['transform','!scaleX(1)']]],
				['-3300-top',[['opacity','1'],['transform','!scaleX(-1)']]],
				['-4900-top',[['opacity','1']]],
				['-5150-top',[['opacity','0']]],
			    ]
			},
			{
			    id: 'drawing_line>path#fourth',
			    data: [
				['anchor-target', [['#_selection']]],
				['-3500-top',[['stroke-dashoffset','2000']]],
				['-3900-top',[['stroke-dashoffset','0']]],
				['-5150-top',[['stroke-dashoffset','0']]],
				['-5300-top',[['stroke-dashoffset','-2000']]],
			    ]
			},
			{
			    id: 'prospect_four',
			    data: [
				['anchor-target', [['#_selection']]],
				['-3699-top',[['opacity','0']]],
				['-3800-top',[['opacity','1'],['transform','!scaleX(1)']]],
				['-4100-top',[['opacity','1'],['transform','!scaleX(-1)']]],
				['-5300-top',[['opacity','1']]],
				['-5450-top',[['opacity','0']]],
			    ]
			},
			{
			    id: 'drawing_line>path#fifth',
			    data: [
				['anchor-target', [['#_selection']]],
				['-4150-top',[['stroke-dashoffset','2000']]],
				['-4550-top',[['stroke-dashoffset','0']]],
				['-5600-top',[['stroke-dashoffset','0']]],
				['-5650-top',[['stroke-dashoffset','-2000']]],
			    ]
			},
			{
			    id: 'prospect_five',
			    data: [
				['anchor-target', [['#_selection']]],
				['-4249-top',[['opacity','0']]],
				['-4350-top',[['opacity','1']]],
				['-5650-top',[['bottom','10%']]],
				['-5850-top',[['bottom','55%']]],
			    ]
			},
			{
			    id: 'phone_carpet',
			    data: [
				['anchor-target', [['#_selection']]],
				['-5600-top',[['top','100%']]],
				['-5800-top',[['top','70%']]],
			    ]
			},
			{
			    id: 'phone_call',
			    data: [
				['anchor-target', [['#_selection']]],
				['-5600-top',[['bottom','-100%']]],
				['-5800-top',[['bottom','20%']]],
			    ],
			    nodes: [
				{
				    id: 'desk_phone',
				    data: [
					['anchor-target', [['#_selection']]],
					['-5900-top',[['transform','rotate(0deg)']]],
					['-5920-top',[['transform','rotate(-10deg)']]],
					['-5940-top',[['transform','rotate(10deg)']]],
					['-5950-top',[['transform','rotate(-10deg)']]],
					['-6000-top',[['transform','rotate(0deg)']]],
					['-6100-top',[['transform','rotate(0deg)']]],
					['-6120-top',[['transform','rotate(10deg)']]],
					['-6140-top',[['transform','rotate(-10deg)']]],
					['-6150-top',[['transform','rotate(10deg)']]],
					['-6200-top',[['transform','rotate(0deg)']]],
					['-6300-top',[['transform','rotate(0deg)']]],
					['-6320-top',[['transform','rotate(10deg)']]],
					['-6340-top',[['transform','rotate(-10deg)']]],
					['-6350-top',[['transform','rotate(10deg)']]],
					['-6400-top',[['transform','rotate(0deg)']]],
				    ]
				}
			    ]
			},
			{
			    id: 'ring_one',
			    data: [
				['anchor-target', [['#_selection']]],
				['-5799-top', [['display','none']]],
				['-5800-top', [['transform','scale(0)'], ['display','block']]],
				['-5850-top', [['transform','scale(1.2)']]],
				['-5900-top', [['transform','scale(1)']]],
				['-6200-top', [['transform','scale(1)']]],
				['-6250-top', [['transform','scale(0)']]],
				['-6251-top', [['display','none']]],
			    ]
			},
			{
			    id: 'ring_three',
			    data: [
				['anchor-target', [['#_selection']]],
				['-5999-top', [['display','none']]],
				['-6000-top', [['transform','scale(0)'], ['display','block']]],
				['-6050-top', [['transform','scale(1.2)']]],
				['-6100-top', [['transform','scale(1)']]],
				['-6400-top', [['transform','scale(1)']]],
				['-6450-top', [['transform','scale(0)']]],
				['-6451-top', [['display','none']]],
			    ]
			},
			{
			    id: 'ring_two',
			    data: [
				['anchor-target', [['#_selection']]],
				['-6199-top', [['display','none']]],
				['-6200-top', [['transform','scale(0)'], ['display','block']]],
				['-6250-top', [['transform','scale(1.2)']]],
				['-6300-top', [['transform','scale(1)']]],
				['-6600-top', [['transform','scale(1)']]],
				['-6650-top', [['transform','scale(0)']]],
				['-6651-top', [['display','none']]],
			    ]
			},
			{
			    id: 'interview_bubble',
			    data: [
				['anchor-target', [['#_selection']]],
				['-6599-top', [['display','none']]],
				['-6600-top', [['transform','scale(0)'], ['display','block']]],
				['-6650-top', [['transform','scale(1.2)']]],
				['-6900-top', [['transform','scale(1)']]],
				['-7000-top', [['transform','scale(1)']]],
				['-7050-top', [['transform','scale(0)']]],
				['-7051-top', [['display','none']]],
			    ]
			},
			{
			    id: 'yay_bubble',
			    data: [
				['anchor-target', [['#_selection']]],
				['-7099-top', [['display','none']]],
				['-7100-top', [['transform','scale(0)'], ['display','block']]],
				['-7150-top', [['transform','scale(1.2)']]],
				['-7200-top', [['transform','scale(1)']]],
				['-7500-top', [['transform','scale(1)']]],
				['-7550-top', [['transform','scale(0)']]],
				['-7551-top', [['display','none']]],
			    ]
			}
		    ],
		}
	    ]
	},
	{
	    id: 'suiting_up',
	    data: [
		['48999', [['display','none']]],
		['49000', [['display','block'], ['top','100%']]],
		['50500', [['top','0%']]],
		['59000', [['top','0%']]],
		['60500', [['display','none'], ['top','-100%']]],
	    ],
	    nodes: [
		{
		    id: 'jobsworthy_suiting_up',
		    data: [
			['anchor-target',[['#_suiting_up']]],
			['500-top', [['display','block'], ['top[sqrt]','100%']]],
			['top', [['top','0%']]],
		    ],
		    nodes: [
			{
			    id: 'wardrobe',
			    data: [
				['anchor-target',[['#_suiting_up']]],
				['200-top', [['display','none']]],
				['1-top', [['display','block'], ['background-position','!0px 0']]],
				['-500-top', [['bottom[bounce]','1000%']]],
				['-800-top', [['bottom','-5%'], ['transform[bounce]','rotate(0deg)']]],
				['-820-top', [['bottom','20%'], ['transform','rotate(10deg)']]],
				['-840-top', [['bottom','10%'], ['transform','rotate(-8deg)']]],
				['-860-top', [['bottom','5%'], ['transform','rotate(5deg)']]],
				['-880-top', [['bottom','-5%'], ['transform','rotate(0deg)']]],
				['-900-top', [['bottom','3%'], ['transform','rotate(-5deg)']]],
				['-950-top', [['bottom','-5%'], ['transform','rotate(0deg)']]],
				['-1400-top', [['background-position','!-585px 0']]],
				['-1800-top', [['bottom','-5%']]],
				['-2100-top', [['bottom','1000%']]],
			    ]
			},
			{
			    id: 'fixup_bubble',
			    data: [
				['anchor-target', [['#_suiting_up']]],
				['-899-top', [['display','none']]],
				['-900-top', [['transform','scale(0)'], ['display','block']]],
				['-950-top', [['transform','scale(1.2)']]],
				['-1000-top', [['transform','scale(1)']]],
				['-1300-top', [['transform','scale(1)']]],
				['-1350-top', [['transform','scale(0)']]],
				['-1351-top', [['display','none']]],
			    ]
			},
			{
			    id: 'jobsworthy_prechange',
			    data: [
				['anchor-target',[['#_suiting_up']]],
				['200-top', [['display','block']]],
				['-1700-top', [['display','none']]],
			    ]
			},
			{
			    id: 'jobsworthy_suited',
			    data: [
				['anchor-target',[['#_suiting_up']]],
				['-1399-top', [['display','none']]],
				['-1400-top', [['display','block']]],
				['-1500-top', [['bottom','0%']]],
				['-1700-top', [['bottom','-10%']]],
			    ]
			},
			{
			    id: 'jobsworthy_screen',
			    data: [
				['anchor-target',[['#_suiting_up']]],
				['-1399-top', [['display','none']]],
				['-1400-top', [['display','block']]],
				['-1500-top', [['opacity','0.7']]],
				['-1700-top', [['opacity','0']]],
			    ]
			},
			{
			    id: 'whistle_bubble',
			    data: [
				['anchor-target', [['#_suiting_up']]],
				['-1699-top', [['display','none']]],
				['-1700-top', [['transform','scale(0)'], ['display','block']]],
				['-1750-top', [['transform','scale(1.2)']]],
				['-1800-top', [['transform','scale(1)']]],
				['-2100-top', [['transform','scale(1)']]],
				['-2150-top', [['transform','scale(0)']]],
				['-2151-top', [['display','none']]],
			    ]
			}
		    ]
		}
	    ]
	}
    ]
}
exports.dataProps = dataProps
