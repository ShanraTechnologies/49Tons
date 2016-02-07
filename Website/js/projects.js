$(function(){
        $("#projects").elastic_grid({
            'showAllText' : 'All',
            'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 500,
            'items' :
            [
                {
                    'title'         : 'This is our stunning first app project',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/portfolio/project-1/thumb-1.jpg', 'img/portfolio/project-1/thumb-2.jpg', 'img/portfolio/project-1/thumb-3.jpg', 'img/portfolio/project-1/thumb-4.jpg', 'img/portfolio/project-1/thumb-5.jpg'],
                    'large'         : ['img/portfolio/project-1/img-1.jpg', 'img/portfolio/project-1/img-2.jpg', 'img/portfolio/project-1/img-3.jpg', 'img/portfolio/project-1/img-4.jpg', 'img/portfolio/project-1/img-5.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : '#', 'new_window' : true },
                        { 'title':'Download', 'url':'#', 'new_window' : false}
                    ],
                    'tags'          : ['Design, Development']
                },
				{
                    'title'         : 'This is our beautifully crafted 2nd app project',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/portfolio/project-2/thumb-1.jpg', 'img/portfolio/project-2/thumb-2.jpg', 'img/portfolio/project-2/thumb-3.jpg', 'img/portfolio/project-2/thumb-4.jpg', 'img/portfolio/project-2/thumb-5.jpg'],
                    'large'         : ['img/portfolio/project-2/img-1.jpg', 'img/portfolio/project-2/img-2.jpg', 'img/portfolio/project-2/img-3.jpg', 'img/portfolio/project-2/img-4.jpg', 'img/portfolio/project-2/img-5.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : '#', 'new_window' : true },
                        { 'title':'Download', 'url':'#', 'new_window' : false}
                    ],
                    'tags'          : ['Design, UI/UX']
                },
				{
                    'title'         : 'This is our colorful design project',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/portfolio/project-3/thumb-1.jpg', 'img/portfolio/project-3/thumb-2.jpg', 'img/portfolio/project-3/thumb-3.jpg', 'img/portfolio/project-3/thumb-4.jpg', 'img/portfolio/project-3/thumb-5.jpg'],
                    'large'         : ['img/portfolio/project-3/img-1.jpg', 'img/portfolio/project-3/img-2.jpg', 'img/portfolio/project-3/img-3.jpg', 'img/portfolio/project-3/img-4.jpg', 'img/portfolio/project-3/img-5.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : '#', 'new_window' : true },
                        { 'title':'Download', 'url':'#', 'new_window' : false}
                    ],
                    'tags'          : ['UI/UX, Database']
                },
                {
                    'title'         : 'This is our stunning first app project',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/portfolio/project-4/thumb-1.jpg', 'img/portfolio/project-4/thumb-2.jpg', 'img/portfolio/project-4/thumb-3.jpg', 'img/portfolio/project-4/thumb-4.jpg', 'img/portfolio/project-4/thumb-5.jpg'],
                    'large'         : ['img/portfolio/project-4/img-1.jpg', 'img/portfolio/project-4/img-2.jpg', 'img/portfolio/project-4/img-3.jpg', 'img/portfolio/project-4/img-4.jpg', 'img/portfolio/project-4/img-5.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : '#', 'new_window' : true },
                        { 'title':'Download', 'url':'#', 'new_window' : false}
                    ],
                    'tags'          : ['Design, Development']
                },
				{
                    'title'         : 'This is our beautifully crafted 2nd app project',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/portfolio/project-5/thumb-1.jpg', 'img/portfolio/project-5/thumb-2.jpg', 'img/portfolio/project-5/thumb-3.jpg', 'img/portfolio/project-5/thumb-4.jpg', 'img/portfolio/project-5/thumb-5.jpg'],
                    'large'         : ['img/portfolio/project-5/img-1.jpg', 'img/portfolio/project-5/img-2.jpg', 'img/portfolio/project-5/img-3.jpg', 'img/portfolio/project-5/img-4.jpg', 'img/portfolio/project-5/img-5.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : '#', 'new_window' : true },
                        { 'title':'Download', 'url':'#', 'new_window' : false}
                    ],
                    'tags'          : ['Design, UI/UX']
                },
				{
                    'title'         : 'This is our colorful design project',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/portfolio/project-6/thumb-1.jpg', 'img/portfolio/project-6/thumb-2.jpg', 'img/portfolio/project-6/thumb-3.jpg', 'img/portfolio/project-6/thumb-4.jpg', 'img/portfolio/project-6/thumb-5.jpg'],
                    'large'         : ['img/portfolio/project-6/img-1.jpg', 'img/portfolio/project-6/img-2.jpg', 'img/portfolio/project-6/img-3.jpg', 'img/portfolio/project-6/img-4.jpg', 'img/portfolio/project-6/img-5.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : '#', 'new_window' : true },
                        { 'title':'Download', 'url':'#', 'new_window' : false}
                    ],
                    'tags'          : ['UI/UX, Database']
                },
                {
                    'title'         : 'This is our stunning first app project',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/portfolio/project-7/thumb-1.jpg', 'img/portfolio/project-7/thumb-2.jpg', 'img/portfolio/project-7/thumb-3.jpg', 'img/portfolio/project-7/thumb-4.jpg', 'img/portfolio/project-7/thumb-5.jpg'],
                    'large'         : ['img/portfolio/project-7/img-1.jpg', 'img/portfolio/project-7/img-2.jpg', 'img/portfolio/project-7/img-3.jpg', 'img/portfolio/project-7/img-4.jpg', 'img/portfolio/project-7/img-5.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : '#', 'new_window' : true },
                        { 'title':'Download', 'url':'#', 'new_window' : false}
                    ],
                    'tags'          : ['Design, Development']
                },
				{
                    'title'         : 'This is our beautifully crafted 2nd app project',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/portfolio/project-8/thumb-1.jpg', 'img/portfolio/project-8/thumb-2.jpg', 'img/portfolio/project-8/thumb-3.jpg', 'img/portfolio/project-8/thumb-4.jpg', 'img/portfolio/project-8/thumb-5.jpg'],
                    'large'         : ['img/portfolio/project-8/img-1.jpg', 'img/portfolio/project-8/img-2.jpg', 'img/portfolio/project-8/img-3.jpg', 'img/portfolio/project-8/img-4.jpg', 'img/portfolio/project-8/img-5.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : '#', 'new_window' : true },
                        { 'title':'Download', 'url':'#', 'new_window' : false}
                    ],
                    'tags'          : ['Design, UI/UX']
                },
				{
                    'title'         : 'This is our colorful design project',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/portfolio/project-9/thumb-1.jpg', 'img/portfolio/project-9/thumb-2.jpg', 'img/portfolio/project-9/thumb-3.jpg', 'img/portfolio/project-9/thumb-4.jpg', 'img/portfolio/project-9/thumb-5.jpg'],
                    'large'         : ['img/portfolio/project-9/img-1.jpg', 'img/portfolio/project-9/img-2.jpg', 'img/portfolio/project-9/img-3.jpg', 'img/portfolio/project-9/img-4.jpg', 'img/portfolio/project-9/img-5.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : '#', 'new_window' : true },
                        { 'title':'Download', 'url':'#', 'new_window' : false}
                    ],
                    'tags'          : ['UI/UX, Database']
                },
                {
                    'title'         : 'This is our stunning first app project',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/portfolio/project-10/thumb-1.jpg', 'img/portfolio/project-10/thumb-2.jpg', 'img/portfolio/project-10/thumb-3.jpg', 'img/portfolio/project-10/thumb-4.jpg', 'img/portfolio/project-10/thumb-5.jpg'],
                    'large'         : ['img/portfolio/project-10/img-1.jpg', 'img/portfolio/project-10/img-2.jpg', 'img/portfolio/project-10/img-3.jpg', 'img/portfolio/project-10/img-4.jpg', 'img/portfolio/project-10/img-5.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : '#', 'new_window' : true },
                        { 'title':'Download', 'url':'#', 'new_window' : false}
                    ],
                    'tags'          : ['Design, Development']
                },
				{
                    'title'         : 'This is our beautifully crafted 2nd app project',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/portfolio/project-11/thumb-1.jpg', 'img/portfolio/project-11/thumb-2.jpg', 'img/portfolio/project-11/thumb-3.jpg', 'img/portfolio/project-11/thumb-4.jpg', 'img/portfolio/project-11/thumb-5.jpg'],
                    'large'         : ['img/portfolio/project-11/img-1.jpg', 'img/portfolio/project-11/img-2.jpg', 'img/portfolio/project-11/img-3.jpg', 'img/portfolio/project-11/img-4.jpg', 'img/portfolio/project-11/img-5.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : '#', 'new_window' : true },
                        { 'title':'Download', 'url':'#', 'new_window' : false}
                    ],
                    'tags'          : ['Design, UI/UX']
                },
				{
                    'title'         : 'This is our colorful design project',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/portfolio/project-12/thumb-1.jpg', 'img/portfolio/project-12/thumb-2.jpg', 'img/portfolio/project-12/thumb-3.jpg', 'img/portfolio/project-12/thumb-4.jpg', 'img/portfolio/project-12/thumb-5.jpg'],
                    'large'         : ['img/portfolio/project-12/img-1.jpg', 'img/portfolio/project-12/img-2.jpg', 'img/portfolio/project-12/img-3.jpg', 'img/portfolio/project-12/img-4.jpg', 'img/portfolio/project-12/img-5.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : '#', 'new_window' : true },
                        { 'title':'Download', 'url':'#', 'new_window' : false}
                    ],
                    'tags'          : ['UI/UX, Database']
                },
                {
                    'title'         : 'This is our stunning first app project',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/portfolio/project-13/thumb-1.jpg', 'img/portfolio/project-13/thumb-2.jpg', 'img/portfolio/project-13/thumb-3.jpg', 'img/portfolio/project-13/thumb-4.jpg', 'img/portfolio/project-13/thumb-5.jpg'],
                    'large'         : ['img/portfolio/project-13/img-1.jpg', 'img/portfolio/project-13/img-2.jpg', 'img/portfolio/project-13/img-3.jpg', 'img/portfolio/project-13/img-4.jpg', 'img/portfolio/project-13/img-5.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : '#', 'new_window' : true },
                        { 'title':'Download', 'url':'#', 'new_window' : false}
                    ],
                    'tags'          : ['Design, Development']
                },
				{
                    'title'         : 'This is our beautifully crafted 2nd app project',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/portfolio/project-14/thumb-1.jpg', 'img/portfolio/project-14/thumb-2.jpg', 'img/portfolio/project-14/thumb-3.jpg', 'img/portfolio/project-14/thumb-4.jpg', 'img/portfolio/project-14/thumb-5.jpg'],
                    'large'         : ['img/portfolio/project-14/img-1.jpg', 'img/portfolio/project-14/img-2.jpg', 'img/portfolio/project-14/img-3.jpg', 'img/portfolio/project-14/img-4.jpg', 'img/portfolio/project-14/img-5.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : '#', 'new_window' : true },
                        { 'title':'Download', 'url':'#', 'new_window' : false}
                    ],
                    'tags'          : ['Design, UI/UX']
                },
				{
                    'title'         : 'This is our colorful design project',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['img/portfolio/project-15/thumb-1.jpg', 'img/portfolio/project-15/thumb-2.jpg', 'img/portfolio/project-15/thumb-3.jpg', 'img/portfolio/project-15/thumb-4.jpg', 'img/portfolio/project-15/thumb-5.jpg'],
                    'large'         : ['img/portfolio/project-15/img-1.jpg', 'img/portfolio/project-15/img-2.jpg', 'img/portfolio/project-15/img-3.jpg', 'img/portfolio/project-15/img-4.jpg', 'img/portfolio/project-15/img-5.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : '#', 'new_window' : true },
                        { 'title':'Download', 'url':'#', 'new_window' : false}
                    ],
                    'tags'          : ['UI/UX, Database']
                }

            ]
        });
    });