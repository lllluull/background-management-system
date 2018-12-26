export default  [
    {
        title: '首页',
        key: '/admin/home'
    },
    {
        title: 'UI',
        key: '/admin/ui',
        children: [
            {
                title:'按钮',
                key: '/admin/ui/button'
            },
            {
                title:'弹窗',
                key: '/admin/ui/toast'
            },
            {
                title:'输入框',
                key: '/admin/ui/input'
            },
            {
                title: '注册表单',
                key: '/admin/ui/register'
            },
            {
                title: '表格',
                key: '/admin/ui/table'
            }
        ]
    },
    {
        title: '订单设置',
        key: '/admin/order',
        children:[
            {
                title:'总订单',
                key:'/admin/order/all'
            },
            {
                title: '新的订单',
                key: '/admin/order/new'
            },
            {
                title: '原先订单',
                key: '/admin/order/old'
            },
            {
                title: '废弃订单',
                key: '/admin/order/abanda'
            }
        ]
    },
    {
        title: '权限设置',
        key: '/admin/permission'
    }
]