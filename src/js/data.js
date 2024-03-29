import {reactive} from 'vue'

export const data = reactive ({
    
    genLink: [
        {
            link: 'home'
        },
        {
            link: 'pages'
        },
        {
            link: 'tournament'
        },
        {
            link: 'shop'
        },
        {
            link: 'blog'
        },
        {
            link: 'contact'
        }
    ],

    cart: [
        {
            img: '/img/image (1).svg'
        },
        {
            img:'/img/image (3).svg'
        }
    ],

    social: [
        {
            img: '/img/image (4).svg'
        },
        {
            img: '/img/image (5).svg'
        },
        {
            img: '/img/image (6).svg'
        },
        {
            img: '/img/image (7).svg'
        }
    ],

    stream: [
        {
            img: '/img/image (13).svg'
        },
        {
            img: '/img/image (14).svg'
        }
    ],

    topFloat: [
        {
            img: '/img/1.png'
        },
        {
            img: '/img/2.png'
        },
        {
            img: '/img/3.png'
        },
        {
            img: '/img/4.png'
        },
        {
            img: '/img/5.png'
        },
        {
            img: '/img/6.png'
        }
    ],

    bestGaming: [
        {
            img: '/img/exprince.jpg',
            subtitle: '12 Year Experience',
            title: 'We Are The Best Gaming Company',
            text: 'Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.Praesent sapien massa, convallis a pellentesque nec, egestas non nisi praesent sapien massa ligula sed magna dictum porta.',
            text2: 'Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligulaa.',

            bullet: [
                {
                    img: '/img/image (10).svg',
                    bull: 'Sed porttitor lectus nibh. Proin eget tortor risus.'
                },
                {
                    img: '/img/image (10).svg',
                    bull: 'Praesent sapien massa, convallis a pellentesque nec. risus.'
                },
                {
                    img: '/img/image (10).svg',
                    bull: 'Praesent sapien massa, convallis a pellentesque nec. risus.'
                },
                {
                    img: '/img/image (10).svg',
                    bull: 'Praesent sapien massa, convallis a pellentesque nec. risus.'
                }
            ]
        }
    ],

    Arena: [
        {
            subtitle: 'Our Extrem Feature',
            title: 'The Best Gaming Arena On The World!',
            text: 'Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, at tellus. Cras ultricies ligula sed magna ivamus magna justo, dictum porta. sapien massa, convallis.',
            
            box: [
                {
                    img: '/img/feature1.png',
                    title: 'Live Streaming',
                    text: 'Nulla porttitor accumsan tincidunt. Pellentesque in.'
                },
                {
                    img: '/img/feature2.png',
                    title: 'Gaming News',
                    text: 'Nulla porttitor accumsan tincidunt. Pellentesque in.'
                },
                {
                    img: '/img/feature3.png',
                    title: 'Great Tournament',
                    text: 'Nulla porttitor accumsan tincidunt. Pellentesque in.'
                },
                {
                    img: '/img/feature4.png',
                    title: 'Awward Ceremony',
                    text: 'Nulla porttitor accumsan tincidunt. Pellentesque in.'
                }
            ]
        }
    ],

    Live: [
        {
            subtitle: 'Live Streaming',
            title: 'Checkout Our Live Streaming',
            
            box: [
                {
                    img: '/img/v-small1.png',
                    title: 'Call Of Deauty',
                    text: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.'
                },
                {
                    img: '/img/v-small2.png',
                    title: 'Gaming News',
                    text: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.'
                }
            ]
        }
    ],

    Upcoming: [
        {
            subtitle: 'Trending Battle',
            title: 'Upcoming Match',

            filter: [
                {
                    type: 'All',
                },
                {
                    type: 'Pubg',
                },
                {
                    type: 'COD',
                },
                {
                    type: 'AC',
                },
                {
                    type: 'MCX',
                }
            ],
            
            box: [
                {
                    type: 'All' + 'Pubg' + 'AC',
                    img1: '/img/t3.png',
                    country1: 'Italy',
                    name1: 'Ninga Gaming',
                    
                    img2: '/img/t4.png',
                    country2: 'India',
                    name2: 'Witch Gaming',

                    title: 'PUBG Battelground',
                    text: 'Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.',
                    hour: '10.45',
                    date: '1st November, 2022'
                },
                {
                    type: 'All' + 'COD' + 'AC',
                    img1: '/img/t1.png',
                    country1: 'Italy',
                    name1: 'King Gaming',
                    
                    img2: '/img/t2.png',
                    country2: 'India',
                    name2: 'Witch Gaming',

                    title: 'PUBG Battelground',
                    text: 'Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.',
                    hour: '9.45',
                    date: '1st November, 2022'
                },
                {
                    type: 'All' + 'Pubg' + 'MCX',
                    img1: '/img/t5.png',
                    country1: 'Italy',
                    name1: 'Dgn Gaming',
                    
                    img2: '/img/t6.png',
                    country2: 'India',
                    name2: 'Joker Gaming',

                    title: 'PUBG Battelground',
                    text: 'Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.',
                    hour: '8.45',
                    date: '1st November, 2022'
                },
                {
                    type: 'All' + 'COD' + 'AC',
                    img1: '/img/t7.png',
                    country1: 'Italy',
                    name1: 'Shark Gaming',
                    
                    img2: '/img/t8.png',
                    country2: 'India',
                    name2: 'Krull Gaming',

                    title: 'PUBG Battelground',
                    text: 'Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo.',
                    hour: '4.45',
                    date: '1st November, 2022'
                },
            ]
        }
    ],

    choose: [
        {
            subtitle: 'Our Extrem Feature',
            title: 'Choose Who Is The Best In World!',
            
            box: [
                {
                    type: 'New',
                    img: '/img/protfolio1.png',
                    title: 'Assassin \'s Creed',
                    text: 'Donec sollicitudin malesuada.'
                },
                {
                    type: 'New',
                    img: '/img/protfolio2.png',
                    title: 'Call Of Deauty',
                    text: 'Donec sollicitudin malesuada.'
                },
                {
                    type: 'New',
                    img: '/img/protfolio3.png',
                    title: 'Tomb Rider',
                    text: 'Donec sollicitudin malesuada.'
                },
                {
                    type: 'New',
                    img: '/img/protfolio4.png',
                    title: 'Mortal Combat X',
                    text: 'Donec sollicitudin malesuada.'
                }
            ]
        }
    ],

    battle: [
        {
            subtitle: 'Upcoming Match',
            title: 'Keep Eyes & Manage upcoming Battle',
            
            box: [
                {
                    img: '/img/1.png',
                    title: 'Ninja Warrior Gaming',
                    hour: '9.45',
                    data: '1st November,2022'
                },
                {
                    img: '/img/5.png',
                    title: 'Witch Gaming',
                    hour: '9.45',
                    data: '1st November,2022'
                },
                {
                    img: '/img/3.png',
                    title: 'SkullG Gaming',
                    hour: '9.45',
                    data: '1st November,2022'
                }
            ]
        }
    ],

    team: [
        {
            subtitle: 'Team Members',
            title: 'Our Experts Team Members',
            
            box: [
                {
                    img: '/img/team1.png',
                    name: 'Cristiano Messi',
                    rule: 'CEO/Founder'
                },
                {
                    img: '/img/team2.png',
                    name: 'Sergio Naymer',
                    rule: 'Programmer'
                },
                {
                    img: '/img/team3.png',
                    name: 'Antonella Roccuzzo',
                    rule: 'Project Manager'
                },
                {
                    img: '/img/team4.png',
                    name: 'Lionel Ramos',
                    rule: 'Game Designer'
                }
            ]
        }
    ],

    client: [
        {
            subtitle: 'Testimonials',
            title: 'What Our Client Say',
            
            box: [
                {
                    img: '/img/test1.png',
                    text: 'Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget',
                    name: 'Mohammad Sala',
                    rule: 'CEO/Founder'
                },
                {
                    img: '/img/test2.png',
                    text: 'Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget',
                    name: 'Mohammad Sala',
                    rule: 'CEO/Founder'
                },
                {
                    img: '/img/test3.png',
                    text: 'Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget',
                    name: 'Mohammad Sala',
                    rule: 'CEO/Founder'
                },
                {
                    img: '/img/test4.png',
                    text: 'Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget',
                    name: 'Mohammad Sala',
                    rule: 'CEO/Founder'
                }
            ]
        }
    ],

    shop: [
        {
            subtitle: 'Gammer Shop',
            title: 'Explore Our Shop',
            
            box: [
                {
                    img: '/img/s1.png',
                    name: 'Asus Rog Strix A53',
                    price: '$999.00',
                    discount: '$970.00'
                },
                {
                    img: '/img/s2.png',
                    name: 'Asus Rog Strix A53',
                    price: '$999.00',
                    discount: '$970.00'
                },
                {
                    img: '/img/s3.png',
                    name: 'Asus Rog Strix A53',
                    price: '$999.00',
                    discount: '$970.00'
                },
                {
                    img: '/img/s4.png',
                    name: 'Asus Rog Strix A53',
                    price: '$999.00',
                    discount: '$970.00'
                }
            ]
        }
    ],

    articles: [
        {
            subtitle: 'Latest News',
            title: 'Stay Updated With our Latest News Articles',
            
            box: [
                {
                    img: '/img/b1.png',
                    name: 'Ninja Warrior Gaming',
                    writer: 'By Admin',
                    data: 'Oct 25, 2022'
                },
                {
                    img: '/img/b2.png',
                    name: 'Gost Rider Returns',
                    writer: 'By Admin',
                    data: 'Oct 25, 2022'
                },
                {
                    img: '/img/b3.png',
                    name: 'Call Of Deauty 4',
                    writer: 'By Admin',
                    data: 'Oct 25, 2022'
                },
                {
                    img: '/img/b4.png',
                    name: 'Mortal Combat X',
                    writer: 'By Admin',
                    data: 'Oct 25, 2022'
                }
            ]
        }
    ]

});