import {
    Home,
    Box,
    DollarSign,
    UserPlus,
    Settings
} from 'react-feather';

export const MENUITEMS = [
    {
        path: '/dashboard', title: 'Dashboard', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        title: 'Products', icon: Box, type: 'sub', active: false, children: [
            {
                title: 'Physical', type: 'sub', active: false, children: [
                    { path: '/products/physical/product-list', title: 'Product List', type: 'link' },
                    { path: '/products/physical/add-product', title: 'Add Product', type: 'link' },
                ]
            },
            {
                title: 'digital', type: 'sub', active: false, children: [
                    { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
                    { path: '/products/digital/digital-add-product', title: 'Add Product', type: 'link' },
                ]
            },
        ]
    },
    {
        title: 'Sales', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/sales/orders', title: 'Orders', type: 'link' },
            { path: '/sales/transactions', title: 'Transactions', type: 'link' },
        ]
    },    
    {
        title: 'Users', icon: UserPlus, type: 'sub', active: false, children: [
            { path: '/users/list-user', title: 'User List', type: 'link' },
        ]
    },
    {
        title: 'Settings', icon: Settings, type: 'sub', children: [
            { path: '/settings/profile', title: 'Profile', type: 'link' },
        ]
    }
]
