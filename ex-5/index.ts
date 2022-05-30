import fetch from 'node-fetch';

async function getData(url: any) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

getData('https://introspection.apis.stepzen.com/orders').then((res: any) =>
  console.log(res),
);

getData('https://introspection.apis.stepzen.com/customers/1').then((res: any) =>
  console.log(res),
);
