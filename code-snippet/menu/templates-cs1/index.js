ej.base.enableRipple(false);

//Menu data definition
var data = [
    {
        category: 'Products',
        options: [
            { value: 'JavaScript', url: 'javascript' },
            { value: 'Angular', url: 'angular' },
            { value: 'ASP.NET Core', url: 'core' },
            { value: 'ASP.NET MVC', url: 'mvc' }
        ]
    },
    {
        category: 'Services',
        options: [
            {
                support: [
                    { value: 'Application Development', count: '1200+' },
                    { value: 'Maintenance & Support', count: '3700+' },
                    { value: 'Quality Assurance' },
                    { value: 'Cloud Integration', count: '900+' }
                ]
            }
        ]
    },
    {
        category: 'About Us',
        options: [
            {
                about: {
                    value: "We are on a mission to provide world-class best software solutions for web, mobile and desktop platforms. Around 900+ applications are desgined and delivered to our customers to make digital & strengthen their businesses."
                }
            }
        ]
    },
    { category: 'Careers' },
    { category: 'Sign In' }
];

//Menu fields definition 
var menuFields  = {
    text: ['category', 'value'],
    children: ['options']
};

//Menu initialization
var menuObj = new ej.navigations.Menu({
    items: data,
    fields: menuFields,
    template: '#menuTemplate'
}, '#menu');

