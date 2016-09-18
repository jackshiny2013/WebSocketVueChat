/**
 * Created by Administrator on 2016/6/2.
 */

import {getToken} from '../utils/authService'

export function configRouter(router) {
    router.redirect({
        '*': 'main'
    })

    // 路由
    router.map({
        '/':{
          name:'main',
            component: require('../views/login.vue')
        },
        '/login': {
            name: 'login',
            component: require('../views/login.vue')
        },

        '/main': {
            name: 'main',
            component: require('../App.vue'),
            subRoutes: {
                '/': {
                    name: 'workspace',
                    component: require('../components/workspace.vue'),
                    subRoutes: {
                        '/': {
                            name: 'home',
                            component: require('../components/home.vue')
                        },
                        '/task': {
                            name: 'task',
                            component: require('../components/task.vue')
                        }
                    }
                },
                '/business': {
                    name: 'business',
                    component: require('../components/business.vue'),
                    subRoutes: {
                        '/crm': {
                            name: 'crm',
                            component: require('../components/crm.vue')
                        },
                        '/contract': {
                            name: 'contract',
                            component: require('../components/contract.vue')
                        },
                        '/client_detail/:id': {
                            name: 'client_detail',
                            component: require('../components/client_detail.vue'),
                        },
                        '/manpower/:id': {
                            name: 'manpower',
                            component: require('../components/company_detail/manpower.vue')
                        },
                        '/financial/:id': {
                            name: 'financial',
                            component: require('../components/company_detail/financial.vue')
                        },
                        '/property_right/:id': {
                            name: 'property_right',
                            component: require('../components/company_detail/property_right.vue')
                        },
                        '/Annex_information/:id': {
                            name: 'Annex_information',
                            component: require('../components/company_detail/Annex_information.vue')
                        },
                        '/user_management/:id': {
                            name: 'user_management',
                            component: require('../components/company_detail/user_management.vue')
                        },
                        '/org_user_management/:id': {
                            name: 'org_user_management',
                            component: require('../components/company_detail/org_user_management.vue')
                        },
                        '/addCompnay': {
                            name: 'addCompany',
                            component: require('../components/company_detail/addCompany.vue')
                        }
                    }
                },
                '/project': {
                    name: 'project',
                    component: require('../components/project.vue'),
                    subRoutes: {
                        '/subject': {
                            name: 'subject',
                            component: require('../components/subject.vue')
                        },
                        '/publish_subject': {
                            name: 'publish_subject',
                            component: require('../components/publish_subject.vue')
                        },
                        '/qualification_inspecting': {
                            name: 'qualification_inspecting',
                            component: require('../components/qualification_inspecting.vue')
                        },
                        '/report': {
                            name: 'report',
                            component: require('../components/report.vue')
                        },
                        '/report_detail/:id': {
                            name: 'report_detail',
                            component: require('../components/report_detail.vue')
                        }
                    }
                },
                '/file_center': {
                    name: 'file_center',
                    component: require('../components/file_center.vue'),
                    subRoutes: {
                        '/my_file': {
                            name: 'my_file',
                            component: require('../components/my_file.vue')
                        }
                    }
                }
            }
        }
    })

    router.beforeEach(transition => {
        if (transition.to.path === '/forbidden') {
            router.app.authenticating = true
            setTimeout(() => {
                router.app.authenticating = false
                // alert('this route is forbidden by a global before hook')
                transition.abort()
            }, 3000)
        } else if (!getToken() && transition.to.path !== '/login') {
            router.go('login')
        } else {
            transition.next()
        }
    })
}
