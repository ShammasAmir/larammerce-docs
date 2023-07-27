module.exports = [
  {
    title: 'Getting Started',
    collapsable: true,
    children: prefix('getting-started', [
      '',
      'license',
      'installation',
      'upgrade',
      'contributing',
      'documentation',
      'support',
    ]),
  },
  {
    title: 'Theme Development',
    collapsable: true,
    children: prefix('theme-development', [
      '',
      'basics',
      'static-content',
      'file-management',
      'galleries',
      'forms',
      'products',
      'pop-ups-in-larammerce-template-engine',
      'product-limitation',
      'articles',
      'directories',
      'custom-queries',
      'custom-filters',
      'helpers',
      'client-side-cart-module',
      'filter-service',
      'representative',
    ]),
  },
  {
    title: 'Core concepts',
    collapsable: true,
    children: prefix('core-concepts', [
      '',
      'cruds',
      'annotations',
      'validation',
      'admin-requests',
      'rules-and-permissions',
      'authentication',
      'settings-and-configurations',
      'template-engine',
      'appliances',
      'customer-requests',
      'shopping-process',
    ]),
  },
  {
    title: 'Utils',
    collapsable: true,
    children: prefix('utils', [
      '',
      'class-finder',
      'enums',
      'explore',
      'platform-detection',
      'history',
      'image',
      'message',
      'sms',
      'time',
      'email',
      'file',
      'dates',
      'forms',
    ]),
  },
  {
    title: 'Features',
    collapsable: true,
    children: prefix('features', [
      '',
      'explore',
      'fin-manager',
      'payment',
      'shipment',
      'one-time-code',
      'news-letter',
      'survey',
      'cart',
      'product',
      'invoice',
      'robot-txt',
      'logs',
      'modals',
      'users',
      'discounts',
      'logistics',
      'web-pages',
      'web-forms',
      'short-links',
    ]),
  },
]
;[
  ...prefix('core-concepts', [
    'README',
    'cruds',
    'annotations',
    'validation',
    'admin-requests',
    'rules-and-permissions',
    'authentication',
    'settings-and-configurations',
    'template-engine',
    'appliances',
    'customer-requests',
    'shopping-process',
  ]),
  ...prefix('utils', [
    'README',
    'class-finder',
    'enums',
    'explore',
    'platform-detection',
    'history',
    'image',
    'message',
    'sms',
    'time',
    'email',
    'file',
    'dates',
    'forms',
  ]),
  ...prefix('features', [
    'README',
    'explore',
    'fin-manager',
    'payment',
    'shipment',
    'one-time-code',
    'news-letter',
    'survey',
    'cart',
    'product',
    'invoice',
    'robot-txt',
    'logs',
    'modals',
    'users',
    'discounts',
    'logistics',
    'web-pages',
    'web-forms',
    'short-links',
  ]),
].forEach(function (item) {
  console.log(item)
})

function prefix(prefix, children) {
  return children.map((child) => `${prefix}/${child}`)
}
