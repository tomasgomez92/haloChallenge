// Define all ENUMS here and import them wherever needed 

const userInfo = {
    validUser: {
        firstName: 'John',
        lastName: 'Doe',
        postalCode: '12345',
    }
}

const sideBarOptions = {
    ALL_ITEMS: 'All Items',
    ABOUT: 'About',
    LOGOUT: 'Logout',
    RESET_APP_STATE: 'Reset App State',
    CLOSE_SIDE_BAR: 'Close Side Bar',
}

const items = {
    BACKPACK: 'Backpack',
    BIKE_LIGHT: 'Bike Light',
    BOLT_T_SHIRT: 'Bolt T-Shirt',
    FLEECE_JACKET: 'Fleece Jacket',
    ONESIE: 'Onesie',
    RED_T_SHIRT: 'Red T-Shirt',
    T_SHIRT: 'T-Shirt',
}

const itemInfo = {
    backpack: {
        id: 4,
        name: 'Sauce Labs Backpack',
        description: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
        price: '$29.99',
        tax: '$2.40',
        total: '$32.39',
    },
    bikeLight: {
        id: 0,
        name: 'Sauce Labs Bike Light',
        description: 'A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.',
        price: '$9.99',
        tax: '$0.80',
        total: '$10.79',
    },
    boltTShirt: {
        id: 1,
        name: 'Sauce Labs Bolt T-Shirt',
        description: 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.',
        price: '$15.99',
        tax: '$1.28',
        total: '$17.27',
    },
    fleeceJacket: {
        id: 5,
        name: 'Sauce Labs Fleece Jacket',
        description: 'It\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.',
        price: '$49.99',
        tax: '$4.00',
        total: '$53.99',
    },
    onesie: {
        id: 2,
        name: 'Sauce Labs Onesie',
        description: 'Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won\'t unravel.',
        price: '$7.99',
        tax: '$0.64',
        total: '$8.63',
    },
    tShirt: {
        id: 3,
        name: 'Test.allTheThings() T-Shirt (Red)',
        description: 'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.',
        price: '$15.99',
        tax: '$1.28',
        total: '$17.27',
    }
};

const checkoutErrorMessages = {
    emptyName: 'Error: First Name is required',
    emptyLastName: 'Error: Last Name is required',
    emptyPostalCode: 'Error: Postal Code is required',
}

const checkOutComplete = {
    pageTitle: 'Checkout: Complete!',
    completeHeader: 'Thank you for your order!',
    completeText: 'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
}

export const enums = {
  userInfo,
  sideBarOptions,
  items,
  itemInfo,
  checkoutErrorMessages,
  checkOutComplete
};