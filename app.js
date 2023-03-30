function navigate(path) {
    // console.log(path);
    window.history.pushState({}, path, path);
    updateRoute();
}

const routes = {
    '/login': { templateId: 'login' },
    '/dashboard': { templateId: 'dashboard' },
    '/user': {templateId: 'user'},
};

const titles = {
    'login': { titleId: 'Login Page' },
    'dashboard': { titleId: 'Dashboard' },
    'user': {titleId: 'User Info'},
};

function updateRoute() {
    const path = window.location.pathname;
  const route = routes[path];
  if (!route) {
    return navigate('/login');
  }
  if(route) {
    document.title = titles[route.templateId].titleId 
    console.log(route.templateId + ' is displayed');
  }
  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
  }

  function onLinkClick(event) {
    event.preventDefault();
    navigate(event.target.href);
  }

  window.onpopstate = () => updateRoute();

updateRoute();